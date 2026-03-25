import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Badge,
  IconButton,
} from "@chakra-ui/react"
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons"
import { ARTICLE_ID_ROUTE } from "src/constanst/routes"
import { formatDate } from "@/libs/date"

export default function FeaturedCarousel({ articles }) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const count = articles?.length || 0

  const next = useCallback(() => {
    if (count > 0) setCurrent(prev => (prev + 1) % count)
  }, [count])

  const prev = useCallback(() => {
    if (count > 0) setCurrent(prev => (prev - 1 + count) % count)
  }, [count])

  useEffect(() => {
    if (paused || count <= 1) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [paused, count, next])

  if (!articles || articles.length === 0) return null

  return (
    <Box
      as="section"
      maxW="1200px"
      mx="auto"
      px={{ base: 4, md: 6 }}
      py={{ base: 6, md: 8 }}
    >
      <Flex align="center" justify="space-between" mb={4}>
        <Heading
          as="h2"
          fontSize={{ base: "lg", md: "xl" }}
          fontFamily="heading"
          color="brand.ink"
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-4px",
            left: "0",
            width: "40px",
            height: "3px",
            bg: "brand.primary",
            borderRadius: "full",
          }}
        >
          Featured Stories
        </Heading>
        <HStack spacing={2}>
          <IconButton
            aria-label="Previous story"
            icon={<ChevronLeftIcon boxSize={5} />}
            size="sm"
            variant="outline"
            borderColor="gray.300"
            onClick={prev}
            _hover={{
              bg: "brand.primary",
              color: "white",
              borderColor: "brand.primary",
            }}
          />
          <IconButton
            aria-label="Next story"
            icon={<ChevronRightIcon boxSize={5} />}
            size="sm"
            variant="outline"
            borderColor="gray.300"
            onClick={next}
            _hover={{
              bg: "brand.primary",
              color: "white",
              borderColor: "brand.primary",
            }}
          />
        </HStack>
      </Flex>

      <Box
        position="relative"
        borderRadius="lg"
        overflow="hidden"
        height={{ base: "280px", md: "380px", lg: "420px" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {articles.map((article, i) => (
          <CarouselSlide
            key={article.slug || i}
            article={article}
            isActive={i === current}
          />
        ))}

        {/* Dots indicator */}
        <HStack
          position="absolute"
          bottom={4}
          left="50%"
          transform="translateX(-50%)"
          spacing={2}
          zIndex={2}
        >
          {articles.map((_, i) => (
            <Box
              key={i}
              w={i === current ? "24px" : "8px"}
              h="8px"
              borderRadius="full"
              bg={i === current ? "brand.primary" : "whiteAlpha.700"}
              cursor="pointer"
              transition="all 0.3s ease"
              onClick={() => setCurrent(i)}
            />
          ))}
        </HStack>
      </Box>
    </Box>
  )
}

function CarouselSlide({ article, isActive }) {
  const { title, slug, excerpt, image_url, category, date, authors } = article

  return (
    <Box
      as={Link}
      href={ARTICLE_ID_ROUTE(slug)}
      display="block"
      position="absolute"
      inset="0"
      opacity={isActive ? 1 : 0}
      transition="opacity 0.6s ease"
      pointerEvents={isActive ? "auto" : "none"}
    >
      <Image
        src={image_url}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        quality={70}
      />
      <Box
        position="absolute"
        inset="0"
        bg="linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)"
      />
      <Flex
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        p={{ base: 4, md: 6, lg: 8 }}
        direction="column"
        gap={2}
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
            alignSelf="flex-start"
          >
            {category.name}
          </Badge>
        )}
        <Heading
          as="h3"
          color="white"
          fontSize={{ base: "lg", md: "xl", lg: "2xl" }}
          fontFamily="heading"
          lineHeight="1.25"
          noOfLines={2}
        >
          {title}
        </Heading>
        {excerpt && (
          <Text
            color="gray.200"
            fontSize={{ base: "sm", md: "md" }}
            noOfLines={2}
            maxW="80%"
            display={{ base: "none", md: "block" }}
          >
            {excerpt}
          </Text>
        )}
        <HStack spacing={3} fontSize="xs" color="gray.300">
          {authors?.[0] && <Text>{authors[0].name}</Text>}
          {date && <Text>{formatDate(new Date(date))}</Text>}
        </HStack>
      </Flex>
    </Box>
  )
}
