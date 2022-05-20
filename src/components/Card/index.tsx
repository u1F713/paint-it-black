import { FC, ReactElement, useEffect, useState } from 'react'
import { CardStyled, Name, Sprites } from './Card.styled'

interface Props {
  name: string
  url: URL
}

const Card: FC<Props> = ({ name, url }): ReactElement => {
  // console.log(url.pathname.split('/pokemon/')[1].replace('/', ''))

  const [pokemon, setPokemon] = useState({ id: 0 })

  useEffect(() => {
    async function fetchData(url: URL): Promise<any> {
      const result = await fetch(url.toString())
      setPokemon(await result.json())
    }
    fetchData(url).catch(null)
  }, [url])

  return (
    <CardStyled SpriteSize={250}>
      <figure>
        <Sprites src="https://res.cloudinary.com/dmfac7zfe/image/upload/v1653054193/icons/Character_Hu_Tao_Chibi_Sticker_1.webp" />
      </figure>
      <div className="content-body">
        <span className="number-id">{pokemon.id}</span>
        <Name>{name}</Name>
      </div>
    </CardStyled>
  )
}
export default Card
