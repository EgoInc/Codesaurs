// landing page
import React from "react";
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

window.onload = function() {
  const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];



let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);
}


const Carousel = () => {
  return (
    <body>
    <div class="wrapper">
      <i id="left">
        <div class="left-arrow"/>
        </i>
        <ul class="carousel">
          {courses.map(card => (
            <li class="card">
            <div class="img"><img src={card.image} alt="img" draggable="false"/></div>
            <h2>{card.name}</h2>
            <span>{card.short_description}</span>
          </li>
            ))}
        </ul>
      <i id="right">
        <div class="right-arrow"/>
      </i>
    </div>
  </body>
  );
};

export { Carousel };
