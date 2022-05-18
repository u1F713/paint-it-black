import { ReactElement } from 'react'
import GlobalStyled from '../styles/global.styled'

function MyApp({ Component, pageProps }): ReactElement {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyled />
    </>
  )
}

export default MyApp
