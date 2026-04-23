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
          {process.env.NODE_ENV === "production" && (
            <>
              {process.env.NEXT_PUBLIC_GA_TRACKING_ID && (
                <>
                  <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`}
                  />
                  <script
                    dangerouslySetInnerHTML={{
                      __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GA_TRACKING_ID}', {
                          page_path: window.location.pathname,
                        });
                      `,
                    }}
                  />
                </>
              )}
              {process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID && (
                <script
                  async
                  src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID}`}
                  crossOrigin="anonymous"
                />
              )}
            </>
          )}
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
