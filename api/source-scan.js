function cleanText(html) {
  return String(html || "")
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
    const upstream = await fetch(url, {
      redirect: "follow",
      headers: {
        "user-agent": "FixtureIQ/1.0 football research link reader",
        accept: "text/html,text/plain,application/json;q=0.9,*/*;q=0.8",
      },
    });

    if (!upstream.ok) {
      response.status(200).json({ ok: false, error: `Source returned HTTP ${upstream.status}` });
      return;
    }

    const contentType = upstream.headers.get("content-type") || "";
    const body = await upstream.text();
    response.setHeader("Cache-Control", "no-store, max-age=0");
    response.status(200).json({
      ok: true,
      contentType,
      text: contentType.includes("text/html") ? cleanText(body) : cleanText(body),
    });
  } catch (error) {
    response.status(200).json({ ok: false, error: "Source could not be read automatically" });
  }
}
