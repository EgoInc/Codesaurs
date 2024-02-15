import React from 'react';
import './App.css'; // Убедитесь, что стили подключены правильно
import CourseHeader from './components/personalLessons/CourseHeader'; // Новый компонент заголовка курса
import CourseProgress from './components/personalLessons/CourseProgress';
import lessonsData from './components/personalLessons/lessonsData'; // Предполагается, что данные уроков в этом файле

const App = () => {
    return (
        <div className="container">
            <CourseHeader />
            <CourseProgress lessons={lessonsData} />
        </div>
    );
}

export default App;
