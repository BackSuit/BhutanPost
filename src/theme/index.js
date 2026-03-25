import { extendTheme, theme as chakraTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: "'Playfair Display', Georgia, serif",
    body: "'Source Sans Pro', -apple-system, BlinkMacSystemFont, sans-serif",
    serif: "'Playfair Display', Georgia, serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },
  colors: {
    brand: {
      // Modern news website palette
      primary: "#C53030", // Bold red - breaking news accent
      secondary: "#1A365D", // Deep navy - authority & trust
      accent: "#DD6B20", // Warm orange - call-to-action
      cream: "#FFFFFF", // Clean white - modern look
      parchment: "#F7FAFC", // Light gray - section backgrounds
      ink: "#1A202C", // Near black - crisp text
      gray: "#718096",
      lightGray: "#A0AEC0",
    },
  },
  breakpoints: {
    sm: "30em", // small phone
    md: "48em", // ipad
    lg: "62em", // ipad pro
    xl: "80em", // laptop
    xxl: "96em", // pc
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "sm",
      },
      variants: {
        primary: {
          bg: "brand.primary",
          color: "white",
          _hover: { bg: "#9B2C2C", transform: "translateY(-1px)" },
        },
        outline: {
          borderColor: "brand.primary",
          color: "brand.primary",
          _hover: { bg: "red.50" },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: "'Playfair Display', Georgia, serif",
        fontWeight: "700",
        color: "brand.ink",
      },
    },
    Text: {
      baseStyle: {
        color: "gray.700",
        lineHeight: "1.7",
      },
    },
    Link: {
      baseStyle: {
        color: "brand.primary",
        _hover: { textDecoration: "underline", color: "brand.secondary" },
      },
    },
  },
  styles: {
    global: {
      "::selection": {
        color: "white",
        background: "#C53030",
      },
      "::-webkit-scrollbar": {
        width: "0.5em",
      },
      "::-webkit-scrollbar-track": {
        background: "#F7FAFC",
      },
      "::-webkit-scrollbar-thumb": {
        transition: "150ms all ease-in-out",
        bgColor: "#CBD5E0",
        borderRadius: "full",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#A0AEC0",
      },
      html: {
        scrollBehavour: "smooth",
      },
      "html, body": {
        overflowX: "hidden",
        backgroundColor: "#FFFFFF",
        color: "#1A202C",
        fontSize: "16px",
        lineHeight: "1.7",
      },
      ".booxtore-logo": {
        fontFamily: "'Playfair Display', Georgia, serif",
      },
      ".markdown": {
        "div.end-p": {
          marginBottom: 4,
        },
        a: {
          color: "#C53030",
          fontWeight: "500",
          _hover: {
            textDecoration: "underline",
            color: "#9B2C2C",
          },
        },
        p: {
          lineHeight: "1.9",
          marginY: 6,
          fontSize: "1.1rem",
          color: "#2D3748",
          fontFamily: "'Lora', Georgia, serif",
        },
        "h1, h2, h3, h4, h5, h6": {
          fontFamily: "'Playfair Display', Georgia, serif",
          fontWeight: 700,
          marginTop: 8,
          marginBottom: 4,
          textOverflow: "ellipsis",
          lineHeight: "1.3",
          color: "#1A202C",
        },
        h1: {
          fontSize: "4xl",
        },
        h2: {
          fontSize: "3xl",
        },
        h3: {
          fontSize: "2xl",
        },
        h4: {
          fontSize: "xl",
        },
        h5: {
          fontSize: "lg",
        },
        h6: {
          fontSize: "md",
        },
        blockquote: {
          pl: 6,
          py: 2,
          my: 6,
          pos: "relative",
          fontStyle: "italic",
          color: "#4A5568",
          bg: "#F7FAFC",
          borderRadius: "md",
          _before: {
            content: "''",
            display: "block",
            pos: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: "4px",
            bgColor: "#C53030",
            borderRadius: "full",
          },
        },
        table: {
          maxWidth: "full",
          borderSpacing: 0,
          mt: 6,
          borderRadius: "md",
          overflow: "hidden",
          thead: {
            background: "#F7FAFC",
          },
          th: {
            fontWeight: 600,
            color: "#1A202C",
          },
          "th, td": {
            padding: "0.75em 1em",
            border: "1px solid #E2E8F0",
          },
        },
        "ol, ul": {
          padding: 0,
          fontSize: "lg",
        },
        li: {
          lineHeight: "1.8",
          marginLeft: 6,
          paddingLeft: 2,
          marginBottom: 3,
        },
      },
      "#nprogress": {
        pointerEvents: "none",
      },
      "#nprogress .bar": {
        background: "#C53030",
        pos: "fixed",
        zIndex: 99999,
        top: 0,
        left: 0,
        width: "full",
        height: "3px",
      },
      ".nprogress-custom-parent": {
        overflow: "hidden",
        position: "absolute",
      },
    },
  },
})

export default theme
