import { Box } from "@chakra-ui/react"

const Container = ({ children }) => {
  return (
    <Box maxW="1600px" mx="auto" boxShadow="none">
      {children}
    </Box>
  )
}

export default Container
