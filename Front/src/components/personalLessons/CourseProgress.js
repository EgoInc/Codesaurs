import React from 'react';
import Lesson from './Lesson';
import './styles.css';

function CourseProgress(props) {
    return (
        <div className="courseProgress">
            {props.lessons.map(lesson => (
                <Lesson setPage={props.setPage} key={lesson.id} {...lesson} />
            ))}
        </div>
    );
}

export default CourseProgress;
