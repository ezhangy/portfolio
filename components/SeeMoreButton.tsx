import Link from "next/link";
import styles from "./SeeMoreButton.module.css";

const SeeMoreButton = () => (
  <div className={styles["button-wrapper"]}>
    <Link className="simple-button" href="/">
      {" "}
      ← See more projects
    </Link>
  </div>
);

export default SeeMoreButton;
