import Head from "next/head"
import Layout from "@/components/layout"
import ArticleList from "@/components/article/ArticleList"
import Meta from "@/components/meta"
import {
  fetchByCategory,
  fetchPaginated,
  countArticlesByCategory,
} from "@/libs/api"
import { CATEGORY_ID_ROUTE } from "src/constanst/routes"
import config from "@/contents/site-settings.json"

export default function CategoryPage({ articles, category, pagination, page }) {
  const url = CATEGORY_ID_ROUTE(category.slug)
  const title = `${category.name} - Page ${page}`

  return (
    <Layout>
      <Meta title={title} url={url} />
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <ArticleList
        articles={articles}
        title="Category:"
        subtitle={category.name}
        url={category.slug}
        pagination={pagination}
      />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const page = parseInt(params.page)
  const postsPerPage = config.posts_per_page || 9

  try {
    const { category } = await fetchByCategory(params.slug)

    // If category doesn't exist, return 404
    if (!category) {
      return {
        notFound: true,
      }
    }

    const [articles, totalArticles] = await Promise.all([
      fetchPaginated(page, params.slug),
      countArticlesByCategory(params.slug),
    ])

    const pagination = {
      current: page,
      pages: Math.ceil(totalArticles / postsPerPage),
    }

    return {
      props: {
        articles: articles || [],
        category: {
          name: category.name || params.slug,
          slug: category.slug || params.slug,
        },
        pagination,
        page,
      },
      revalidate: 60,
    }
  } catch (error) {
    console.error("Error fetching category pagination page data:", error)
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  // noindex pages — skip pre-building entirely, generate on demand
  return { paths: [], fallback: "blocking" }
}
