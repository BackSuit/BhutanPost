import Head from "next/head"
import config from "@/contents/site-settings.json"

export default function Meta({
  title,
  description,
  keywords,
  url,
  image,
  type,
}) {
  // Use site_name for browser title, fallback to site_title
  const siteName = config.site_name || config.site_title

  const pageTitle = title ? [title, siteName].join(" | ") : siteName
  const metaTitle = title ? pageTitle : config.seo_meta_title || siteName
  const metaImage = image || config.seo_image

  // SEO meta description: use custom if provided, otherwise use seo_meta_description, otherwise use site_description
  const metaDescription =
    description || config.seo_meta_description || config.site_description

  // SEO meta keywords: use custom if provided, otherwise use seo_meta_keywords, otherwise use site_keywords
  const metaKeywords =
    keywords ||
    config.seo_meta_keywords ||
    config.site_keywords.map(it => it.keyword).join(",")

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      <link rel="canonical" href={config.base_url + url} />

      {/* Open Graph Meta */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:url" content={config.base_url + url} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      {metaImage && <meta property="og:image" content={metaImage} />}
      <meta property="og:type" content={type ?? "website"} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      {config.twitter_account && (
        <meta name="twitter:site" content={config.twitter_account} />
      )}
      <meta name="twitter:url" content={config.base_url + url} />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      {metaImage && <meta name="twitter:image" content={metaImage} />}
    </Head>
  )
}
