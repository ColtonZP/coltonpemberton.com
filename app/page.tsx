import { promises as fs } from "node:fs";
import Img from "next/image";
import { Suspense } from "react";
import { BrandGithub, World } from "tabler-icons-react";

import styles from "./styles.module.css";

type Project = {
  title: string;
  description: string;
  image?: string;
  liveURL: string;
  codeURL: string;
  tags: string[];
};

export default async function Home() {
  const file = await fs.readFile(`${process.cwd()}/app/data.json`, "utf8");
  const projects: Project[] = JSON.parse(file);

  return (
    <div>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.h1Container}>
            <Suspense>
              <video
                className={styles.videoBg}
                src="/ocean.mp4"
                loop
                muted
                autoPlay
                playsInline
              />
            </Suspense>

            <h1 className={styles.h1}>
              Colton
              <span>P</span>
              <span>Pemberton</span>
            </h1>
          </div>

          <h2>Sr. Front End Developer</h2>

          <div className={styles.links}>
            <a
              className={styles.getInTouch}
              href="mailto: colton@coltonpemberton.com?subject=Get in touch from coltonpemberton.com"
            >
              Get in touch
            </a>

            <a
              className={styles.gitHub}
              aria-label="GitHub"
              href="https://github.com/ColtonZP"
            >
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
                className={project.image ? styles.liWithImage : styles.li}
                key={project.title}
              >
                {project.image && (
                  <Img
                    src={project.image}
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
                    {project.tags.map(tag => (
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
}
