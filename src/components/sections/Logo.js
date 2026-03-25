import { Text, Box, VStack } from "@chakra-ui/layout"
import { Flex } from "@chakra-ui/react"
import Link from "next/link"

// Bhutan mountain-peak icon mark — inline SVG, no external img needed
function MountainMark() {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Red badge background */}
      <rect width="44" height="44" rx="7" fill="#C53030" />
      {/* Left (taller) mountain */}
      <path d="M5 34 L16 9 L27 34Z" fill="rgba(255,255,255,0.88)" />
      {/* Right (shorter) mountain */}
      <path d="M22 34 L32 17 L42 34Z" fill="rgba(255,255,255,0.55)" />
      {/* Snow cap on left peak */}
      <path d="M16 9 L12.5 16 L19.5 16Z" fill="white" />
      {/* Snow cap on right peak */}
      <path d="M32 17 L29.5 22 L34.5 22Z" fill="rgba(255,255,255,0.9)" />
    </svg>
  )
}

/**
 * Logo component.
 * @param {boolean} isLight  – if true, renders white text (for dark backgrounds like footer)
 */
export default function Logo({ isLight = false }) {
  return (
    <Box
      as={Link}
      href="/"
      display="flex"
      alignItems="center"
      gap={2}
      _hover={{ opacity: 0.85 }}
      lineHeight={1}
      flexShrink={0}
    >
      <MountainMark />
      <VStack spacing={0} align="flex-start">
        <Text
          as="span"
          fontSize={{ base: "lg", md: "xl" }}
          fontWeight="900"
          fontFamily="'Montserrat', 'Arial Black', sans-serif"
          letterSpacing="-0.03em"
          color={isLight ? "white" : "gray.900"}
          lineHeight={1}
        >
          BHUTAN
        </Text>
        <Text
          as="span"
          fontSize={{ base: "xs", md: "sm" }}
          fontWeight="400"
          fontStyle="italic"
          fontFamily="'Lora', Georgia, serif"
          letterSpacing="0.2em"
          color={isLight ? "gray.300" : "brand.primary"}
          lineHeight={1.3}
          textTransform="uppercase"
        >
          Post
        </Text>
      </VStack>
    </Box>
  )
}
