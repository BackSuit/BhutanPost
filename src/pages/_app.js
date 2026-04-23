import "@fontsource/inter/latin-400.css"
import "@fontsource/inter/latin-500.css"
import "@fontsource/inter/latin-600.css"
import "@fontsource/inter/latin-700.css"

import { useEffect } from "react"
import { ChakraProvider } from "@chakra-ui/react"
import theme from "../theme"

import { SessionProvider } from "next-auth/react"
import Router, { useRouter } from "next/router"

import * as gtag from "src/libs/gtag"
import Container from "@/components/layout/container"
import ContextProvider from "src/context"
import { isProduction } from "src/constanst/development"
import dynamic from "next/dynamic"

const Analytics = dynamic(
  () => import("@vercel/analytics/next").then(mod => mod.Analytics),
  { ssr: false }
)
const SpeedInsights = dynamic(
  () => import("@vercel/speed-insights/next").then(mod => mod.SpeedInsights),
  { ssr: false }
)

// Lazy-load NProgress to avoid blocking main thread on initial load
let nprogressLoaded = false
function setupNProgress() {
  if (nprogressLoaded) return
  nprogressLoaded = true
  import("nprogress").then(mod => {
    const NProgress = mod.default
    NProgress.configure({ showSpinner: false })
    Router.onRouteChangeStart = () => NProgress.start()
    Router.onRouteChangeComplete = () => NProgress.done()
    Router.onRouteChangeError = () => NProgress.done()
  })
}

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter()

  useEffect(() => {
    // Setup NProgress on first interaction/route change
    setupNProgress()

    const handleRouteChange = url => {
      if (isProduction) {
        gtag.pageview(url)
      }
    }

    router.events.on("routeChangeComplete", handleRouteChange)

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <SessionProvider session={session}>
        <ChakraProvider theme={theme}>
          <ContextProvider>
            <Container>
              <Component {...pageProps} />
            </Container>
          </ContextProvider>
        </ChakraProvider>
      </SessionProvider>

      <Analytics debug={false} />
      <SpeedInsights debug={false} />
    </>
  )
}

export default MyApp
