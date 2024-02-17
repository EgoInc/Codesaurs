// landing page
import React, {useEffect} from "react";
// css styles
import "./carousel.css";
// imported items

// код своей страницы старайтесь делить на отдельные компоненты, для этого можете в своей папке создать соответствующие файлы и затем импротировать в основной файл вашей страницы

let data = {
  courses: [
    {
      name: "Web-программирование",
      short_description: "Изучите основы программирования",
      image: "https://organicthemes.com/wp-content/uploads/2019/06/builder-widgets-widget-area-block-1200x1200.jpg"
    },
    {
      name: "Web-дизайн",
      short_description: "Изучите основы программирования",
      image: "https://lastresw.es/wp-content/uploads/2020/04/servicio-web.jpg"
    },
    {
      name: "Python",
      short_description: "Изучите основы программирования",
      image: "https://www.donanimhaber.com/cache-v2/?t=20211011162903&width=-1&text=0&path=https://www.donanimhaber.com/images/images/haber/140161/src/python-en-populer-programlama-dili-oldu140161_12.jpg"
    },
    { 
      name: "C#",
      short_description: "Изучите основы программирования",
      image: "https://static10.tgstat.ru/channels/_0/7d/7d4b116c9ae63f1a2633cc4397b40aaf.jpg"
    },
    ]
}

var courses = data.courses;

// window.onload = function() {}



const Carousel = () => {

    useEffect(() => {
        const wrapper = document.querySelector(".wrapper");
        const carousel = document.querySelector(".carousel-block");
        const firstCardWidth = document.querySelector(".card");
        const arrowBtns = document.querySelectorAll(".wrapper i");
        const carouselChildrens = [...carousel?.children];



        let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

        let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
            carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
        });

        carouselChildrens.slice(0, cardPerView).forEach(card => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        arrowBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
            });
        });

        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        }

        const dragging = (e) => {
            if(!isDragging) return;
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        }

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        }

        const infiniteScroll = () => {
            if(carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
                carousel.classList.remove("no-transition");
            }
            else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }

            clearTimeout(timeoutId);
            if(!wrapper.matches(":hover")) autoPlay();
        }

        const autoPlay = () => {
            if(window.innerWidth < 800 || !isAutoPlay) return;
            timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
        }
        autoPlay();

        carousel.addEventListener("mousedown", dragStart);
        carousel.addEventListener("mousemove", dragging);
        document.addEventListener("mouseup", dragStop);
        carousel.addEventListener("scroll", infiniteScroll);
        wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
        wrapper.addEventListener("mouseleave", autoPlay);
    }, []);

  return (
    <body>
    <div className="wrapper">
      <i id="left">
        <div className="left-arrow"/>
        </i>
        <ul className="carousel-block">
          {courses.map(card => (
            <li className="card">
            <div className="img"><img src={card.image} alt="img" draggable="false"/></div>
            <h2>{card.name}</h2>
            <span>{card.short_description}</span>
          </li>
            ))}
        </ul>
      <i id="right">
        <div className="right-arrow"/>
      </i>
    </div>
  </body>
  );
};

export { Carousel };
