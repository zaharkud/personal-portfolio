import styles from "./project_01.module.scss";
import projectImg from "assets/img/project-1.png";
import githubImg from "assets/img/social/github.svg";
import webImg from "assets/img/social/web.svg";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Project_01() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <section className={styles.container}>
      <article className={styles.project}>
        <div className={styles.project__menu}>
          <a onClick={goBack} className={styles.btnLeft}>
            <span></span>назад
          </a>
          <p className={styles.projectInfo}>2023</p>
        </div>
        <div className={styles.project__top}>
          <div className={styles.project__topLeft}>
            <img className={styles.img} src={projectImg} />
          </div>
          <div className={styles.project__topRight}>
            <img className={styles.img} src={projectImg} />
          </div>
        </div>
        <div className={styles.project__bottom}>
          <div className={styles.project__content}>
            <h3 className={styles.title}>ARLEZU</h3>
            <p className={styles.description}>
              Начинающий веб-разработчик. Владею навыками проектирования
              интерфейсов, вёрстки и работы с backend.
            </p>
            <p className={styles.description}>
              Начинающий веб-разработчик. Владею навыками проектирования
              интерфейсов, вёрстки и работы с backend.
            </p>
            <img className={styles.img} src={projectImg} />
            <p className={styles.description}>
              Начинающий веб-разработчик. Владею навыкам-Mи проектирования
              интерфейсов, вёрстки и работы с backend.
            </p>
            <div className={styles.techStack}>
              <article className={styles.techStack__item}>React</article>
              <article className={styles.techStack__item}>HTML</article>
              <article className={styles.techStack__item}>SASS</article>
            </div>
            <p className={styles.description}>
              Начинающий веб-разработчик. Владею навыкам-Mи проектирования
              интерфейсов, вёрстки и работы с backend.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.web}>
                Открыть сайт
              </a>
              <a href="#" className={styles.github}>
                Посетить GitHub проекта
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
