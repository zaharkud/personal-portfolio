import styles from "./projectCard.module.scss";

interface IProjectPromoTypes {
  projectImg: string;
  projectType: string;
}

export default function ProjectCard({
  projectImg,
  projectType,
}: IProjectPromoTypes) {
  const projectLink = `https://${projectType}`;

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCard__img}>
        <img src={projectImg} alt="Скриншот сайта проекта"/>
      </div>
      <div className={styles.projectCard__description}>
        <a href={projectLink}>{projectType}</a>
      </div>
    </div>
  );
}
