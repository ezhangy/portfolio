import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.test}>
        <Link id={styles.name} href={`/`}>
          lizzy zhang
        </Link>
      </div>
      <div className={styles.links}>
        <Link href={`/`}>works</Link>
        <Link href={`/about`}>about</Link>
      </div>
    </div>
  );
};

export default Navbar;
