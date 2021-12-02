import { Title, Footer } from '../components/main/Main';
import HomeBody from '../components/home/Homecomp';
import Layout from '../components/layout/Layout'
import Link from 'next/link'
import Head from 'next/head'

const Home = () => {
  return (
    <Layout>
    <Head>
      <title>Home</title>
    </Head>
    <Title>
      <Link href="/wordcloud">
        <a>Go to wordcloud</a>
      </Link>
    </Title>
    <HomeBody />
    <Footer>Footer</Footer>
    </Layout>
  )
}

export default Home;
