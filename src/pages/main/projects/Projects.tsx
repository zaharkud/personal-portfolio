import styles from "./projects.module.scss";
import projectImg from "assets/img/projects/project__01-01.webp";
import ProjectPromo from "components/ProjectPromo/ProjectPromo";
import { Link } from "react-router-dom";

export default function Skills() {
  return (
    <section className={styles.container}>
      <article className={styles.project}>
        <ProjectPromo projectImg={projectImg} projectLink="/project_01" />
        <div className={styles.project__bottom}>
          <div className={styles.techStack}>
            <article className={styles.techStack__item}>HTML</article>
            <article className={styles.techStack__item}>CSS / Scss</article>
            <article className={styles.techStack__item}>JavaScript</article>
          </div>
          <Link to="/project_01">
            <h3 className={styles.title}>Сайт-визитка строительной бригады</h3>
          </Link>
          <p className={styles.description}>
            Начинающий веб-разработчик. Владею навыками проектирования
            интерфейсов, вёрстки и работы с backend.
          </p>
        </div>
      </article>
      <article className={styles.project}>
        <ProjectPromo projectImg={projectImg} projectLink="сайт-визитка" />
        <div className={styles.project__bottom}>
          <div className={styles.techStack}>
            <article className={styles.techStack__item}>React</article>
            <article className={styles.techStack__item}>HTML</article>
            <article className={styles.techStack__item}>SASS</article>
          </div>
          <div className={styles.project__content}>
            <h3 className={styles.title}>ARLEZU - Изучение армянского</h3>
            <p className={styles.description}>
              Начинающий веб-разработчик. Владею навыками проектирования
              интерфейсов, вёрстки и работы с backend.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
