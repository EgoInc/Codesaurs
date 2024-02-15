// landing page
import React from "react";
import { Carousel } from "D:/Codesaurs/Front/src/pages/landing/carousel";
// css styles
import "./landing.css";
// imported items
import background from "D:/Codesaurs/Front/src/assets/images/background.png";

// код своей страницы старайтесь делить на отдельные компоненты, для этого можете в своей папке создать соответствующие файлы и затем импротировать в основной файл вашей страницы

const LandingPage = () => {
  return (
    <section className="container">
        <section className="banner">
          <button>ПОДОБРАТЬ КУРС</button>
          </section>
          <hr class="hr-line"></hr>
          <h1>Найди себя</h1>
          <hr class="hr-line"></hr>
          <Carousel/>
    </section>
  );
};

export { LandingPage };
