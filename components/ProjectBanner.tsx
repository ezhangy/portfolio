import Image, { StaticImageData } from "next/image";
import styles from "./ProjectBanner.module.css";

interface ProjectBannerProps {
  img: string;
}

const ProjectBanner = ({ img }: ProjectBannerProps) => (
  <div className={styles["img-container"]}>
    <Image
      src={img}
      alt="banner image"
      priority={true}
      width={1200}
      height={1000}
    />
  </div>
);

export default ProjectBanner;
