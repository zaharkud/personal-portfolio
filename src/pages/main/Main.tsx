import { useRef } from "react";

import About from "pages/about/About";
import Skills from "pages/skills/Skills";
import Projects from "pages/projects/Projects";
import Contacts from "pages/contacts/Contacts";
import styles from "app.module.scss";

interface IMainProps {
  aboutSection: any;
  skillsSection: any;
  projectsSection: any;
  contactsSection: any;
}

export default function Main({
  aboutSection,
  skillsSection,
  projectsSection,
  contactsSection,
}: IMainProps) {
  return (
    <section className={styles.page}>
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
    </section>
  );
}
