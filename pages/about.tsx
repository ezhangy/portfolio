import profileImg from "../public/assets/profile.jpg";
import Image from "next/image";
import styles from "./About.module.css";

const About = () => (
  <div className={styles.about}>
    <div className={styles["profile-wrapper"]}>
      <Image src={profileImg} alt="profile photo" />
    </div>
    <div className={styles["bio-wrapper"]}>
      <h1>about me.</h1>

      <p>
        Hello! I'm a senior studying computer science. I'm deeply passionate
        about web development's capacity to create tools and experiences to
        inform and empower our communities. I am interested in front-end
        development positions in media, government, and non-profit
        organizations.
      </p>

      <p>
        Currently, I get to make cool things as part of{" "}
        <a href="https://www.browndailyherald.com/">Brown Daily Herald's</a>{" "}
        tech team. I also teach about ethics as part of{" "}
        <a href="http://ethics.cs.brown.edu/">
          Socially Responsible Computing @ Brown
        </a>
        .
      </p>
    </div>
  </div>
);

export default About;
