import React from 'react';
import '../App.css'; // Подключаем CSS для стилей
import '../assets/images/log.jpg';



export default function Footer(){
    return(
        <footer>


            <div>
                <img src='../assets/images/log.jpg' alt="</>"/>

            </div>


            <ul>

                <div className="link-container">
                    <div className="link-block">
                        <a href="#">Курсы</a>
                        <a href="#">Напишите нам</a>
                        <a href="#">Контакты</a>
                    </div>
                    <div className="link-block">
                        <a href="#">Сотрудничество</a>
                        <a href="#">Поиск докладчика</a>
                        <a href="#">Присоеденяйтесь к нам</a>
                    </div>
                </div>
            </ul>
        </footer>
    )
}
