const RSEBL_URL = "https://rsebl.org.bt/api/v2/market-ticker"

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" })
  }

  try {
    const upstream = await fetch(RSEBL_URL, {
      headers: { Accept: "application/json" },
      // 5-second timeout via AbortSignal if available (Node 18+)
      ...(typeof AbortSignal?.timeout === "function"
        ? { signal: AbortSignal.timeout(5000) }
        : {}),
    })

    if (!upstream.ok) {
      throw new Error(`Upstream responded with ${upstream.status}`)
    }

    const data = await upstream.json()

    // Cache 5 minutes on CDN edge, serve stale up to 1 minute while revalidating
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=300, stale-while-revalidate=60"
    )
    return res.status(200).json(data)
  } catch (err) {
    console.error("[stock-ticker] fetch error:", err.message)
    return res.status(503).json({ error: "Stock data temporarily unavailable" })
  }
}
