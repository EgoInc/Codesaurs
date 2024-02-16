import { connectProps } from "@devexpress/dx-react-core";
import React from 'react';
import CourseProgress from '../../components/personalLessons/CourseProgress';
import lessonsData from '../../components/personalLessons/lessonsData';
import CourseBanner from "../../components/personalLessons/CourseBanner";
import CourseInfo from "../../components/personalLessons/CourseInfo";


const CourseComponents = (props) => {
    return (
        <div className="course-container">
            <CourseBanner />
            <CourseInfo />
            <CourseProgress setPage={props.setPage} lessons={lessonsData} />
        </div>
    );
}


export default CourseComponents;
