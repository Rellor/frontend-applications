import { Title, Footer } from '../Components/main/main';
import Wordcloud from '../Components/wordcloud/Wordcloudcomp';
import { KanyeProvider } from '../Provider/provider';
import Layout from '../Components/layout/layout'
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
        <Wordcloud />
        <Footer>Footer</Footer>
      </Layout>
    </KanyeProvider>
  )
}
