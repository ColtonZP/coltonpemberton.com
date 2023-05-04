import { Analytics } from "@vercel/analytics/dist/react";
import { BrandGithub } from "tabler-icons-react";

import type { NextPage } from "next";

import "./globals.css";
import styles from "./styles.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.jumbotron}>
          <h1 className={styles.jumbotronH1}>
            Colton
            <span>P</span>
            <span>Pemberton</span>
          </h1>

          <h2>Sr. Front End Developer</h2>

          <p className={styles.aboutP}>
            I love building web applications using{" "}
            <span className="primary">React.js</span>. I currently work at
            Accenture Federal Services as a Lead Front End developer.
          </p>

          <div className={styles.links}>
            <a
              // onClick={() => handleLogEvent('get_in_touch')}
              className={styles.getInTouch}
              href="mailto: colton@coltonpemberton.com?subject=Get in touch from coltonpemberton.com"
            >
              Get in touch
            </a>

            <a
              // onClick={() => handleLogEvent('get_in_touch')}
              className={styles.gitHub}
              href="https://github.com/ColtonZP"
            >
              <BrandGithub size={26} strokeWidth={2} color={"#F58A07"} />
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
  );
};

export default Home;
