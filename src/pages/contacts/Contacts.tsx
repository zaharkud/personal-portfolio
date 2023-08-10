import styles from "./contacts.module.scss";
import githubIcon from "assets/img/social/github.svg";
import telegramIcon from "assets/img/social/telegram.svg";

export default function Contacts() {
  return (
    <section className={styles.container}>
      <p className={styles.description}>
        Давайте вместе сделаем что-нибудь интересное ^-^
      </p>
      <a className={styles.email} href="email:zaharkud162@gmail.com">
        zaharkud162@gmail.com
      </a>
      <a className={styles.textMeBtn}>
        написать<span></span>
      </a>
      <div className={styles.social}>
        <p className={styles.social__item}>
          <a href="#">@Keere</a> в telegram
        </p>
        <p className={styles.social__item}>
          <a href="#">@zaharkud</a> на github
        </p>
      </div>
    </section>
  );
}
