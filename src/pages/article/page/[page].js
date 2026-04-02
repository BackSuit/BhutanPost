import Layout from "@/components/layout"
import ArticleList from "@/components/article/ArticleList"
import Meta from "@/components/meta"
import { countArticles, fetchPaginated } from "@/libs/api"
import { ARTICLE_PAGE_ROUTE } from "src/constanst/routes"
import config from "@/contents/site-settings.json"

export default function Page({ articles, pagination, page }) {
  const url = ARTICLE_PAGE_ROUTE(page)
  const title = `All posts page ${page}`
  return (
    <Layout>
      <Meta url={url} title={title} />
      <ArticleList
        title={"Articles"}
        articles={articles}
        pagination={pagination}
      />
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const page = parseInt(params.page)
  const postsPerPage = config.posts_per_page || 9
  try {
    const [articles, count] = await Promise.all([
      fetchPaginated(page),
      countArticles(),
    ])
    const pagination = {
      current: page,
      pages: Math.ceil(count / postsPerPage),
    }
    return {
      props: {
        articles: articles || [],
        pagination,
        page,
      },
      revalidate: 60,
    }
  } catch (error) {
    console.error("Error fetching article page data:", error)
    return {
      props: {
        articles: [],
        pagination: { current: page, pages: 1 },
        page,
      },
      revalidate: 30,
    }
  }
}

export async function getStaticPaths() {
  try {
    const postsPerPage = config.posts_per_page || 9
    const count = await countArticles()
    const pages = Math.max(1, Math.ceil(count / postsPerPage))
    const paths =
      pages > 1
        ? Array.from(Array(pages - 1).keys()).map(it => ({
            params: { page: (it + 2).toString() },
          }))
        : []
    return {
      paths,
      fallback: "blocking",
    }
  } catch (error) {
    console.error("Error generating article page paths:", error)
    return {
      paths: [],
      fallback: "blocking",
    }
  }
}
