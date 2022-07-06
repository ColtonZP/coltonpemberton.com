import styles from './styles/Home.module.css'
import ocean from './ocean.mp4'

export const App = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.jumbotron}>
          <div className={styles.jumbotronHeaderContainer}>
            <video className={styles.videoBg} src={ocean} loop muted autoPlay />
            <h1 className={styles.jumbotronHeader}>
              Colton
              <span>Pemberton</span>
              <span>P.</span>
            </h1>
          </div>
          <h2>Sr. Front End Developer</h2>
          <p className={styles.aboutP}>
            I love building web applications using{' '}
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
      </main>
    </div>
  )
}
