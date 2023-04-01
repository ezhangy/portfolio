import Image, { StaticImageData } from "next/image";
import styles from "./ProjectBanner.module.css";

interface ProjectBannerProps {
  img: StaticImageData;
}

const ProjectBanner = ({ img }: ProjectBannerProps) => (
  <div className={styles["img-container"]}>
    <Image src={img} alt="banner image" priority={true} />
  </div>
);

export default ProjectBanner;
