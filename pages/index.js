import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  const isServer = () => typeof(window) === 'undefined';
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter+++++!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing {isServer} {typeof(window)}<code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
