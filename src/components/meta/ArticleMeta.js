import Head from "next/head"
import { jsonLdScriptProps } from "react-schemaorg"
import config from "@/contents/site-settings.json"

export default function ArticleMeta({
  title,
  description,
  author,
  keywords,
  date,
  modified,
  image,
  url,
}) {
  const siteName = config.site_name || config.site_title

  return (
    <Head>
      {author && <meta name="author" content={author} />}
      <meta itemProp="datePublished" content={date} />
      <meta itemProp="image" content={image} />
      <meta itemProp="publisher" content={siteName} />
      <script
        {...jsonLdScriptProps({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": config.base_url + url,
          },
          headline: title,
          keywords: Array.isArray(keywords)
            ? keywords.join(",")
            : keywords ?? undefined,
          datePublished: date,
          dateModified: modified || date,
          author: {
            "@type": "Person",
            name: author,
          },
          publisher: {
            "@type": "Organization",
            name: siteName,
            logo: {
              "@type": "ImageObject",
              url: config.seo_image || config.base_url + "/logo.png",
            },
          },
          image,
          description,
        })}
      />
    </Head>
  )
}
