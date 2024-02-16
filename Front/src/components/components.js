// в данной папке создаем футер и хэдер и другие компоненты, которые используются на всех страницах
import '../App.css'
import {Link} from 'react-router-dom';
import React from 'react';

const Avatar = ({imageUrl}) => {
    return (
        <div className="avatar">
            <img src={imageUrl} alt="Avatar"/>
        </div>
    );
};
const username = 'Лиана Алмазова';

const UserName = ({ username }) => {
    return (

        <p>{username}</p>
    );
};
const LoginButton = () => {
    return (
        <Link to="Footer" className="red_button">Войти</Link>
    );
};

function Header() {
    const name = String();

    const AvailabilityEntrance = 0;//1 если пользователь зашел

    if (AvailabilityEntrance === 1) {
        return (

            <header>
                <h1 className="hrefki">&lt;/&gt;</h1>
                <a className="hrefki">Все курсы</a>
                <a className="hrefki">Поиск</a>
                <a className="hrefki">О нас</a>
                <Avatar imageUrl="../assets/logo.png"/>
                <p>
                    <UserName className="UserName" username={username}/>
                </p>
            </header>

        )
    } else {
        return (

            <header>
                {/*<img src={logo}  width="100" height="auto" alt="Логотип"/>*/}
                <h1 className="hrefki">&lt;/&gt;</h1>
                <a className="hrefki">Все курсы</a>
                <a className="hrefki">Поиск</a>
                <a className="hrefki">О нас</a>
                <LoginButton/>
            </header>)
    }
}





function Footer(){
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