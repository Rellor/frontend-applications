import { Title, Footer } from '../components/main/Main';
import Wordcloud from '../components/wordcloud/Wordcloudcomp';
import Layout from '../components/layout/Layout'
import { KanyeProvider } from '../components/provider/Provider';
import Link from 'next/link'
import Head from 'next/head'

export default function Home() {
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
        <Wordcloud/>
        <Footer>Footer</Footer>
      </Layout>
    </KanyeProvider>
  )
}
