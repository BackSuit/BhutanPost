import { Text, Box, Flex } from "@chakra-ui/layout"
import Link from "next/link"
import config from "@/contents/site-settings.json"

export default function Logo() {
  const logoText = config.logo_text || config.site_title || "Bhutan Post"
  const words = logoText.split(" ").filter(Boolean)
  const firstWord = words[0] || "Bhutan"
  const restWords = words.slice(1).join(" ") || "Post"

  return (
    <Box
      as={Link}
      href="/"
      display="flex"
      alignItems="center"
      _hover={{ opacity: 0.9 }}
      lineHeight={1}
      position="relative"
      gap={0}
    >
      {/* Icon mark */}
      <Flex
        w="36px"
        h="36px"
        bg="brand.primary"
        borderRadius="4px"
        alignItems="center"
        justifyContent="center"
        mr={2}
        flexShrink={0}
      >
        <Text
          as="span"
          color="white"
          fontSize="xl"
          fontWeight="900"
          fontFamily="'Playfair Display', Georgia, serif"
          lineHeight={1}
        >
          B
        </Text>
      </Flex>
      {/* Text */}
      <Flex direction="column" gap={0}>
        <Text
          as="span"
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="800"
          color="brand.ink"
          fontFamily="'Playfair Display', Georgia, serif"
          letterSpacing="-0.02em"
          lineHeight={1.1}
        >
          {firstWord}
        </Text>
        <Text
          as="span"
          fontSize={{ base: "xs", md: "sm" }}
          fontWeight="600"
          color="brand.primary"
          fontFamily="'Source Sans Pro', sans-serif"
          letterSpacing="0.15em"
          textTransform="uppercase"
          lineHeight={1.2}
        >
          {restWords}
        </Text>
      </Flex>
    </Box>
  )
}
