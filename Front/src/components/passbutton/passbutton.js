import React from "react";
import "../../pages/tasksPage/task.css";

const PassButton = () => {

    const handlePassButtonClick = () => {
        console.log("Клик на passbutton");
    };

    return (
        <div className="pass">
            <button className="passbutton" onClick={handlePassButtonClick}>
                Сдать задание
            </button>
        </div>
    );
};

export default PassButton;
