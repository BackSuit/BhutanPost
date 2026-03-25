import Link from "next/link"
import { Text } from "@chakra-ui/react"
import { AUTHOR_ID_ROUTE } from "src/constanst/routes"

export default function ArticleAuthor({ authors }) {
  return authors.map((author, index) => (
    <Text
      as={Link}
      href={AUTHOR_ID_ROUTE(author?.slug)}
      color="brand.primary"
      transitionDuration="150ms"
      _hover={{ color: "#9B2C2C" }}
      key={author._id}
      itemProp="author"
      fontWeight="500"
    >
      {author?.name}
      {authors.length > 1 && index < authors.length - 1 && ", "}
    </Text>
  ))
}
