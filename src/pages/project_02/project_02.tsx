import styles from "styles/projectCommon.module.scss";
import projectImgMockup from "assets/img/projects/project__02-01.webp";
import projectImgSnapshot_01 from "assets/img/projects/project__01-02.webp";
import ProjectCard from "components/ProjectCard/ProjectCard";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Project_02() {
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
          <p className={styles.projectInfo}>02 / 2023</p>
        </div>
        <ProjectCard
          projectImg={projectImgMockup}
          projectType="arlezu.ru"
        />
        <div className={styles.project__bottom}>
          <div className={styles.project__content}>
            <div className={styles.techStack}>
              <article className={styles.techStack__item}>React</article>
              <article className={styles.techStack__item}>SCSS</article>
              <article className={styles.techStack__item}>TypeScript</article>
            </div>
            <p className={styles.description}>
              Сайт-визитка для строительной бригады в городе Углич.
            </p>
            <p className={styles.description}>
              Разработан дизайн сайта, логотип и айдентика. Сайт написан на
              HTML, CSS и JavaScript без использования сторонних библиотек.
            </p>
            <img className={styles.contentImg} src={projectImgSnapshot_01} />
            <p className={styles.description}>
              Реализованы все необходимые разделы сайта: описание услуг,
              прайс-лист с ценами, описание организации, портфолио с проектами и
              контакты.
            </p>

            <div className={styles.social}>
              <a href="#" className={styles.web}>
                Открыть сайт
              </a>
              <a href="#" className={styles.github}>
                GitHub проекта
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}