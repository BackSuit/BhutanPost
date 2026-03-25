import Link from "next/link"
import { useRouter } from "next/router"
import { ListItem, Text } from "@chakra-ui/react"

export default function NavItem({ children, isLast, to = "/", ...rest }) {
  const router = useRouter()
  const isActive = router.asPath === to || router.asPath.startsWith(to + "/")
  return (
    <ListItem listStyleType="none">
      <Text
        as={Link}
        href={to}
        display="block"
        color={isActive ? "brand.primary" : "gray.700"}
        cursor="pointer"
        fontWeight={isActive ? 700 : 500}
        fontSize="sm"
        letterSpacing="0.01em"
        _hover={{
          color: "brand.primary",
        }}
        fontFamily="body"
        mb={{ base: isLast ? 4 : 8, md: 0 }}
        mr={{ base: 0, md: isLast ? 0 : 6 }}
        transition="color 0.2s ease"
        position="relative"
        _after={
          isActive
            ? {
                content: '""',
                position: "absolute",
                bottom: "-4px",
                left: 0,
                right: 0,
                height: "2px",
                bg: "brand.primary",
                borderRadius: "full",
              }
            : {}
        }
        {...rest}
      >
        {children}
      </Text>
    </ListItem>
  )
}
