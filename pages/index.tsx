import type { NextPage } from 'next'
import Head from 'next/head'
// import { Storage } from 'aws-amplify'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Colton Pemberton</title>
        <meta name="description" content="Colton Pemberton's Portfolio" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.jumbotron}>
          <div className={styles.jumbotronHeaderContainer}>
            <video
              className={styles.videoBg}
              src="/ocean.mp4"
              loop
              muted
              autoPlay
            />
            <h1 className={styles.jumbotronHeader}>
              Colton
              <span>Pemberton</span>
              <span>P.</span>
            </h1>
          </div>
          <h2>Sr. Front End Developer</h2>
          <p className={styles.aboutP}>
            I like to build projects using{' '}
            <span className={styles.primary}>React.js</span>. I work hard to
            make the internet a better place than when I found it. I currently
            work at Accenture Federal Services as a Sr. Front End developer.
          </p>
          <a
            className={styles.getInTouch}
            href="mailto: colton@coltonpemberton.com?subject=Contact from coltonpemberton.com">
            Get in touch
          </a>
        </div>

        <video src="/ocean.mp4" loop muted autoPlay />
      </main>
    </div>
  )
}

export default Home
