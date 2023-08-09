import styles from "./projects.module.scss";
import projectImg from "assets/img/project-1.png";

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
          <h3 className={styles.title}>ARLEZU - Изучение армянского</h3>
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
          <h3 className={styles.title}>ARLEZU - Изучение армянского</h3>
          <p className={styles.description}>
            Начинающий веб-разработчик. Владею навыками проектирования
            интерфейсов, вёрстки и работы с backend.
          </p>
        </div>
      </article>
    </section>
  );
}
