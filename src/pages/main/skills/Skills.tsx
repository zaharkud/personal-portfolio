import styles from "./skills.module.scss";

export default function Skills() {
  return (
    <section className={styles.container}>
      <article className={styles.category}>
        <h3 className={styles.title}>Языки и технологии</h3>
        <ul className={styles.list}>
          <li>Vue / Nuxt</li>
          <li>JavaScript</li>
          <li>HTML</li>
          <li>CSS / Sass</li>
        </ul>
      </article>
      <article className={styles.category}>
        <h3 className={styles.title}>Опыт работы</h3>
        <ul className={styles.list}>
          <li>React</li>
          <li>Python</li>
          <li>VPS / Ubuntu</li>
          <li>GIT</li>
        </ul>
      </article>
      <article className={styles.category}>
        <h3 className={styles.title}>Программы</h3>
        <ul className={styles.list}>
          <li>VS Code</li>
          <li>Figma</li>
          <li>Adobe Photoshop</li>
        </ul>
      </article>
    </section>
  );
}
