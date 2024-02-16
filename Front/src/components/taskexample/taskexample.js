import React from "react";
import "../../pages/tasksPage/task.css";
import TestImage from "../../assets/images/logo.png"

const TaskExample = () => {
    return (
        <div className="task_example">
          <h2 className={"taskname"}>Задание 1. Моя первая задача</h2>
            <div className="disk">
                Описание задачи.
            </div>
          <img src={TestImage} className={"task-example__image"}/>
        </div>
    );
};

export default TaskExample;
