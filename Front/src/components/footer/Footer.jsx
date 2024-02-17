import React from 'react';
import './footer.scss'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer__logo">
                    <p className="footer__logo-text">На встречу</p>
                    <p className="footer__logo-text">Цифровым</p>
                    <p className="footer__logo-text">Приключениям</p>
                </div>
                <div className="footer__link-list">
                    <div className="footer__link-about">
                        <a href="" className="footer__link-item">Курсы</a>
                        <a href="" className="footer__link-item">Подпишитесь на нас</a>
                        <a href="" className="footer__link-item">Контакты</a>
                    </div>
                    <div className="footer__link-info">
                        <a href="" className="footer__link-item">Сотрудничество</a>
                        <a href="" className="footer__link-item">Поиск преподавателей</a>
                        <a href="" className="footer__link-item">Присоединяйтесь к нам</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;