import React, { useState } from "react";
import "./accountNew.css";
import { BsFillPencilFill } from "react-icons/bs";

export function AccountNew(props) {
    // Состояние для хранения выбранного файла
    const [selectedFile, setSelectedFile] = useState(null);

    // Обработчик изменения файла
    const handleFileInputChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Сохраняем выбранный файл в состоянии
            setSelectedFile(file);

            // Создаем объект URL для предварительного просмотра изображения
            const imageURL = URL.createObjectURL(file);

            // Обновляем изображение профиля
            const profileImage = document.getElementById("profileImage");
            if (profileImage) {
                profileImage.src = imageURL;
            }
        }
    };

    // Обработчик клика на кнопку "Изменить фото"
    const handleEditPhotoClick = () => {
        const fileInput = document.getElementById('fileInput');
        if (fileInput) {
            fileInput.click();
        }
    };

    return (
        <div className={"form-wrapper"}>
            <div className={"codezavry"}>Редактирование профиля</div>
            <div className={"form"}>
                <form>
                    <div className={"polya"}>
                        <div className={"nameFields"}>
                            <div className={"personal-area-progress__field label-group"}>
                                <label htmlFor="firstName">Имя</label>
                                <input type="text" id="firstName" name="firstName" className={"mainEmail"} />
                            </div>
                            <div className={"personal-area-progress__field label-group"}>
                                <label htmlFor="lastName">Фамилия</label>
                                <input type="text" id="lastName" name="lastName" className={"mainEmail"} />
                            </div>
                        </div>
                        <div className={"personal-area-progress__field"}>
                            <label htmlFor="birthdate">Дата рождения</label>
                            <input type="date" id="birthdate" name="birthdate" className={"main"} />
                        </div>
                        <div className={"personal-area-progress__field"}>
                            <label htmlFor="phone">Телефон</label>
                            <input type="tel" id="phone" name="phone" className={"main"} />
                        </div>
                        <div className={"personal-area-progress__field"}>
                            <label htmlFor="email">Электронная почта</label>
                            <input type="email" id="email" name="email" className={"main"} />
                        </div>
                        <div className={"personal-area-progress__field"}>
                            <label htmlFor="fullname">ФИО родителя</label>
                            <input type="text" id="fullname" name="fullname" className={"main"} />
                        </div>
                        <div className={"personal-area-progress__field"}>
                            <label htmlFor="additionalPhone">Контакты родителей</label>
                            <input type="tel" id="additionalPhone" name="additionalPhone" className={"main"} />
                        </div>
                        <div className={"personal-area-progress__field"}>
                            <button type="submit" className={"confirmButton"}>Подтвердить</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className={"photo-block"}>

                <input type="file" id="fileInput" accept="image/*" style={{ display: 'none' }} onChange={handleFileInputChange} />


                <div className={"photo"}>
                    <img id="profileImage" src={selectedFile ? URL.createObjectURL(selectedFile) : props.photo} alt="Фотография профиля" className={"profile-photo"} />
                </div>

                <button className={"change-photo-button"} onClick={handleEditPhotoClick}><BsFillPencilFill /> </button>
            </div>
        </div>
    );
}

export default AccountNew;
