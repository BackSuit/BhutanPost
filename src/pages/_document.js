import Document, { Head, Html, Main, NextScript } from "next/document"

// Derive API origin from env at build time — no hardcoded URLs
const API_ORIGIN = (() => {
  try {
    return process.env.NEXT_PUBLIC_API_URL
      ? new URL(process.env.NEXT_PUBLIC_API_URL).origin
      : null
  } catch {
    return null
  }
})()

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {API_ORIGIN && <link rel="preconnect" href={API_ORIGIN} />}
          {API_ORIGIN && <link rel="dns-prefetch" href={API_ORIGIN} />}
          <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
          <link
            rel="dns-prefetch"
            href="https://pagead2.googlesyndication.com"
          />
          <link rel="dns-prefetch" href="https://va.vercel-scripts.com" />
          <link
            rel="shortcut icon"
            href="/meta/favicon.ico"
            type="image/x-icon"
          />
          <link rel="icon" href="/meta/favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon" href="/meta/apple-touch-icon.png" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
