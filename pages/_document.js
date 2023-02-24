import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' type='image/png' href='/icons/run-engine256.png' />
        <link rel='icon' type='image/png' href='/icons/run-engine192.png' />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
