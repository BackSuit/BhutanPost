import Image from "next/image"
import { HiChevronRight as ChevronRightIcon } from "@/components/icons"
import {
  Box,
  Flex,
  Heading,
  Skeleton,
  Text,
  VStack,
  Link as ChakraLink,
} from "@chakra-ui/react"
import Link from "next/link"
import RenderInView from "../RenderInView"
import {
  AUTHOR_ID_ROUTE,
  CATEGORY_ID_ROUTE,
  ARTICLE_ID_ROUTE,
} from "src/constanst/routes"

const ArticleLink = ({ children, href, ...restProps }) => (
  <ChakraLink
    href={href}
    fontWeight="normal"
    fontSize={{ base: "xs", lg: "sm" }}
    color="gray.600"
    margin="0"
    textTransform="uppercase"
    letterSpacing="0.05em"
    _hover={{ color: "brand.primary" }}
    {...restProps}
  >
    {children}
  </ChakraLink>
)

const Article = ({ article }) => {
  const { title, slug, excerpt, image_url, authors, category } = article
  const excerptSplit = excerpt?.split(" ")
  return (
    <RenderInView>
      {({ ref, inView, setIsLoaded }) => (
        <Box
          mx={{ base: 4, md: 6, xl: 8 }}
          className="article"
          mb={{ base: 10, md: 8, lg: 16 }}
          pos="relative"
          ref={ref}
          bg="white"
          borderRadius="md"
          overflow="hidden"
          border="1px solid"
          borderColor="gray.100"
          transition="transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease"
          _hover={{
            boxShadow: "0 8px 30px rgba(0,0,0,0.1)",
            transform: "translateY(-2px)",
            borderColor: "gray.200",
          }}
        >
          <Box
            w="100%"
            minH={{ base: "200px", md: "220px", lg: "250px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            bg="gray.50"
            position="relative"
            overflow="hidden"
          >
            <Skeleton height="100%" width="100%" isLoaded={inView}>
              {inView && image_url && (
                <Image
                  width={500}
                  height={500}
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "auto",
                    maxHeight: "280px",
                  }}
                  src={image_url}
                  alt={title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                  quality={50}
                  onLoad={setIsLoaded}
                />
              )}
            </Skeleton>
          </Box>
          <VStack
            spacing={{ base: 2, lg: excerpt ? 3 : 2 }}
            w="100%"
            py={4}
            pos="relative"
            alignItems="flex-start"
            px={{ base: 3, md: 4, xl: "1rem" }}
          >
            <Flex as="span" alignItems="center" flexWrap="wrap" gap={2}>
              {category && (
                <Text
                  as={Link}
                  href={CATEGORY_ID_ROUTE(category.slug)}
                  fontSize="xs"
                  fontWeight="700"
                  color="brand.primary"
                  textTransform="uppercase"
                  letterSpacing="0.06em"
                  _hover={{ textDecoration: "underline" }}
                >
                  {category.name}
                </Text>
              )}
              {authors &&
                authors.map((author, index) => (
                  <ArticleLink
                    key={author._id}
                    href={AUTHOR_ID_ROUTE(author.slug)}
                  >
                    {author.name}
                    {authors.length > 0 && index < authors.length - 1 && ", "}
                  </ArticleLink>
                ))}
            </Flex>
            <Heading
              as={Link}
              href={ARTICLE_ID_ROUTE(slug)}
              className="article-title"
              fontSize={{ base: "lg", lg: "xl" }}
              fontWeight={700}
              fontFamily="heading"
              maxW="95%"
              mr="auto"
              color="gray.900"
              lineHeight="1.3"
              _hover={{
                color: "brand.primary",
              }}
              transition="color 0.2s ease"
            >
              {title}
            </Heading>
            {excerpt && (
              <Text
                color="gray.600"
                fontSize={{ base: "0.85rem", lg: "0.95rem" }}
                mr="auto"
                d="block"
                w="full"
                lineHeight="1.6"
              >
                {excerptSplit.length <= 25
                  ? excerptSplit.join(" ")
                  : `${excerptSplit.slice(0, 25).join(" ")}...`}
              </Text>
            )}
            <Text
              as={Link}
              href={ARTICLE_ID_ROUTE(slug)}
              color="brand.primary"
              className="article-link"
              fontSize={{ base: "0.8rem", lg: "0.9rem" }}
              fontWeight="600"
              transitionDuration={"150ms"}
              aria-label={`Read more about ${title}`}
              _hover={{
                color: "brand.secondary",
              }}
            >
              Read More
              <ChevronRightIcon />
            </Text>
          </VStack>
        </Box>
      )}
    </RenderInView>
  )
}

export default Article
