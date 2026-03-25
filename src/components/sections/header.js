import {
  Box,
  Flex,
  Icon,
  useDisclosure,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react"
import { HiX as CloseIcon, HiMenu as MenuIcon, HiSearch } from "react-icons/hi"
import { useRouter } from "next/router"
import { useState } from "react"
import Logo from "./Logo"
import MobileNavbar from "./MobileNavbar"
import NavDropdown from "./NavDropdown"
import AuthButton from "../auth/AuthButton"
import StockTicker from "./StockTicker"

function SearchBar() {
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = e => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/article?search=${encodeURIComponent(searchQuery.trim())}`)
      setSearchQuery("")
    }
  }

  return (
    <Box
      as="form"
      onSubmit={handleSearch}
      display={{ base: "none", lg: "block" }}
    >
      <InputGroup size="sm" w="220px">
        <InputLeftElement pointerEvents="none">
          <Icon as={HiSearch} color="gray.400" />
        </InputLeftElement>
        <Input
          placeholder="Search news..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          bg="gray.50"
          borderColor="gray.200"
          borderRadius="md"
          fontSize="sm"
          _placeholder={{ color: "gray.400" }}
          _focus={{
            borderColor: "brand.primary",
            boxShadow: "0 0 0 1px #C53030",
            bg: "white",
          }}
        />
      </InputGroup>
    </Box>
  )
}

function DateBar() {
  const today = new Date()
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const dateStr = today.toLocaleDateString("en-US", options)

  return (
    <Box
      w="100%"
      bg="brand.secondary"
      color="white"
      py={1}
      px={{ base: 4, md: 8, lg: 12 }}
      fontSize="xs"
      display={{ base: "none", md: "block" }}
    >
      <Flex justify="space-between" align="center" maxW="1600px" mx="auto">
        <Text fontWeight="500" letterSpacing="0.02em">
          {dateStr}
        </Text>
        <HStack spacing={4}>
          <Text
            as="a"
            href="/about-us"
            _hover={{ textDecoration: "underline" }}
            cursor="pointer"
          >
            About
          </Text>
          <Text
            as="a"
            href="/privacy-policy"
            _hover={{ textDecoration: "underline" }}
            cursor="pointer"
          >
            Privacy
          </Text>
        </HStack>
      </Flex>
    </Box>
  )
}

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box pos="fixed" top={0} left={0} right={0} zIndex="10" id="header-nav">
      {/* Top date bar */}
      <DateBar />

      {/* RSEBL Stock market ticker */}
      <StockTicker />

      {/* Main header */}
      <Flex
        as="nav"
        alignItems="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mx="auto"
        py={{ base: 2, lg: 3 }}
        px={{ base: 4, md: 8, lg: 12 }}
        bgColor="rgba(255, 255, 255, 0.97)"
        color="gray.800"
        className="header"
        borderBottom="3px solid"
        borderBottomColor="brand.primary"
        sx={{
          "@supports (backdrop-filter: saturate(180%) blur(20px))": {
            backdropFilter: "saturate(180%) blur(20px)",
            bgColor: "rgba(255, 255, 255, 0.92)",
          },
          "@supports (-webkit-backdrop-filter: saturate(180%) blur(20px))": {
            WebkitBackdropFilter: "saturate(180%) blur(20px)",
            bgColor: "rgba(255, 255, 255, 0.92)",
          },
        }}
      >
        {/* Left section: Hamburger + Logo */}
        <HStack spacing={3}>
          <IconButton
            aria-label="Hamburger menu"
            display={{ base: "flex", md: "none" }}
            variant="ghost"
            onClick={onOpen}
            size="sm"
            icon={<Icon boxSize="1.25em" as={isOpen ? CloseIcon : MenuIcon} />}
          />
          <Logo size="md" />
        </HStack>

        <MobileNavbar isOpen={isOpen} onClose={onClose} />

        {/* Center section: Navigation with dropdowns */}
        <NavDropdown />

        {/* Right section: Search + Auth */}
        <HStack spacing={3} display={{ base: "none", md: "flex" }}>
          <SearchBar />
          <AuthButton />
        </HStack>

        {/* Mobile Auth */}
        <Box display={{ base: "block", md: "none" }}>
          <AuthButton />
        </Box>
      </Flex>
    </Box>
  )
}
