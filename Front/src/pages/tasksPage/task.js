import React from "react";
import Solution from "../../components/solution/solution";
import PassButton from "../../components/passbutton/passbutton";
import TaskExample from "../../components/taskexample/taskexample";
import "./task.css";

const Task = () => {
    return (
      <div className={"task__wrapper"}>
        <h1 className={"personal-area-progress__title"}>Задания</h1>
        <div className={"task__content"}>
          <TaskExample />
          <div className="rightside">
            <PassButton />
            <Solution />
          </div>
        </div>
      </div>
    );
};

export default Task;
