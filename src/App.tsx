import React from "react";
import logo from "./logo.svg";
import styles from "app.module.scss";
import About from "pages/about/About";
import Skills from "pages/skills/Skills";
import Projects from "pages/projects/Projects";
import Contacts from "pages/contacts/Contacts";
import Project_01 from "pages/project_01/Project_01";
import { useRef, useEffect, useState } from "react";

function App() {
  const sidebar = useRef<HTMLElement>(null);

  const aboutSection = useRef<HTMLHeadingElement>(null);
  const skillsSection = useRef<HTMLHeadingElement>(null);
  const projectsSection = useRef<HTMLHeadingElement>(null);
  const contactsSection = useRef<HTMLHeadingElement>(null);

  const [pageOffset, setPageOffset] = useState<number>();

  useEffect(() => {
    setPageOffset(sidebar.current?.getBoundingClientRect().top);
  }, [sidebar]);

  function handleMenuClick(section: any): void {
    section.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  }

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
                    <a onClick={() => handleMenuClick(aboutSection)}>Обо мне</a>
                  </li>
                  <li>
                    <a onClick={() => handleMenuClick(skillsSection)}>Навыки</a>
                  </li>
                  <li>
                    <a onClick={() => handleMenuClick(projectsSection)}>
                      Проекты
                    </a>
                  </li>
                  <li>
                    <a onClick={() => handleMenuClick(contactsSection)}>
                      Контакты
                    </a>
                  </li>
                </ul>
              </nav>
            </section>
            <section className={styles.page} style={{ marginTop: pageOffset }}>
              <h2 ref={aboutSection} style={{ fontSize: 0 }}></h2>
              <About />
              <h2 className={styles.page__title} ref={skillsSection}>
                Навыки & технологии
              </h2>
              <Skills />
              <h2 className={styles.page__title} ref={projectsSection}>
                Портфолио
              </h2>
              <Projects />
              <h2 className={styles.page__title} ref={contactsSection}>
                Контакты
              </h2>
              <Contacts />
              <h2 ref={contactsSection} style={{ fontSize: 0 }}></h2>
              <Project_01 />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
