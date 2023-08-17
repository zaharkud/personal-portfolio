import styles from "../app.module.scss";
import { Link } from "react-router-dom";

interface ISidebarTypes {
  handleMenuClick: (section: any) => void;
  aboutSection: any;
  skillsSection: any;
  projectsSection: any;
  contactsSection: any;
}

export default function Sidebar({
  handleMenuClick,
  aboutSection,
  skillsSection,
  projectsSection,
  contactsSection,
}: ISidebarTypes) {
  return (
    <>
      <section className={styles.info}>
        <div className={styles.logo}></div>
        <h2 className={styles.title}>Junior Frontend Developer</h2>
        <p className={styles.description}>
          Начинающий веб-разработчик. Владею навыками проектирования
          интерфейсов, вёрстки и работы с backend.
        </p>
      </section>
      <nav>
        <ul className={styles.menu}>
          <li>
            <Link
              to="/"
              state={{ scrollTo: "aboutSection" }}
              onClick={() => handleMenuClick(aboutSection)}
            >
              Обо мне
            </Link>
          </li>
          <li>
            <Link
              to="/"
              state={{ scrollTo: "skillsSection" }}
              onClick={() => handleMenuClick(skillsSection)}
            >
              Навыки
            </Link>
          </li>
          <li>
            <Link
              to="/"
              state={{ scrollTo: "projectsSection" }}
              onClick={() => handleMenuClick(projectsSection)}
            >
              Проекты
            </Link>
          </li>
          <li>
            <Link
              to="/"
              state={{ scrollTo: "contactsSection" }}
              onClick={() => handleMenuClick(contactsSection)}
            >
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
