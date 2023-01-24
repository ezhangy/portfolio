import styles from "./ProjectBanner.module.css"
import Image from "next/image"

const ProjectBanner = ({ imgSrc }) => (
  <div className={styles["img-container"]}>
    <Image src={imgSrc}/>
  </div>
)

export default ProjectBanner