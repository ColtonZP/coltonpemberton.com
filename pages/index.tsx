import { logEvent } from 'firebase/analytics'
import Head from 'next/head'
import { BrandGithub } from 'tabler-icons-react'

import { analytics } from '../lib/firebaseConfig'
import styles from '../styles/index.module.css'

type Project = {
  title: string
  description: string
  tags: string[]
}

type Props = {
  projects: Project[]
}

export default function Home({ projects }: Props) {
  const handleLogEvent = (link: string) => {
    logEvent(analytics, `click_${link}`, { link })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Colton Pemberton&#39;s Portfolio</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.jumbotron}>
          <h1 className={styles.jumbotronH1}>
            Colton
            <span>P</span>
            <span>Pemberton</span>
          </h1>

          <h2>Sr. Front End Developer</h2>

          <p className={styles.aboutP}>
            I love building web applications using{' '}
            <span className="primary">React.js</span>. I currently work at
            Accenture Federal Services as a Lead Front End developer.
          </p>

          <div className={styles.links}>
            <a
              onClick={() => handleLogEvent('get_in_touch')}
              className={styles.getInTouch}
              href="mailto: colton@coltonpemberton.com?subject=Get in touch from coltonpemberton.com">
              Get in touch
            </a>

            <a
              // onClick={() => handleLogEvent('get_in_touch')}
              className={styles.gitHub}
              href="https://github.com/ColtonZP">
              <BrandGithub size={26} strokeWidth={2} color={'#F58A07'} />
            </a>
          </div>
        </div>

        {/*<ul>*/}
        {/*  {projects.map(project => (*/}
        {/*    <li key={project.title}>*/}
        {/*      <h3>{project.title}</h3>*/}
        {/*      <p>{project.description}</p>*/}
        {/*      <ul>*/}
        {/*        {project.tags.map(tag => (*/}
        {/*          <li key={`${project.title}-${tag}`}>{tag}</li>*/}
        {/*        ))}*/}
        {/*      </ul>*/}
        {/*      /!*<a href={project.urls.live}>Live</a>*!/*/}
        {/*      /!*<a href={project.urls.source}>Source</a>*!/*/}
        {/*    </li>*/}
        {/*  ))}*/}
        {/*</ul>*/}
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const projects: Project[] = []

  return {
    props: { projects },
  }
}
