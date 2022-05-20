import styled from 'styled-components'

interface ContainerProps {
  witd: number
}

export const ContainerStyled = styled.div<ContainerProps>`
  display: flex;
  justify-content: center;

  section {
    width: ${(props) => props.witd}px;
    margin: auto;
  }
`
