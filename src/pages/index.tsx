import { NextPage } from 'next'
import Layout from '@components/Layout'
import Card from '~/components/Card'
import Gallery from '~/components/Gallery'
import Container from '~/components/Container'

interface PageProps {
  pokemons: any
}

const Index: NextPage<PageProps> = ({ pokemons }) => {
  return (
    <Layout>
      <Container>
        <Gallery>
          {pokemons.results.map((pokemon, index) => (
            <Card name={pokemon.name} url={new URL(pokemon.url)} key={index} />
          ))}
        </Gallery>
      </Container>
    </Layout>
  )
}

Index.getInitialProps = async () => {
  const result = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const data = await result.json()
  return { pokemons: data }
}

export default Index
