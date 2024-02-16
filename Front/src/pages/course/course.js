import React from "react"
import "./course.css"
import { Header } from "./header.js"
import { Footer } from "./footer.js"
import Data from "./course.json"

const CoursePage = () => {
  return (
    <>
      <Header />
      <div class="course">
        <img src={Data.image} />
        <div class="course-info">
          <div>
            <h1>{Data.name}</h1>
            <h3>{Data.short_description}</h3>
          </div>
          <p>{Data.description}</p>
          <div class="flex">
            <div class="border">{Data.chips.map(i => <p>{i}</p>)}</div>
            <b class="big-text">{Data.price} руб.</b>
          </div>
          <div class="flex" style={{marginTop: "1rem"}}>
            <b>Длительность: {Data.duration} уроков</b>
            <button class="course-button">Записаться на курс</button>
          </div>
        </div>
      </div>
      <h1>Как проходит обучение</h1>
      <div class="stages">
        <div class="stage">
          <h2>1. Теория</h2>
          <p>Изучение теории, подготовленной нашими преподавателями. Теория представляет собой красочные конспекты с примерами и подробным объяснением</p>
        </div>
        <div class="stage">
          <h2>2. Практика</h2>
          <p>Решение практических заданий, получение ревью-кода от опытных специалистов. Приближенный опыт к работе в реальной айти-команде</p>
        </div>
      </div>
      <h1>Создание реальных проектов</h1>
      <div class='grey-text'>В течении курса Вы создадите несколько различных проектов: от калькуляторов и одностроничных лэндингов до полноценного онлайн-магазина. И закончив обучение получите первоначальное портфолио.</div>
      <h1>Подробная программа курса</h1>
      <div class="flex">
        <button class="secondary-button">Остались вопросы по курсу?</button>
        <button class="main-button">Записаться на курс</button>
      </div>
      <Footer />
    </>
  )
}

export { CoursePage }