import dynamic from "next/dynamic"
import Layout from "@/components/layout"
import Meta from "@/components/meta"
import NewsHero from "@/components/home/NewsHero"
import { fetchFeatured, fetchHero, fetchHomeArticles } from "@/libs/api"

const FeaturedCarousel = dynamic(() =>
  import("@/components/home/FeaturedCarousel")
)
const CategorySection = dynamic(() =>
  import("@/components/home/CategorySection")
)
const ArticleList = dynamic(() => import("../components/article/ArticleList"))

// Group articles by category
function groupByCategory(articles) {
  const groups = {}
  for (const article of articles) {
    const cat = article.category
    if (!cat) continue
    const key = cat.slug
    if (!groups[key]) {
      groups[key] = { name: cat.name, slug: cat.slug, articles: [] }
    }
    groups[key].articles.push(article)
  }
  return Object.values(groups)
}

export default function Home({ heroArticle, homeArticles, featuredArticles }) {
  const latestForSidebar = homeArticles.slice(0, 8)
  const categoryGroups = groupByCategory(homeArticles)
  // Show up to 3 category sections that have at least 2 articles
  const displayCategories = categoryGroups
    .filter(g => g.articles.length >= 2)
    .slice(0, 3)

  return (
    <Layout>
      <Meta url="/" />
      <main>
        {/* Hero: Main headline + Latest News sidebar */}
        <NewsHero heroArticle={heroArticle} latestArticles={latestForSidebar} />

        {/* Featured Stories Carousel */}
        {featuredArticles?.length > 0 && (
          <FeaturedCarousel articles={featuredArticles} />
        )}

        {/* Category-based Sections */}
        {displayCategories.map(group => (
          <CategorySection
            key={group.slug}
            categoryName={group.name}
            categorySlug={group.slug}
            articles={group.articles}
          />
        ))}

        {/* More Articles */}
        {homeArticles.length > 12 && (
          <ArticleList
            articles={homeArticles.slice(12)}
            moreBtn
            moreBtnHref="/article"
          />
        )}
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const homeArticles = await fetchHomeArticles()
    const heroArticle = await fetchHero()
    const featuredArticles = await fetchFeatured()
    return {
      props: {
        homeArticles: homeArticles || [],
        heroArticle: heroArticle || null,
        featuredArticles: featuredArticles || [],
      },
      revalidate: 60,
    }
  } catch (error) {
    console.error("Error fetching home page data:", error)
    return {
      props: {
        homeArticles: [],
        heroArticle: null,
        featuredArticles: [],
      },
      revalidate: 30,
    }
  }
}
