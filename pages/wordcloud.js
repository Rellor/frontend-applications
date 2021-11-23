import { Title, Footer } from '../Components/main/main';
import Wordcloud from '../Components/wordcloud/Wordcloudcomp';
import Layout from '../components/layout/layout'
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Wordcloud</title>
      </Head>
      <Title>
        <Link href="/">
          <a>Go to home</a>
        </Link>
      </Title>
      <Wordcloud />
      <Footer>Footer</Footer>
    </Layout>
  )
}
