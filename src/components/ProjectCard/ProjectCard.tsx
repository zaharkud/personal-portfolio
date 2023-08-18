import styles from "./projectCard.module.scss";

interface IProjectPromoTypes {
  projectImg: string;
  projectType: string;
}

export default function ProjectCard({
  projectImg,
  projectType,
}: IProjectPromoTypes) {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectCard__img}>
        <img src={projectImg} />
      </div>
      <div className={styles.projectCard__description}>
        <a href={projectType}>{projectType}</a>
      </div>
    </div>
  );
}
