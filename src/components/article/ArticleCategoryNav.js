import { Button, Flex } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { CATEGORY_ID_ROUTE } from "src/constanst/routes"

const NavButton = ({ children, href, asPath }) => {
  const isActive = asPath === href
  return (
    <Button
      as={Link}
      href={href}
      variant="ghost"
      borderRadius="md"
      cursor="pointer"
      fontWeight={isActive ? "600" : "normal"}
      position="relative"
      color={isActive ? "white" : "gray.600"}
      bg={isActive ? "brand.primary" : "none"}
      outline="none"
      fontSize="sm"
      _hover={{
        bg: isActive ? "brand.primary" : "gray.100",
        color: isActive ? "white" : "gray.800",
      }}
    >
      {children}
    </Button>
  )
}

export default function ArticleCategoryNav({ categories }) {
  const router = useRouter()
  const { asPath } = router

  return (
    <Flex
      w="100%"
      d="flex"
      mt="4"
      mb="8"
      justifyContent="center"
      flexWrap="wrap"
      pos="relative"
      _after={{
        content: '""',
        display: "block",
        pos: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "1px",
        backgroundColor: "gray.200",
      }}
    >
      <NavButton href="/article" asPath={asPath}>
        All
      </NavButton>
      {categories &&
        categories.map((tag, i) => (
          <NavButton key={i} href={CATEGORY_ID_ROUTE(tag.slug)} asPath={asPath}>
            {tag.name}
          </NavButton>
        ))}
    </Flex>
  )
}
