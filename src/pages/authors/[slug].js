import Layout from "@/components/layout"
import ArticleList from "@/components/article/ArticleList"
import Meta from "@/components/meta"
import { Text, Box, Heading } from "@chakra-ui/react"
import { fetchAuthorArticles } from "@/libs/api"
import { getAllAuthors, getAuthorForArticle } from "@/libs/authors"
import { AUTHOR_ID_ROUTE } from "src/constanst/routes"

export default function ArticlesByAuthor({ articles, author }) {
  const url = AUTHOR_ID_ROUTE(author.slug)
  const title = `Articles by ${author.name}`

  return (
    <Layout>
      <Meta
        url={url}
        title={title}
        description={author.bio}
      />
      <main role="main">
        <article itemScope itemType="https://schema.org/Person">
          {author.bio && (
            <Box maxW="3xl" mx="auto" px={4} pt={8} pb={2}>
              <Heading size="md" mb={2} itemProp="name">{author.name}</Heading>
              <Text color="gray.600" itemProp="description">{author.bio}</Text>
            </Box>
          )}
          <ArticleList
            title="Articles by"
            subtitle={author.name}
            articles={articles}
            type="author"
          />
        </article>
      </main>
    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const authors = getAllAuthors()
  const author = authors.find(a => a.slug === params.slug)

  if (!author) {
    return { notFound: true }
  }

  const allArticles = await fetchAuthorArticles(params.slug)

  // Filter to articles assigned to this author, strip heavy fields, cap at 24
  const articles = allArticles
    .filter(article => {
      const assigned = getAuthorForArticle(article.slug, article.category?.slug)
      return assigned.slug === params.slug
    })
    .slice(0, 24)
    .map(({ slug, title, excerpt, date, image_url, category }) => ({
      slug,
      title,
      excerpt,
      date,
      image_url,
      category,
    }))

  return {
    props: {
      articles,
      author: {
        name: author.name,
        slug: author.slug,
        bio: author.bio,
      },
    },
    revalidate: 300,
  }
}

export async function getStaticPaths() {
  const authors = getAllAuthors()
  return {
    paths: authors.map(a => ({ params: { slug: a.slug } })),
    fallback: false,
  }
}
