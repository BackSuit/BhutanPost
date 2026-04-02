import Layout from "@/components/layout"
import ArticleList from "@/components/article/ArticleList"
import Meta from "@/components/meta"
import {
  fetchByCategory,
  fetchCategorySlug,
  countArticlesByCategory,
  fetchPaginated,
} from "@/libs/api"
import { CATEGORY_ID_ROUTE } from "src/constanst/routes"
import config from "@/contents/site-settings.json"

export default function ArticlesByCategory({ articles, category, pagination }) {
  const url = CATEGORY_ID_ROUTE(category.slug)

  return (
    <Layout>
      <Meta title={category.name} url={url} />
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
  const postsPerPage = config.posts_per_page || 9
  const { category } = await fetchByCategory(params.slug)

  // If category doesn't exist, return 404
  if (!category) {
    return {
      notFound: true,
    }
  }

  const [articles, totalArticles] = await Promise.all([
    fetchPaginated(1, params.slug),
    countArticlesByCategory(params.slug),
  ])

  const pagination = {
    current: 1,
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
    },
    revalidate: 60,
  }
}

export async function getStaticPaths() {
  try {
    const paths = (await fetchCategorySlug()).map(it => ({
      params: {
        slug: it.slug,
      },
    }))
    return {
      paths,
      fallback: "blocking",
    }
  } catch (error) {
    console.error("Error fetching category paths:", error)
    return {
      paths: [],
      fallback: "blocking",
    }
  }
}
