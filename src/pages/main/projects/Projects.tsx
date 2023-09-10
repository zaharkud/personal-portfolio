import styles from "./projects.module.scss";
import projectImg__01 from "assets/img/projects/project__01-01.webp";
import projectImg__02 from "assets/img/projects/project__02-01.webp";
import ProjectPromo from "components/ProjectPromo/ProjectPromo";
import { Link } from "react-router-dom";

export default function Skills() {
  return (
    <section className={styles.container}>
      <article className={styles.project}>
        <ProjectPromo projectImg={projectImg__01} projectLink="/project_01" />
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
            Информационный сайт с контактами, ценами на услуги и портфолио
            выполненных работ
          </p>
        </div>
      </article>
      <article className={styles.project}>
        <ProjectPromo projectImg={projectImg__02} projectLink="сайт-визитка" />
        <div className={styles.project__bottom}>
          <div className={styles.techStack}>
            <article className={styles.techStack__item}>React</article>
            <article className={styles.techStack__item}>HTML</article>
            <article className={styles.techStack__item}>SASS</article>
          </div>
          <div className={styles.project__content}>
            <h3 className={styles.title}>ARLEZU - Изучение армянского</h3>
            <p className={styles.description}>
              Приложение по изучению армянского языка. Упор сделан на
              запоминание слов через визуальные образы
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
