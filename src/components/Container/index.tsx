import { FC, ReactElement, ReactNode } from 'react'
import { ContainerStyled } from './Container.styled'

interface ContainerProps {
  children: ReactNode | ReactNode[]
}

const Container: FC<ContainerProps> = ({ children }): ReactElement => {
  return (
    <ContainerStyled witd={700}>
      <section>{children} </section>
    </ContainerStyled>
  )
}
export default Container
