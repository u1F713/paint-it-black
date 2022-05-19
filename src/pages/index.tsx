import { NextPage } from 'next'
import Layout from '@components/Layout'
import Greeter from '@components/Greeter'

const Index: NextPage<{}> = () => {
  return (
    <Layout>
      <Greeter />
    </Layout>
  )
}
export default Index
