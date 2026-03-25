import { useState, useEffect, useRef } from "react"
import { Box, Flex, HStack, Text } from "@chakra-ui/react"
import { TriangleUpIcon, TriangleDownIcon, MinusIcon } from "@chakra-ui/icons"
import { keyframes } from "@emotion/react"

const tickerScroll = keyframes`
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

function TickerItem({ stock }) {
  const up = stock.percentageChange > 0
  const down = stock.percentageChange < 0

  const color = up ? "#68D391" : down ? "#FC8181" : "#A0AEC0"
  const ArrowIcon = up ? TriangleUpIcon : down ? TriangleDownIcon : MinusIcon

  const changeStr = (up ? "+" : "") + stock.price.toFixed(2)
  const pctStr = (up ? "+" : "") + stock.percentageChange.toFixed(2) + "%"

  return (
    <HStack
      as="span"
      spacing={2}
      px={5}
      h="full"
      align="center"
      borderRight="1px solid rgba(255,255,255,0.12)"
      flexShrink={0}
    >
      <ArrowIcon color={color} boxSize="9px" />
      <Text fontSize="xs" fontWeight="700" color="white" letterSpacing="0.04em">
        {stock.symbol}
      </Text>
      <Text fontSize="xs" color="gray.300">
        Nu.{stock.currentPrice.toFixed(2)}
      </Text>
      <Text fontSize="xs" color={color} fontWeight="600">
        {changeStr} ({pctStr})
      </Text>
    </HStack>
  )
}

export default function StockTicker() {
  const [stocks, setStocks] = useState([])

  useEffect(() => {
    fetch("/api/stock-ticker")
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data)) setStocks(data)
      })
      .catch(() => {})
  }, [])

  if (stocks.length === 0) return null

  // Duplicate the list so the loop appears seamless
  const doubled = [...stocks, ...stocks]
  // Duration scales with number of items so the scroll feels consistent
  const duration = stocks.length * 3.5

  return (
    <Box
      w="100%"
      bg="gray.900"
      borderBottom="1px solid rgba(255,255,255,0.08)"
      overflow="hidden"
      h="28px"
      display={{ base: "none", md: "block" }}
      position="relative"
    >
      {/* "MARKET" label badge */}
      <Box
        position="absolute"
        left={0}
        top={0}
        h="100%"
        bg="brand.primary"
        px={3}
        display="flex"
        alignItems="center"
        zIndex={1}
        flexShrink={0}
      >
        <Text
          fontSize="2xs"
          fontWeight="800"
          color="white"
          letterSpacing="0.1em"
          textTransform="uppercase"
          whiteSpace="nowrap"
        >
          RSEBL
        </Text>
      </Box>

      {/* Scrolling strip */}
      <Flex
        pl="64px"
        h="full"
        align="center"
        sx={{
          animation: `${tickerScroll} ${duration}s linear infinite`,
          whiteSpace: "nowrap",
          "&:hover": { animationPlayState: "paused" },
        }}
      >
        {doubled.map((stock, i) => (
          <TickerItem key={`${stock.symbol}-${i}`} stock={stock} />
        ))}
      </Flex>
    </Box>
  )
}
