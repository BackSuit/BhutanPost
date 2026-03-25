import { Box } from "@chakra-ui/react"
import React from "react"

export default function ArticleDesc({}) {
  return (
    <Box
      fontWeight="normal"
      mb="14"
      fontStyle="italic"
      fontSize="xl"
      color="brand.gray"
      pl="4"
      borderLeftWidth="5px"
      borderLeftStyle="solid"
      borderLeftColor="brand.primary"
      letterSpacing="0.8px"
    />
  )
}
