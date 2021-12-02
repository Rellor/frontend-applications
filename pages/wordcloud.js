import { Title, Footer } from '../components/main/Main';
import Wordcloudfilter from '../components/wordcloud/Wordcloudfliters';
import Layout from '../components/layout/Layout'
import { KanyeProvider } from '../components/provider/Provider';
import Link from 'next/link'
import Head from 'next/head'

const Home = () => {
  return (
    <KanyeProvider>
      <Layout>
        <Head>
          <title>Wordcloud</title>
        </Head>
        <Title>
          <Link href="/">
            <a>Go to home</a>
          </Link>
        </Title>
        <Wordcloudfilter />
        <Footer>
        </Footer>
      </Layout>
    </KanyeProvider>
  )
}

export default Home;