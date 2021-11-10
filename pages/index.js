import Head from 'next/head'
import Link from 'next/link'
import MainLayout from '../components/MainLayout'

export default function Home() {
  return (
    <MainLayout title="main">
      <Head>
        <title>my title</title>
      </Head>
      <p>
        <Link href="/posts">posts</Link>
      </p>
      <p>
        <Link href="/about">about</Link>
      </p>
      <p>
        <Link href="/about/author">author</Link>
      </p>
      <style jsx>{``}</style>
    </MainLayout>
  )
}
