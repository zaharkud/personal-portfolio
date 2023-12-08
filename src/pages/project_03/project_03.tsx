import styles from "styles/projectCommon.module.scss";
import projectImgMockup from "assets/img/projects/project__03-01.webp";
import projectImgSnapshot_01 from "assets/img/projects/project__03-02.webp";
import ProjectCard from "components/ProjectCard/ProjectCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Project_03() {
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
          <p className={styles.projectInfo}>03 / 2023</p>
        </div>
        <ProjectCard
          projectImg={projectImgMockup}
          projectType="kmvision.zaharkud.ru"
          projectName="kmvision"
        />
        <div className={styles.project__bottom}>
          <div className={styles.project__content}>
            <div className={styles.techStack}>
              <article className={styles.techStack__item}>React</article>
              <article className={styles.techStack__item}>TypeScript</article>
              <article className={styles.techStack__item}>SCSS</article>
            </div>
            <p className={styles.description}>
              Многостраничный сайт-визитка для организации, работающей в сфере
              систем безопасности.
            </p>
            <p className={styles.description}>
              Полностью разработан дизайн, сайт написан на React с целью
              дальнейшего расширения функционала, например, через добавление
              функций интернет-магазина.
            </p>
            <img
              className={styles.contentImg}
              src={projectImgSnapshot_01}
              alt="Страницы сайта"
            />
            <p className={styles.description}>
              Реализованы интерактивные элементы с готовыми бизнес-решениями и
              описанием используемого оборудования. Сайт продолжает
              дорабатываться.
            </p>

            <div className={styles.social}>
              <a
                href="https://kmvision.zaharkud.ru/"
                target="_blank"
                rel="noreferrer"
                className={styles.web}
              >
                Открыть сайт
              </a>
              <a
                href="https://github.com/zaharkud/kmvision/"
                target="_blank"
                rel="noreferrer"
                className={styles.github}
              >
                GitHub проекта
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
