import React, { FC, ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '@styles/global.styled'
import theme from '@styles/themes/gruvbox-light'
import * as Styled from './styled'

interface LayoutProps {
  children: ReactNode | ReactNode[]
}

const Layout: FC<LayoutProps> = ({ children }): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Styled.LayoutStyled>{children}</Styled.LayoutStyled>
    </ThemeProvider>
  )
}
export default Layout
