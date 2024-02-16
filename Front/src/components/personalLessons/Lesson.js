import React, { useState } from 'react';

function Lesson({ id, title, completed, description, setPage }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const titleParts = title.split('. ');
    const lessonPrefix = titleParts[0];
    const lessonTitle = titleParts.slice(1).join('. ');

    const toggleLesson = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={`lesson ${completed ? 'completed' : 'incomplete'} ${isExpanded ? 'expanded' : ''}`} onClick={toggleLesson}>
            <div className="lesson-header">
                <h3>
                    <span className="lesson-number">{lessonPrefix}.</span>
                    <span className="lesson-title">{lessonTitle}</span>
                </h3>
                {!isExpanded && (
                    <span className={`status ${completed ? 'completed' : 'incomplete'}`}>
                        {completed ? '✓' : '✗'}
                    </span>
                )}
            </div>
            {isExpanded && (
                <div className="lesson-content">
                    <p>{description}</p>
                    <div className="lesson-actions">
                        <button className="lesson-link-button">Ссылка на конспект/видео урок:</button>
                        <button className="lesson-practice-button" onClick={() => setPage("Задание")}>Практическое задание</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Lesson;

