import { Button } from "@chakra-ui/react"
import Link from "next/link"

export default function PrimaryButton({
  children,
  href = "/",
  rightIcon,
  ...rest
}) {
  return (
    <Button
      as={Link}
      href={href}
      py={{ base: 5, md: 6, lg: 7 }}
      px={{ base: 10, md: 14, lg: 20 }}
      lineHeight="1"
      size="lg"
      fontWeight="600"
      borderRadius="md"
      _hover={{
        opacity: 0.9,
        transform: "translateY(-1px)",
      }}
      _active={{
        opacity: 0.8,
      }}
      rightIcon={rightIcon && rightIcon}
      cursor="pointer"
      transition="all 0.2s"
      {...rest}
    >
      {children.trim()}
    </Button>
  )
}
