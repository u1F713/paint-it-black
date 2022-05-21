import { FC, ReactElement, useEffect, useState } from 'react'
import { PokemonTypeStyled } from './PokemonType.styled'

interface PokemonTypeProps {
  url: URL
}

const PokemonType: FC<PokemonTypeProps> = ({ url }): ReactElement => {
  const [type, setType] = useState({ name: '' })

  useEffect(() => {
    async function fetType(): Promise<void> {
      const res = await fetch(url.toString())
      setType(await res.json())
    }
    fetType().catch(null)
  }, [url])

  return <PokemonTypeStyled>{type.name}</PokemonTypeStyled>
}
export default PokemonType
