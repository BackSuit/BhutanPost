import Image from "next/image"
import Link from "next/link"
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  HStack,
  Badge,
} from "@chakra-ui/react"
import { ARTICLE_ID_ROUTE } from "src/constanst/routes"
import { formatDate } from "@/libs/date"

function RelatedCard({ article }) {
  const { title, slug, image_url, category, date } = article

  return (
    <Box
      as={Link}
      href={ARTICLE_ID_ROUTE(slug)}
      display="block"
      bg="white"
      borderRadius="md"
      overflow="hidden"
      border="1px solid"
      borderColor="gray.100"
      transition="all 0.3s ease"
      _hover={{
        boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
        transform: "translateY(-2px)",
      }}
    >
      <Box position="relative" height="160px">
        {image_url && (
          <Image
            src={image_url}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            quality={40}
          />
        )}
      </Box>
      <VStack align="flex-start" spacing={1} p={3}>
        {category && (
          <Text
            fontSize="2xs"
            fontWeight="700"
            color="brand.primary"
            textTransform="uppercase"
            letterSpacing="0.05em"
          >
            {category.name}
          </Text>
        )}
        <Heading
          as="h4"
          fontSize="sm"
          fontWeight="600"
          lineHeight="1.35"
          noOfLines={2}
          color="gray.800"
        >
          {title}
        </Heading>
        {date && (
          <Text fontSize="2xs" color="gray.500">
            {formatDate(new Date(date))}
          </Text>
        )}
      </VStack>
    </Box>
  )
}

export default function RelatedArticles({
  articles,
  title = "You May Also Like",
}) {
  if (!articles || articles.length === 0) return null

  return (
    <Box py={8} mt={6} borderTop="1px solid" borderColor="gray.200">
      <HStack spacing={3} mb={5}>
        <Box w="4px" h="22px" bg="brand.primary" borderRadius="full" />
        <Heading
          as="h3"
          fontSize={{ base: "lg", md: "xl" }}
          fontFamily="heading"
          color="brand.ink"
        >
          {title}
        </Heading>
      </HStack>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
        {articles.slice(0, 4).map((article, i) => (
          <RelatedCard key={article.slug || i} article={article} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
