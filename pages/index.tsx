import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { Storage } from 'aws-amplify'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [result, setResult] = useState<string>()

  useEffect(() => {
    let active = true
    load()
    return () => {
      active = false
    }

    async function load() {
      setResult(undefined) // this is optional
      const res = await Storage.get('protected/ocean.mp4', {
        level: 'protected',
      })

      if (!active) {
        return
      }
      setResult(res)
    }
  }, [])

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
            <video
              className={styles.videoBg}
              src="/ocean.mp4"
              loop
              muted
              autoPlay
            />
            <h1 className={styles.jumbotronHeader}>
              Colton
              <br />
              <strong>Pemberton</strong>
            </h1>
          </div>
          <h2 className={styles.tagLine}>Sr. Front End Developer</h2>
        </div>
      </main>
    </div>
  )
}

export default Home
