import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "./ProjectItem.module.css";

interface ProjectItemProps {
  title: string;
  thumbnail: StaticImageData;
  descr: string;
  link: string;
}

const ProjectItem = ({ title, thumbnail, descr, link }: ProjectItemProps) => {
  return (
    <div className={`card-button ${styles.item}`}>
      <Link href={link}>
        <div className={styles["img-container"]}>
          <Image src={thumbnail} alt="" />
        </div>
        <h2>{title}</h2>
        <p>{descr}</p>
      </Link>
    </div>
  );
};

export default ProjectItem;
