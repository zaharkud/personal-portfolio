import styles from "./about.module.scss";

export default function About() {
  return (
    <section className={styles.container}>
      <div className={styles.avatar}>
        <div className={styles.avatar__img}></div>
      </div>
      <div className={styles.text}>
        <p>
          Привет, я Захар! Занимаюсь frontend-разработкой и создаю приложения на
          Vue. И, хотя не дизайнер, нарисовать и собрать симпатичный дизайн в
          Figma или Photoshop смогу :)
        </p>
        <p>Ниже есть некоторые из моих работ. Буду рад новым предложениям!</p>
      </div>
    </section>
  );
}
