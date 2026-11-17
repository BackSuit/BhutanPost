import { fetchArticles } from "@/libs/api"
import siteSettings from "@/contents/site-settings.json"

function generateNewsSitemap(articles, baseUrl, siteName) {
  const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)

  const recentArticles = articles.filter(article => {
    const articleDate = new Date(article.date || article.published_at)
    return articleDate >= twoDaysAgo
  })

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${recentArticles
  .map(article => {
    const articleDate = new Date(
      article.date || article.published_at
    ).toISOString()
    const title = (article.title || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    const imageUrl = article.image_url || article.image || ""
    return `  <url>
    <loc>${baseUrl}/article/${article.slug}</loc>
    <news:news>
      <news:publication>
        <news:name>${siteName}</news:name>
        <news:language>en</news:language>
      </news:publication>
      <news:publication_date>${articleDate}</news:publication_date>
      <news:title>${title}</news:title>
    </news:news>${imageUrl ? `
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${title}</image:title>
    </image:image>` : ""}
  </url>`
  })
  .join("\n")}
</urlset>`
}

export async function getServerSideProps({ res }) {
  const baseUrl = siteSettings.base_url || "https://bhutanpost.com"
  const siteName = siteSettings.site_name || siteSettings.site_title

  try {
    const articles = await fetchArticles({
      status: "published",
      limit: 1000,
      sort: "date",
      order: "desc",
    })

    const sitemap = generateNewsSitemap(articles, baseUrl, siteName)

    res.setHeader("Content-Type", "text/xml")
    // Short cache — news sitemap must stay fresh (Google re-fetches frequently)
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=300, stale-while-revalidate=600"
    )
    res.write(sitemap)
    res.end()

    return { props: {} }
  } catch (error) {
    console.error("Error generating news sitemap:", error)

    const fallback = generateNewsSitemap([], baseUrl, siteName)
    res.setHeader("Content-Type", "text/xml")
    res.write(fallback)
    res.end()

    return { props: {} }
  }
}

export default function SitemapNews() {
  return null
}
