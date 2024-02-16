import React, { useState } from "react";
import upload from "../../assets/images/upload.png";
import "../../pages/tasksPage/task.css";

const Solution = () => {
    const [text, setText] = useState("");

    const handleImageClick = () => {
        document.getElementById("fileInput").click();
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        console.log("Загружен файл:", file.name);
    };

    const handleInputChange = (event) => {
        setText(event.target.value);
    };

    const handleFocus = (event) => {
        if (event.target.textContent === "Введите решение") {
            event.target.textContent = "";
        }
    };

    const handleBlur = (event) => {
        if (event.target.textContent === "") {
            event.target.textContent = "Введите решение";
        }
    };

    return (
        <div className="solution">
            <div
                className="sol"
                contentEditable="true"
                onChange={handleInputChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            >
                {text || "Введите свое решение"}
            </div>
            <button className="done" onClick={handleImageClick}>
                <div>{text || "Добавить файл"}</div>
                <img
                    src={upload}
                    alt="Прикрепить файл"
                />
            </button>
            <input
                type="file"
                id="fileInput"
                style={{ display: "none" }}
                onChange={handleFileUpload}
            />
        </div>
    );
};

export default Solution;
