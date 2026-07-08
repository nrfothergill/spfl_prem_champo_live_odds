function cleanText(value) {
  return String(value || "")
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120000);
}

function cleanScriptData(html) {
  const scripts = [...String(html || "").matchAll(/<script[^>]*>([\s\S]*?)<\/script>/gi)]
    .map((match) => match[1])
    .filter((text) => /odds|price|market|selection|runner|home|away|draw|corner|shot|card|foul|lineup|player/i.test(text))
    .join(" ");

  return scripts
    .replace(/\\u002F/g, "/")
    .replace(/\\u0026/g, "&")
    .replace(/[{}\[\]",:]/g, " ")
    .replace(/\\+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 120000);
}

function extractReadableText(body, contentType) {
  if (contentType.includes("text/html")) {
    return `${cleanText(body)} ${cleanScriptData(body)}`.replace(/\s+/g, " ").trim().slice(0, 180000);
  }
  return cleanText(body);
}

async function fetchSource(url) {
  return fetch(url, {
    redirect: "follow",
    headers: {
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36 FixtureIQ/1.0",
      accept: "text/html,application/xhtml+xml,application/json,text/plain;q=0.9,*/*;q=0.8",
      "accept-language": "en-GB,en;q=0.9",
      "cache-control": "no-cache",
      pragma: "no-cache",
    },
  });
}

function readerUrls(url) {
  const withoutScheme = url.replace(/^https?:\/\//i, "");
  return [`https://r.jina.ai/http://${url}`, `https://r.jina.ai/http://${withoutScheme}`];
}

async function fetchReaderFallback(url) {
  for (const candidate of readerUrls(url)) {
    try {
      const fallback = await fetchSource(candidate);
      if (fallback.ok) return fallback;
    } catch {
      // Try the next reader format.
    }
  }
  return null;
}

export default async function handler(request, response) {
  const rawUrl = request.query.url;
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    response.status(400).json({ ok: false, error: "Invalid URL" });
    return;
  }

  if (!["http:", "https:"].includes(url.protocol)) {
    response.status(400).json({ ok: false, error: "Only http and https links are supported" });
    return;
  }

  try {
    let upstream = await fetchSource(url.href);
    let usedFallback = false;

    if (!upstream.ok) {
      usedFallback = true;
      const fallback = await fetchReaderFallback(url.href);
      if (!fallback) {
        response.status(200).json({ ok: false, error: `Source returned HTTP ${upstream.status}` });
        return;
      }
      upstream = fallback;
    }

    const contentType = upstream.headers.get("content-type") || "";
    const body = await upstream.text();
    const text = extractReadableText(body, contentType);

    if (!text || text.length < 80) {
      const fallback = await fetchReaderFallback(url.href);
      if (fallback) {
        const fallbackType = fallback.headers.get("content-type") || "";
        const fallbackBody = await fallback.text();
        const fallbackText = extractReadableText(fallbackBody, fallbackType);
        if (fallbackText.length > text.length) {
          response.setHeader("Cache-Control", "no-store, max-age=0");
          response.status(200).json({ ok: true, contentType: fallbackType, text: fallbackText, readerFallback: true });
          return;
        }
      }
    }

    response.setHeader("Cache-Control", "no-store, max-age=0");
    response.status(200).json({
      ok: true,
      contentType,
      text,
      readerFallback: usedFallback,
    });
  } catch (error) {
    response.status(200).json({ ok: false, error: "Source could not be read automatically" });
  }
}
