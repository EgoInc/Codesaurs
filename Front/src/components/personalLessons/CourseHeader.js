import React from 'react';
import CourseImage from '../../assets/images/test.png';

const CourseHeader = () => {
    const progress = 20;

    return (
        <div className="courseHeaderWrapper">
            <div className="courseHeaderTopText">Web разработка</div>
            <div className="courseHeader">
                <img src={CourseImage} alt="Course" className="courseHeaderImage" />
                <div className="courseHeaderText">
                    <div className="courseHeader_Text">Web разработка</div>
                    <div className={"personal-area-course__progress-wrapper"}>
                        <progress className={"personal-area-course__progressbar"} value={2}
                                  max={10}></progress>
                        <div>{`Пройдено ${2} / 10`}</div>
                    </div>
                    <p>Сдано заданий 2/10</p>
                    <p>Доступ к экзамену закрыт</p>
                </div>
            </div>
        </div>
    );
}

export default CourseHeader;

