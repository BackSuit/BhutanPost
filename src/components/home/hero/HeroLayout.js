import { Stack } from "@chakra-ui/react"

export default function HeroLayout({ children }) {
  return (
    <Stack
      direction={{
        base: "column-reverse",
        md: "row",
      }}
      bgColor="white"
      gap={0}
      borderBottom="1px solid"
      borderBottomColor="gray.100"
    >
      {children}
    </Stack>
  )
}
