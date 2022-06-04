import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colton Pemberton</title>
        <meta name="description" content="Colton Pemberton's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.jumbotron}>
          <div className={styles.jumbotronHeaderContainer}>
            {/* <video */}
            {/*  className={styles.videoBg} */}
            {/*  src="/ocean.mp4" */}
            {/*  loop */}
            {/*  muted */}
            {/*  autoPlay */}
            {/* /> */}
            <h1 className={styles.jumbotronHeader}>
              Colton
              <br />
              <strong>Pemberton</strong>
            </h1>
          </div>
          <h2 className={styles.tagLine}>Sr. Front End Developer</h2>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
