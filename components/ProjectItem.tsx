import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./ProjectItem.module.css";

interface ProjectItemProps {
  title: string;
  thumbnail: StaticImageData;
  descr: string;
  link: string;
  tags: Array<string>;
}

const ProjectItem = ({
  title,
  thumbnail,
  descr,
  link,
  tags,
}: ProjectItemProps) => {
  return (
    <div className={`card-button ${styles.item}`}>
      <Link href={link}>
        <div className={styles["img-container"]}>
          <Image src={thumbnail} alt="" />
        </div>
        <h2>{title}</h2>
        <h3>{descr}</h3>
        <ul className={styles["project-tags"]}>
          {tags.map((tagName: string) => (
            <li>{tagName}</li>
          ))}
        </ul>
      </Link>
    </div>
  );
};

export default ProjectItem;
