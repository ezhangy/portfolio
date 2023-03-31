import ProjectItem from "../components/ProjectItem";
import styles from "./Projects.module.css";
import iterativeImg from "../public/assets/project_thumbnails/roomkast.png";
import albumImg from "../public/assets/project_thumbnails/album.png";
import redesignImg from "../public/assets/project_thumbnails/redesign.png";
import happinessImg from "../public/assets/project_thumbnails/happiness.png";
import { StaticImageData } from "next/image";

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
    <div id={styles["homepage"]}>
      <div className={styles["intro-text-container"]}>
        <h1 id={styles["hello-text"]}>
          hi there, i'm <b>lizzy zhang.</b>
        </h1>
        <p>
          I'm an aspiring <b>front-end developer</b> passionate about creating
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
    </div>
  );
};

export default Projects;

export async function getStaticProps(contex: any) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
