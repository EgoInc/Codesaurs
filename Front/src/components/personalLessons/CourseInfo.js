import React from 'react';
import CourseImage from '../../assets/images/test.png';

const CourseInfo = () => {
    return (
        <div className="courseInfoWrapper">
            <img src={CourseImage} alt="Course" className="courseHeaderImage" />
            <div className="courseHeaderText">
                <div className="courseHeader_Text">Web разработка</div>
                <div className={"course__progress-wrapper"}>
                    <progress className={"course__progressbar"} value={2} max={10}></progress>
                    <div>{`Пройдено ${2} / 10`}</div>
                </div>
                <p>Сдано заданий 2/10</p>
                <p>Доступ к экзамену закрыт</p>
            </div>
        </div>
    );
}

export default CourseInfo;
