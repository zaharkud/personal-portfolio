import styles from "./skills.module.scss";

export default function Skills() {
  return (
    <section className={styles.container}>
      <article className={styles.category}>
        <h3 className={styles.title}>Языки</h3>
        <ul className={styles.list}>
          <li>HTML</li>
          <li>CSS / Sass</li>
          <li>JavaScript</li>
        </ul>
      </article>
      <article className={styles.category}>
        <h3 className={styles.title}>Фреймворки и библиотеки</h3>
        <ul className={styles.list}>
          <li>React + Redux</li>
          <li>NodeJS / Express (База)</li>
        </ul>
      </article>
      <article className={styles.category}>
        <h3 className={styles.title}>Опыт работы</h3>
        <ul className={styles.list}>
          <li>GIT</li>
          <li>JEST</li>
          <li>SQL / Postgres</li>
          <li>VPS / Ubuntu</li>
        </ul>
      </article>
      <article className={styles.category}>
        <h3 className={styles.title}>Программы</h3>
        <ul className={styles.list}>
          <li>VS Code</li>
          <li>Figma</li>
          <li>PgAdmin</li>
          <li>Adobe Photoshop</li>
        </ul>
      </article>
    </section>
  );
}
