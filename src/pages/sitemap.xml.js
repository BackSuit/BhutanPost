import { fetchArticles, fetchCategories } from "@/libs/api"
import { getAllAuthors } from "@/libs/authors"
import siteSettings from "@/contents/site-settings.json"

function escapeXml(str) {
  return (str || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function generateSiteMap(articles, categories, authors, baseUrl) {
  const currentDate = new Date().toISOString()

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}</loc>
    <priority>1.00</priority>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
  </url>
  <url>
    <loc>${baseUrl}/meet-the-team</loc>
    <priority>0.7</priority>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>${baseUrl}/about-us</loc>
    <priority>0.7</priority>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
  </url>
  <url>
    <loc>${baseUrl}/privacy-policy</loc>
    <priority>0.5</priority>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
  </url>
  <url>
    <loc>${baseUrl}/terms-of-service</loc>
    <priority>0.5</priority>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
  </url>
  ${categories
    .map(
      category => `<url>
    <loc>${baseUrl}/category/${category.slug}</loc>
    <priority>0.7</priority>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
  </url>`
    )
    .join("\n  ")}
  ${articles
    .map(article => {
      const articleDate = article.date || article.published_at || currentDate
      const imageUrl = article.image_url || article.image || ""
      const imageTag = imageUrl
        ? `
    <image:image>
      <image:loc>${escapeXml(imageUrl)}</image:loc>
      <image:title>${escapeXml(article.title)}</image:title>
    </image:image>`
        : ""
      return `<url>
    <loc>${baseUrl}/article/${article.slug}</loc>
    <priority>0.9</priority>
    <lastmod>${new Date(articleDate).toISOString()}</lastmod>
    <changefreq>weekly</changefreq>${imageTag}
  </url>`
    })
    .join("\n  ")}
  <url>
    <loc>${baseUrl}/authors</loc>
    <priority>0.6</priority>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
  </url>
  ${authors
    .map(
      author => `<url>
    <loc>${baseUrl}/authors/${author.slug}</loc>
    <priority>0.6</priority>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
  </url>`
    )
    .join("\n  ")}
</urlset>`
}

export async function getServerSideProps({ res }) {
  const baseUrl = siteSettings.base_url || "https://bhutanpost.com"

  try {
    const [articles, categories] = await Promise.all([
      fetchArticles({
        status: "published",
        limit: 1000,
        sort: "date",
        order: "desc",
      }),
      fetchCategories(),
    ])
    const authors = getAllAuthors()

    const sitemap = generateSiteMap(articles, categories, authors, baseUrl)

    res.setHeader("Content-Type", "text/xml")
    res.setHeader(
      "Cache-Control",
      "public, s-maxage=3600, stale-while-revalidate=86400"
    )
    res.write(sitemap)
    res.end()

    return { props: {} }
  } catch (error) {
    console.error("Error generating sitemap:", error)

    const basicSitemap = generateSiteMap([], [], getAllAuthors(), baseUrl)
    res.setHeader("Content-Type", "text/xml")
    res.write(basicSitemap)
    res.end()

    return { props: {} }
  }
}

export default function Sitemap() {
  return null
}
