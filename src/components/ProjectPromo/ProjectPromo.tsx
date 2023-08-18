import { Link } from "react-router-dom";
import styles from "./projectPromo.module.scss";

interface IProjectPromoTypes {
  projectImg: string;
  projectLink: string;
}

export default function ProjectPromo({
  projectImg,
  projectLink,
}: IProjectPromoTypes) {
  return (
    <div className={styles.projectPromo}>
      <div className={styles.projectPromo__img}>
        <Link to={projectLink}>
          <img src={projectImg} />
        </Link>
      </div>
    </div>
  );
}
