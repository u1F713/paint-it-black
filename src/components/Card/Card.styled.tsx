import styled from 'styled-components'

interface StyledProps {
  SpriteSize: number
}

export const CardStyled = styled.article<StyledProps>`
  display: grid;
  justify-content: center;
  align-content: center;
  width: fit-content;

  figure {
    display: flex;
    justify-content: center;
    width: ${(props) => props.SpriteSize}px;
    height: ${(props) => props.SpriteSize}px;
    background-color: ${(props) => props.theme.colors.bg_1};
    border-radius: 5px;
  }

  .content-body {
    width: 82%;
    margin: 0.8em auto;
  }

  .number-id {
    color: gray;
  }
`

export const Name = styled.h3`
  font-size: 1.2em;
  font-style: normal;
`
export const Sprites = styled.img`
  object-fit: cover;
`
