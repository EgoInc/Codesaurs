import React from 'react';
import './header.scss'
const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header__navbar">
                    <img src="/Users/ilaceban/Documents/GitHub/Codesaurs/Front/src/assets/images/Icon code.png" alt="" className="header__logo" onClick={() => window.location.href = '/'}/>
                    <a href="" className="header-link">Все курсы</a>
                    <a href="/filter" className="header-link" >Поиск</a>
                    <a href="/main" className="header-link">О нас</a>
                </div>
                <div className="header__login-btn">
                    <button className="header__btn" onClick={() => window.location.href = '/login'}>Войти</button>
                </div>
            </div>
        </header>
    );
};

export default Header;