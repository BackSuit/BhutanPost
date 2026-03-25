import Image from "next/image"
import Link from "next/link"
import {
  Box,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  VStack,
  Badge,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { ARTICLE_ID_ROUTE, CATEGORY_ID_ROUTE } from "src/constanst/routes"
import { formatDate } from "@/libs/date"

function CompactCard({ article }) {
  const { title, slug, image_url, category, date, excerpt } = article

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
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        transform: "translateY(-2px)",
        borderColor: "gray.200",
      }}
    >
      <Box position="relative" height={{ base: "180px", md: "200px" }}>
        {image_url && (
          <Image
            src={image_url}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            quality={50}
          />
        )}
      </Box>
      <VStack align="flex-start" spacing={2} p={4}>
        <Heading
          as="h4"
          fontSize={{ base: "md", md: "lg" }}
          fontFamily="heading"
          fontWeight="600"
          lineHeight="1.3"
          noOfLines={2}
          color="gray.800"
          _groupHover={{ color: "brand.primary" }}
        >
          {title}
        </Heading>
        {excerpt && (
          <Text fontSize="sm" color="gray.600" noOfLines={2} lineHeight="1.5">
            {excerpt}
          </Text>
        )}
        {date && (
          <Text fontSize="xs" color="gray.500">
            {formatDate(new Date(date))}
          </Text>
        )}
      </VStack>
    </Box>
  )
}

export default function CategorySection({
  categoryName,
  categorySlug,
  articles,
}) {
  if (!articles || articles.length === 0) return null

  return (
    <Box
      as="section"
      maxW="1200px"
      mx="auto"
      px={{ base: 4, md: 6 }}
      py={{ base: 4, md: 6 }}
    >
      {/* Section header */}
      <Flex align="center" justify="space-between" mb={5}>
        <HStack spacing={3} align="center">
          <Box w="4px" h="24px" bg="brand.primary" borderRadius="full" />
          <Heading
            as="h2"
            fontSize={{ base: "lg", md: "xl" }}
            fontFamily="heading"
            color="brand.ink"
          >
            {categoryName}
          </Heading>
        </HStack>
        {categorySlug && (
          <HStack
            as={Link}
            href={CATEGORY_ID_ROUTE(categorySlug)}
            spacing={1}
            fontSize="sm"
            fontWeight="600"
            color="brand.primary"
            _hover={{ textDecoration: "underline" }}
          >
            <Text>View All</Text>
            <ChevronRightIcon />
          </HStack>
        )}
      </Flex>

      {/* Articles grid */}
      <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} spacing={5}>
        {articles.slice(0, 4).map((article, i) => (
          <CompactCard key={article.slug || i} article={article} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
