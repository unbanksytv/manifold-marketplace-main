import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { getCssText } from '../stitches.config'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const description = 'Manifold'
    return (
      <Html>
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="keywords" content="nft, ethereum, protocol" />
        <link
          rel="shortcut icon"
          type="image/svg"
          href="https://manifold.xyz/assets/manifold-favicon.23612492.svg"
        />
        <title>Reservoir Market | Open Source NFT Marketplace</title>
        <meta name="description" content={description} />
        <meta name="keywords" content="NFT, API, Protocol" />
        {/* Twitter */}
        {/* The optimal size is 1200 x 630 (1.91:1 ratio). */}
        {/* <meta name="twitter:image" content={ogImage} /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Manifold" />
        <meta name="twitter:description" content={description} />

        {/* OG - https://ogp.me/ */}
        {/* https://www.opengraph.xyz/ */}
        <meta name="og:title" content="Manifold" />
        <meta property="og:type" content="website" />
        <meta property="og:determiner" content="the" />
        <meta property="og:locale" content="en" />
        <meta property="og:description" content={description} />
        {/* The optimal size is 1200 x 630 (1.91:1 ratio). */}
        {/* <meta property="og:image" content={ogImage} /> */}
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Reservoir Market Banner" />

        {/* Reservoir Meta Tags: https://docs.reservoir.tools/docs/reservoir-meta-tags */}
        <meta property="reservoir:title" content="Manifold" />
        <meta property="reservoir:icon" content="/reservoir-source-icon.png" />
        <meta
          property="reservoir:token-url-mainnet"
          content="/collection/ethereum/${contract}/${tokenId}"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
