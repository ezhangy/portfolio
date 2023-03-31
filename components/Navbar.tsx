import styles from "./Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <div className={styles.test}>
        <Link id={styles.name} href={`/`}>
          lizzy zhang
        </Link>
      </div>
      <div className={styles.links}>
        <Link
          className={router.pathname === "/" ? styles["active"] : ""}
          href={`/`}
        >
          works
        </Link>
        <Link
          className={router.pathname === "/about" ? styles["active"] : ""}
          href={`/about`}
        >
          about
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
