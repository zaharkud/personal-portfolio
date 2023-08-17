import styles from "./projects.module.scss";
import projectImg from "assets/img/projects/project__01-01.png";
import { Link } from "react-router-dom";

export default function Skills() {
  return (
    <section className={styles.container}>
      <article className={styles.project}>
        <div className={styles.project__top}>
          <div className={styles.project__topLeft}>
            <img className={styles.img} src={projectImg} />
          </div>
          <div className={styles.project__topRight}>
            <p className={styles.projectType}>сайт-визитка</p>
          </div>
        </div>
        <div className={styles.project__bottom}>
          <div className={styles.techStack}>
            <article className={styles.techStack__item}>React</article>
            <article className={styles.techStack__item}>HTML</article>
            <article className={styles.techStack__item}>SASS</article>
          </div>
          <Link to="/project_01" preventScrollReset={true}>
            <h3 className={styles.title}>ARLEZU - Изучение армянского</h3>
          </Link>
          <p className={styles.description}>
            Начинающий веб-разработчик. Владею навыками проектирования
            интерфейсов, вёрстки и работы с backend.
          </p>
        </div>
      </article>
      <article className={styles.project}>
        <div className={styles.project__top}>
          <div className={styles.project__topLeft}>
            <img className={styles.img} src={projectImg} />
          </div>
          <div className={styles.project__topRight}>
            <p className={styles.projectType}>сайт-визитка</p>
          </div>
        </div>
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
