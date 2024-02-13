import React from 'react';
import './CourseCard.scss'

const CourseCard = ({course: {id, imageUrl, title, cost, description, chips, level, length}}) => {
    return (
        <div className="card">
            <img src={imageUrl} alt="card-image" className="card__img"/>
            <div className="card__main">
                <div className="card__info">
                    <span className="card__title">{title}</span>
                    <span className="card__description">
                        {description}
                    </span>
                    <div className="card__chips">
                        {chips.map(chip => <div className={'card__chip'}>{chip}</div>)}
                    </div>
                </div>
                <div className="card__actions">
                    <button className="card__difficulties">{level}</button>
                    <div className="card__lessons-count">{length}</div>
                    <div className="card__price">${cost}</div>
                    <button className="card__btn">Подробнее</button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;