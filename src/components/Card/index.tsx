import { FC, ReactElement } from 'react'
import { CardStyled, Name, Sprites } from './Card.styled'

interface Props {
  name: string
  id: number
}

const Card: FC<Props> = ({ name, id }): ReactElement => {
  return (
    <CardStyled SpriteSize={250}>
      <figure>
        <Sprites src="https://res.cloudinary.com/dmfac7zfe/image/upload/v1653054193/icons/Character_Hu_Tao_Chibi_Sticker_1.webp" />
      </figure>
      <div className="content-body">
        <span className="number-id">{id}</span>
        <Name>{name}</Name>
      </div>
    </CardStyled>
  )
}
export default Card
