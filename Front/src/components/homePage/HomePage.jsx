import React from 'react';
import Header from "../header/Header";
import {LandingPage} from "./landing";
import Footer from "../footer/Footer";
import {Carousel} from "./carousel";

const HomePage = () => {
    return (
        <>

        <section className="box">
            <Header/>
            <section className="banner">
                <button className='banner-btn' onClick={() => window.location.href = '/filter'}>ПОДОБРАТЬ КУРС</button>
            </section>
            <hr className="hr-line"></hr>
            <h1>Найди себя</h1>
            <hr className="hr-line"></hr>
            <Carousel/>
            <ul>
                <li>
                    <div className="container">
                    </div>
                    <div>
                    </div>
                </li>
            </ul>
            <Footer/>
        </section>

        </>
    );
};

export default HomePage;