import React from 'react';
import Lesson from './Lesson';
import './styles.css';

function CourseProgress({ lessons }) {
    return (
        <div className="courseProgress">
            {lessons.map(lesson => (
                <Lesson key={lesson.id} {...lesson} />
            ))}
        </div>
    );
}

export default CourseProgress;