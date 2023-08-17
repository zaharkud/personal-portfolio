import styles from "app.module.scss";

import Project_01 from "pages/project_01/Project_01";
import Main from "pages/main/Main";
import { useRef, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "components/Sidebar";

function App() {
  const sidebar = useRef<HTMLElement>(null);

  const aboutSection = useRef<any>(null);
  const skillsSection = useRef<any>(null);
  const projectsSection = useRef<any>(null);
  const contactsSection = useRef<any>(null);

  const [pageOffset, setPageOffset] = useState<number>();

  //данные state`a со ссылок с других
  let linkData = useLocation();

  //создаем отступ сверху у контента такой же, как у сайдбара
  //отступ сайдбара изменяется автоматически в зависимости от высоты экрана
  useEffect(() => {
    setPageOffset(sidebar.current?.getBoundingClientRect().top);
  }, [sidebar]);

  //вешаем обработчик перехода к нужному раздела основной страницы с другой страницы
  //! РЕШИТЬ ПРОБЛЕМУ С ЧАСТЫМ ОБНОВЛЕНИЕМ
  useEffect(() => {
    if (!linkData.state) {
      linkData.state = { scrollTo: aboutSection };
    }
    if (linkData.pathname == "/") {
      handleMenuClick(linkData.state.scrollTo);
    }
  }, [linkData]);

  //! РЕШИТЬ ПРОБЛЕМУ С SWITCH-CASE
  //плавный переход у нужному разделу основной страницы
  function handleMenuClick(section: any): void {
    switch (section) {
      case "aboutSection":
        section = aboutSection;
        break;
      case "skillsSection":
        section = skillsSection;
        break;
      case "projectsSection":
        section = projectsSection;
        break;
      case "contactsSection":
        section = contactsSection;
        break;
      default:
        break;
    }

    section.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }

  //TODO: Перенести сайдбар в отдельный элемент
  //TODO: Залить первый проект
  //TODO: Эксперимент со шрифтом описания
  //TODO: Добавить ссылки
  //TODO: Записать навыки

  //TODO: Адаптив

  return (
    <>
      <div className="App">
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div className={styles.content}>
              <section className={styles.sidebar} ref={sidebar}>
                <Sidebar
                  handleMenuClick={handleMenuClick}
                  aboutSection={aboutSection}
                  skillsSection={skillsSection}
                  projectsSection={projectsSection}
                  contactsSection={contactsSection}
                />
              </section>

              <section
                className={styles.activeContent}
                style={{ marginTop: pageOffset }}
              >
                <Routes>
                  <Route
                    path="/"
                    element={
                      <Main
                        aboutSection={aboutSection}
                        skillsSection={skillsSection}
                        projectsSection={projectsSection}
                        contactsSection={contactsSection}
                      />
                    }
                  />
                  <Route path="/project_01" element={<Project_01 />} />
                  <Route
                    path="*"
                    element={
                      <Main
                        aboutSection={aboutSection}
                        skillsSection={skillsSection}
                        projectsSection={projectsSection}
                        contactsSection={contactsSection}
                      />
                    }
                  />
                </Routes>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
