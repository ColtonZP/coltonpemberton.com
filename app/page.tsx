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

type Experience = {
  company: string;
  title: string;
  date: string;
  location: string;
  description: string[];
};

const experiences: Experience[] = JSON.parse(
  await fs.readFile(`${process.cwd()}/app/data/experiences.json`, "utf8"),
);

const projects: Project[] = JSON.parse(
  await fs.readFile(`${process.cwd()}/app/data/projects.json`, "utf8"),
);

export default function Home() {
  return (
    <div>
      <header className={styles.header}>
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

        <h2>Sr. Full Stack Developer</h2>

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
      </header>

      <main className={styles.main}>
        <h3 className={styles.h3}>Experience</h3>
        <ul className={styles.experiences}>
          {experiences.map(experience => (
            <li
              key={`experience-${experience.company}`}
              className={styles.experience}
            >
              <div className={styles.experienceHeader}>
                <h5 className={styles.h5}>{experience.company}</h5>
                <span>
                  &bull; {experience.title} &bull; {experience.location}
                </span>
              </div>

              <em className={styles.subtle}>{experience.date}</em>

              <ul className={styles.experienceDescription}>
                {experience.description.map(desc => (
                  <li key={desc}>{desc}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <h3 className={styles.h3}>Projects</h3>
        <ul className={styles.projects}>
          {projects.map((project, index) => (
            <li key={project.title} className={styles.project}>
              {project.image && (
                <Img
                  src={project.image}
                  alt={project.title}
                  className={styles.img}
                  width={1920}
                  height={1080}
                />
              )}

              <h4 className={styles.projectHeader}>
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
                  <World size={16} strokeWidth={2} color={"#F58A07"} /> Live
                </a>

                <a className={styles.a} href={project.codeURL}>
                  <BrandGithub size={16} strokeWidth={2} color={"#F58A07"} />{" "}
                  Source
                </a>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
