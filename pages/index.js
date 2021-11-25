import { Title, Footer } from '../components/main/Main';
import Layout from '../components/layout/Layout'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
    <Head>
      <title>Home</title>
    </Head>
    <Title>
      <Link href="/wordcloud">
        <a>Back to wordcloud</a>
      </Link>
    </Title>
    <Footer>Footer</Footer>
    </Layout>
  )
}
