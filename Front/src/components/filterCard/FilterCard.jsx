import React from 'react';
import {Link} from 'react-router-dom'
import './filterCard.scss'
const FilterCard = ({product}) => {
    const {id, image, name, price, description, level, duration} = product;

    return (
        <div className="cards-block__item">
            <img
                src={image}
                alt="card-image"
                className="cards-block__img"
            />
            <div className="cards-block__card-content">
                <div className="cards-block__card-footer">
                    <header className="cards-block__card-header">{name}</header>
                    <div className="cards-block__card-descr">
                        <div className="cards-block__card-text">
                            {description}
                        </div>
                    </div>
                </div>
                <div className="cards-block__card-details">
                    <button className="cards-block__difficulties">{level}</button>
                    <div className="cards-block__lessons-count">{duration}</div>
                    <div className="cards-block__card-price">{price} $</div>
                    <div className="cards-block__card-btn">
                        <button className="" ><a href='/course' >Подробнее</a></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterCard;