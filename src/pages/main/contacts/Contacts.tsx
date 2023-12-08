import styles from "./contacts.module.scss";
import githubIcon from "assets/img/social/github.svg";
import telegramIcon from "assets/img/social/telegram.svg";

export default function Contacts() {
  return (
    <section className={styles.container}>
      <p className={styles.description}>
        Давайте вместе сделаем что-нибудь интересное. Просто напишите мне ^-^
      </p>
      <a className={styles.email} href="mailto:zaharkud162@gmail.com">
        zaharkud162@gmail.com
      </a>

      <div className={styles.social}>
        <p className={styles.social__item}>
          <a href="https://t.me/zarkydd" target="_blank" rel="noreferrer">
            @zarkydd
          </a>
          в telegram
        </p>
        <p className={styles.social__item}>
          <a
            href="https://github.com/zaharkud"
            target="_blank"
            rel="noreferrer"
          >
            @zaharkud
          </a>
          на github
        </p>
      </div>
      <a
        href="https://t.me/zarkydd"
        className={styles.btnRight}
        target="_blank"
        rel="noreferrer"
      >
        написать<span></span>
      </a>
    </section>
  );
}
