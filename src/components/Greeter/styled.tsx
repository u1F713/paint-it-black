import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colors.bg};
`

export const Font = styled.h1`
  font-size: 3em;
  color: ${(props) => props.theme.colors.fg};
`
