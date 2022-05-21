import { FC, ReactElement, useEffect, useState } from 'react'
import { IPokemon } from '~/interfaces/pokemon'
import PokemonType from '../PokemonType'
import { CardStyled, Name, Sprites } from './Card.styled'

interface Props {
  name: string
  url: URL
}

const Card: FC<Props> = ({ name, url }): ReactElement => {
  const [pokemon, setPokemon] = useState<IPokemon>()

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
        <Sprites src={pokemon?.sprites.front_default} />
      </figure>
      <div className="content-body">
        <span className="number-id">#{pokemon?.id}</span>
        <Name>{name}</Name>
        {pokemon?.types.map((type, key: number) => (
          <PokemonType url={type.type.url} key={key} />
        ))}
      </div>
    </CardStyled>
  )
}
export default Card
