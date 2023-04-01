import ProjectItem from "../components/ProjectItem";
import styles from "./Projects.module.css";
import iterativeImg from "../public/assets/project_thumbnails/roomkast.png";
import albumImg from "../public/assets/project_thumbnails/album.png";
import redesignImg from "../public/assets/project_thumbnails/redesign.png";
import happinessImg from "../public/assets/project_thumbnails/happiness.png";
import { StaticImageData } from "next/image";
import Head from "next/head";

interface ProjectItem {
  id: number;
  title: string;
  img: StaticImageData;
  descr: string;
  link: string;
  tags: Array<string>;
}

const Projects = () => {
  const project_data: Array<ProjectItem> = [
    {
      id: 0,
      title: "Troop PVD's Landing Page",
      img: redesignImg,
      descr: "Redesigning a restaurant's homepage.",
      link: "projects/site-redesign",
      tags: ["UI/UX", "responsive design", "HTML/CSS"],
    },
    {
      id: 1,
      title: "Album Discovery App",
      img: albumImg,
      descr: "A React app for aggregating albums.",
      link: "projects/album-app",
      tags: ["React", "Material UI"],
    },
    {
      id: 2,
      title: "Roomkast App",
      img: iterativeImg,
      descr: "Prototyping a roommate matching app.",
      link: "projects/roomkast-app",
      tags: ["UI/UX", "Figma", "usability testing"],
    },
    {
      id: 2,
      title: "Happy Places Visual Essay",
      img: happinessImg,
      descr: "Brown students' happy places.",
      link: "projects/happiness-story",
      tags: ["jQuery", "HTML/CSS", "Brown Daily Herald"],
    },
  ];

  return (
    <>
      <Head>
        <title>home | lizzy zhang</title>
      </Head>
      <main id={styles["homepage"]}>
        <div className={styles["intro-text-container"]}>
          <h1 id={styles["hello-text"]}>
            hi there, i'm{" "}
            <span className={styles["underline"]}>lizzy zhang</span>.
          </h1>
          <p>
            I'm an aspiring front-end developer passionate about creating
            beautiful and effective tools.
          </p>
          <a id={styles["see-work-wrapper"]} href="#works">
            works ↓
          </a>
        </div>

        <div className={styles.projects}>
          <div id="works" className={styles["projects-list"]}>
            {project_data.map((project: ProjectItem) => (
              <ProjectItem
                key={project.id}
                title={project.title}
                thumbnail={project.img}
                descr={project.descr}
                link={project.link}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Projects;
