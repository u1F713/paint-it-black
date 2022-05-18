import React, { FC, ReactElement, ReactNode } from 'react'
import GlobalStyle from '../../styles/global.styled'
import * as Styled from './Layout.styed'

interface LayoutProps {
  children: ReactNode | ReactNode[]
}

const Layout: FC<LayoutProps> = ({ children }): ReactElement => {
  return (
    <>
      <GlobalStyle />
      <Styled.LayoutStyled>{children}</Styled.LayoutStyled>
    </>
  )
}
export default Layout
