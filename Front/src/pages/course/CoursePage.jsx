import React from 'react';
import './coursePage.scss'
import {useBlocker} from "react-router-dom";

const CoursePage = () => {
    const course = {
        name: "Web-разработка" ,
        short_description: "HTML, CSS, JavaScript",
        description: "Этот курс предназначен для того, чтобы обучить вас основам веб-разработки. Вы изучите HTML, CSS и JavaScript для создания интерактивного и адаптивного веб-сайта. Независимо от того, являетесь ли вы новичком или имеете некоторый опыт программирования, этот курс поможет вам развить навыки, необходимые для создания профессиональных веб-сайтов.",
        image: "https://lastresw.es/wp-content/uploads/2020/04/servicio-web.jpg",
        price: 9999,
        duration: 30,
        level: 0,
        language: "RUS",
        chips: ["Идеально для новичков", "Видео лекции + практические занятия", "Можно изучать в своем темпе"],
        program: ""
    }
    return (
       <section className="course">
           <div className="course__info">
               <div className="course__image"></div>
               <div className="course__info-text">
                   <header className="course__header"></header>
                   <div className="course__sub-header">

                   </div>

               </div>
           </div>
           <div className="course__description"></div>
           <div className="course__about"></div>
       </section>
    );
};

export default CoursePage;