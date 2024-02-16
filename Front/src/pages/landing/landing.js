// landing page
import React from "react";
import { Carousel } from "./carousel";
import  Footer from "../../components/Footer.jsx";
import  Header from "../../components/Header.jsx";
// css styles
import "./landing.css";
// imported items
import {useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import ReactDOM from 'react-dom';

// код своей страницы старайтесь делить на отдельные компоненты, для этого можете в своей папке создать соответствующие файлы и затем импротировать в основной файл вашей страницы


const ExpandHeader = ({ mainTitle, subItems }) => {
  const [isExpanded, setExpanded] = useState(false);
  const [subItemsExpanded, setSubItemsExpanded] = useState(Array(subItems.length).fill(false));

  const toggleSubItem = (index) => {
      const newSubItemsExpanded = [...subItemsExpanded];
      newSubItemsExpanded[index] = !newSubItemsExpanded[index];
      setSubItemsExpanded(newSubItemsExpanded);
  };

  return (
      <div>
          <h2 onClick={() => setExpanded(!isExpanded)}>{mainTitle}</h2>
          {isExpanded && (
              <div>
                  {subItems.map((item, index) => (
                      <div key={index}>
                          <h3 className={'subTitle' + index} onClick={() => toggleSubItem(index)}>{item.title}</h3>
                          {subItemsExpanded[index] && <p>{item.text}</p>}
                      </div>
                  ))}
              </div>
          )}
      </div>
  );
};

const ExpandableHeader = () => {
  const [expanded, setExpanded] = useState(false);

  return (
      <div className={"header " + (expanded ? 'expand' : '')} onClick={() => setExpanded(!expanded)}>
          <h1>Начни учиться уже сегодня</h1>
          {expanded && (
              <div className="steps">
                  <div className="step yellow">
                      <img src="/assets/images/step1" alt="Step 1" />
                      <p style={{ color: '#ffeeaa'}}>Шаг 1</p>
                      <p style={{ color: 'white', fontSize: '18px' , marginRight: "10px" }}>Подбери свой курс</p>
                  </div>
                  <div className="step green">
                      <img src="/assets/images/step2.png" alt="Step 2" />
                      <p style={{ color: '#c3f2cb'}}>Шаг 2</p>
                      <p style={{ color: 'white' , fontSize: '18px',marginRight: "10px" }}>Выполняем задания</p>
                  </div>
                  <div className="step blue">
                      <img src="/assets/images/step3.png" alt="Step 3" />
                      <p style={{ color: '#c7c7f1'}}>Шаг 3</p>
                      <p style={{ color: 'white', fontSize: '18px', marginRight: "10px"  }}>Становись магистром <br/> программирования</p>
                  </div>
              </div>
          )}
      </div>
  );
};


const LandingPage = () => {
  const mainTitle = 'Часто задаваемые вопросы';
    const subItems = [
        { title: 'Что такое бесплатный вводный урок?', text: 'За 50 минут вы узнаете как проходит обучение, сможете задать вопросы , узнаете интересы вашего ребенка, познакомитесь с платформой и практикой обучения, увидите, как ваш ребенок сделает первый проект. Подберем перспективное направление по интересам ребенка, посмотрите программу обучения и материалы' },
        { title: 'Как проходят уроки по программированию?', text: 'Один урок длится 50 минут: занятие включает в себя три важных шага обучения: теория от учителя, консультация и ответы на вопросы, самостоятельная работа.\n \n Во время урока у ребенка есть время на создание своей игры или проекта. Так он быстрее научится самостоятельно искать и исправлять ошибки. \n \n Наши исследования показывают, что для изучения программирования нужно уделять больше времени практике, поэтому подобный метод - наиболее эффективный.' },
        { title: 'Что потребуется для занятий?', text: 'Ученику потребуется ПК или ноутбук с надежным интернетом - это все. На первом уроке преподаватель поможет поможет установить все нужные программы - они бесплатные.' },
        { title: 'По какому расписанию проходят уроки?', text: 'Вы сами составляете графикю Если потребуется, сможете менять расписание и переносить урокию занятия на курсах программирования для детей проходят онлайн, поэтому можно учиться откуда угодно: из Москвы, Санкт-Петербурга, Казани и любого другого города. Единственное условие - компьютер с быстрым интернтом под рукой.' }
    ];
  return (
    <section className="box">
        <section className="banner">
          <button>ПОДОБРАТЬ КУРС</button>
        </section>
          <hr class="hr-line"></hr>
          <h1>Найди себя</h1>
          <hr class="hr-line"></hr>
          <Carousel/>
            <ul>
              <li>
                <div className="container">
                  <ExpandableHeader/>
                </div>
                <div>
                  <ExpandHeader mainTitle={mainTitle} subItems={subItems}/>
                </div>
              </li>
            </ul>
            <footer>
                <Footer/>
            </footer>
    </section>

    
  );
};

export { LandingPage };
