import { NextPage } from 'next'
import Layout from '@components/Layout'
import Container from '~/components/Container'
import Card from '~/components/Card'

const Index: NextPage<{}> = () => {
  return (
    <Layout>
      <Container>
        <Card name="hu tao" id={1} />
      </Container>
    </Layout>
  )
}
export default Index
