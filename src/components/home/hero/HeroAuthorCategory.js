import Link from "next/link"
import { Flex, Text } from "@chakra-ui/react"
import { AUTHOR_ID_ROUTE, CATEGORY_ID_ROUTE } from "src/constanst/routes"

export default function HeroAuthorCategory({
  authors,
  category,
  textSize,
  ...rest
}) {
  return (
    <Flex mb="1.2" d="flex" alignItems="center" color="brand.gray" {...rest}>
      {category && (
        <>
          <Text
            as={Link}
            href={CATEGORY_ID_ROUTE(category?.slug)}
            px={2}
            py={0.5}
            bg="brand.primary"
            color="white"
            fontSize="xs"
            fontWeight="700"
            textTransform="uppercase"
            letterSpacing="0.08em"
            borderRadius="sm"
            _hover={{ bg: "#9B2C2C" }}
          >
            {category?.name}
          </Text>
          <Text w={6} mx={2} h={0.4} bgColor="gray.300" />
        </>
      )}
      {authors &&
        authors.map((author, index) => (
          <Text
            as={Link}
            href={AUTHOR_ID_ROUTE(author?.slug)}
            key={author._id}
            px={1}
            display="inline-flex"
            overflowY="hidden"
            fontSize={textSize}
            fontWeight="500"
          >
            {author?.name}
            {authors.length > 1 && index < authors.length - 1 && ", "}
          </Text>
        ))}
    </Flex>
  )
}
