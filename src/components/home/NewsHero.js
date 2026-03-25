import Image from "next/image"
import Link from "next/link"
import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
  Skeleton,
  Badge,
} from "@chakra-ui/react"
import { ARTICLE_ID_ROUTE, CATEGORY_ID_ROUTE } from "src/constanst/routes"
import { formatDate } from "@/libs/date"
import RenderInView from "../RenderInView"

function MainStory({ article }) {
  if (!article) return null

  const { title, slug, excerpt, image_url, category, date, authors } = article

  return (
    <Box
      as={Link}
      href={ARTICLE_ID_ROUTE(slug)}
      display="block"
      position="relative"
      borderRadius="lg"
      overflow="hidden"
      height={{ base: "350px", md: "480px", lg: "520px" }}
      _hover={{ "& .hero-overlay": { bg: "rgba(0,0,0,0.65)" } }}
      transition="all 0.3s ease"
    >
      <Image
        src={image_url}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        quality={80}
        priority
      />
      <Box
        className="hero-overlay"
        position="absolute"
        inset="0"
        bg="linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)"
        transition="background 0.3s ease"
      />
      <VStack
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        p={{ base: 4, md: 6, lg: 8 }}
        align="flex-start"
        spacing={2}
      >
        {category && (
          <Badge
            bg="brand.primary"
            color="white"
            px={3}
            py={1}
            borderRadius="sm"
            fontSize="xs"
            fontWeight="700"
            textTransform="uppercase"
            letterSpacing="0.06em"
          >
            {category.name}
          </Badge>
        )}
        <Heading
          as="h1"
          color="white"
          fontSize={{ base: "xl", md: "2xl", lg: "3xl" }}
          fontFamily="heading"
          lineHeight="1.2"
          noOfLines={3}
        >
          {title}
        </Heading>
        {excerpt && (
          <Text
            color="gray.200"
            fontSize={{ base: "sm", md: "md" }}
            noOfLines={2}
            maxW="90%"
          >
            {excerpt}
          </Text>
        )}
        <HStack spacing={3} fontSize="xs" color="gray.300">
          {authors?.[0] && <Text>{authors[0].name}</Text>}
          {date && <Text>{formatDate(new Date(date))}</Text>}
        </HStack>
      </VStack>
    </Box>
  )
}

function LatestNewsSidebar({ articles }) {
  if (!articles || articles.length === 0) return null

  return (
    <Box
      bg="white"
      borderRadius="lg"
      border="1px solid"
      borderColor="gray.100"
      overflow="hidden"
      height={{ base: "auto", lg: "520px" }}
    >
      <Box bg="brand.secondary" px={4} py={3}>
        <Heading
          as="h3"
          fontSize="sm"
          fontWeight="700"
          color="white"
          textTransform="uppercase"
          letterSpacing="0.08em"
        >
          Latest News
        </Heading>
      </Box>
      <VStack
        spacing={0}
        divider={<Box borderBottom="1px solid" borderColor="gray.100" />}
        overflowY="auto"
        maxH={{ base: "400px", lg: "470px" }}
        sx={{
          "&::-webkit-scrollbar": { width: "4px" },
          "&::-webkit-scrollbar-thumb": {
            bg: "gray.300",
            borderRadius: "full",
          },
        }}
      >
        {articles.map((article, i) => (
          <SidebarItem key={article.slug || i} article={article} index={i} />
        ))}
      </VStack>
    </Box>
  )
}

function SidebarItem({ article, index }) {
  const { title, slug, category, date, image_url } = article

  return (
    <HStack
      as={Link}
      href={ARTICLE_ID_ROUTE(slug)}
      spacing={3}
      p={3}
      w="full"
      _hover={{ bg: "gray.50" }}
      transition="background 0.2s"
      align="flex-start"
    >
      {image_url && (
        <Box
          flexShrink={0}
          w="70px"
          h="55px"
          borderRadius="md"
          overflow="hidden"
          position="relative"
        >
          <Image
            src={image_url}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            quality={40}
          />
        </Box>
      )}
      <VStack align="flex-start" spacing={1} flex={1} minW={0}>
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
          lineHeight="1.3"
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
    </HStack>
  )
}

export default function NewsHero({ heroArticle, latestArticles }) {
  return (
    <Box
      as="section"
      maxW="1200px"
      mx="auto"
      px={{ base: 4, md: 6 }}
      pt={{ base: 4, md: 6 }}
      pb={{ base: 2, md: 4 }}
    >
      <Flex gap={{ base: 4, lg: 5 }} direction={{ base: "column", lg: "row" }}>
        <Box flex={{ base: "1", lg: "2" }}>
          <MainStory article={heroArticle} />
        </Box>
        <Box flex={{ base: "1", lg: "1" }}>
          <LatestNewsSidebar articles={latestArticles} />
        </Box>
      </Flex>
    </Box>
  )
}
