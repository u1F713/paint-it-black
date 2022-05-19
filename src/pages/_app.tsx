import { ReactElement } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }): ReactElement {
  return (
    <>
      <Head>
        <title>Paint It Black</title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
