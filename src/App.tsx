import React from "react";
import logo from "./logo.svg";
import styles from "app.module.scss";
import About from "pages/about/About";
import Skills from "pages/skills/Skills";
import Projects from "pages/projects/Projects";
import Contacts from "pages/contacts/Contacts";
import { useRef, useEffect, useState } from "react";

function App() {
  const sidebar = useRef<HTMLElement>(null);
  const [pageOffset, setPageOffset] = useState<number>();

  useEffect(() => {
    setPageOffset(sidebar.current?.getBoundingClientRect().top);
  }, [sidebar]);

  return (
    <div className="App">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.content}>
            <section className={styles.sidebar} ref={sidebar}>
              <section className={styles.info}>
                <div className={styles.logo}></div>
                <h2 className={styles.title}>Junior Frontend Developer</h2>
                <p className={styles.description}>
                  Начинающий веб-разработчик. Владею навыками проектирования
                  интерфейсов, вёрстки и работы с backend.
                </p>
              </section>
              <nav>
                <ul className={styles.menu}>
                  <li>
                    <a>Обо мне</a>
                  </li>
                  <li>
                    <a>Навыки</a>
                  </li>
                  <li>
                    <a>Проекты</a>
                  </li>
                  <li>
                    <a>Контакты</a>
                  </li>
                </ul>
              </nav>
            </section>
            <section className={styles.page} style={{ marginTop: pageOffset }}>
              <About />
              <h2 className={styles.page__title}>Навыки & технологии</h2>
              <Skills />
              <h2 className={styles.page__title}>Портфолио</h2>
              <Projects />
              <h2 className={styles.page__title}>Контакты</h2>
              <Contacts />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
