import styles from "./about.module.scss";

export default function About() {
  return (
    <section className={styles.container}>
      <div className={styles.avatar}>
        <div className={styles.avatar__img}></div>
      </div>
      <div className={styles.text}>
        <p>
          Привет, я Захар! Занимаюсь Frontend разработкой и создаю приложения на
          React. Кроме этого, делаю несложные проекты на Node JS и, хотя не
          дизайнер, нарисовать и составить что-нибудь симпатичное в Figma или
          Photoshop смогу :)
        </p>
        <p>Ниже есть некоторые из моих работ. Буду рад новым предложениям!</p>
      </div>
    </section>
  );
}
