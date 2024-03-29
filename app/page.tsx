import Img from "next/image";
import { BrandGithub, World } from "tabler-icons-react";

import "./globals.css";
import styles from "./styles.module.css";
import { getAllProjects, urlForImage } from "../sanity/lib/client";

const Home: () => Promise<React.ReactNode> = async () => {
  const projects = await getAllProjects();

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.h1}>
            Colton
            <span>P</span>
            <span>Pemberton</span>
          </h1>

          <h2>Sr. Front End Developer</h2>

          <p className={styles.p}>
            I love building web apps using{" "}
            <span className={styles.primary}>React.js</span>
          </p>

          <div className={styles.links}>
            <a
              className={styles.getInTouch}
              href="mailto: colton@coltonpemberton.com?subject=Get in touch from coltonpemberton.com"
            >
              Get in touch
            </a>

            <a className={styles.gitHub} href="https://github.com/ColtonZP">
              <BrandGithub size={26} strokeWidth={2} color={"#F58A07"} />
            </a>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.container}>
          <h3 className={styles.h3}>Projects</h3>

          <ul className={styles.ul}>
            {projects.map((project, index) => (
              <li
                className={project.mainImage ? styles.liWithImage : styles.li}
                key={project.title}
              >
                {project.mainImage && (
                  <Img
                    src={urlForImage(project.mainImage).url()}
                    alt={project.title}
                    className={styles.img}
                    width={1920}
                    height={1080}
                  />
                )}

                <div className={styles.info}>
                  <h4 className={styles.h4}>
                    <span>0{index + 1}.</span> {project.title}
                  </h4>

                  <p>{project.description}</p>

                  <ul className={styles.tags}>
                    {project.tags.map((tag) => (
                      <li key={`${project.title}-${tag}`}>{tag}</li>
                    ))}
                  </ul>

                  <div className={styles.projectLinks}>
                    <a className={styles.a} href={project.liveURL}>
                      Live <World size={16} strokeWidth={2} color={"#F58A07"} />
                    </a>

                    <a className={styles.a} href={project.codeURL}>
                      Source{" "}
                      <BrandGithub
                        size={16}
                        strokeWidth={2}
                        color={"#F58A07"}
                      />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Home;
