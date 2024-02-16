import React, { useState } from 'react';
import { AiFillEye } from "react-icons/ai";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPasswordVisible, setPasswordVisible] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleTogglePasswordVisibility = () => {
        setPasswordVisible(!isPasswordVisible);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;
        const lengthCheck = password.length >= 8;

        if (!uppercaseRegex.test(password)) {
            alert("Пароль должен содержать хотя бы одну заглавную букву");
            return;
        }

        if (!lowercaseRegex.test(password)) {
            alert("Пароль должен содержать хотя бы одну строчную букву");
            return;
        }

        if (!lengthCheck) {
            alert("Пароль должен быть не менее 8 символов");
            return;
        }

        console.log("Form submitted!");
    }

    return (
        <div className="form">
            <div className="codezavry">Кодозавры</div>
            <form onSubmit={handleSubmit}>
                <div className="polya">
                    <div className="reg">
                        <h1>Вход</h1>
                    </div>
                    <div className="email">
                        <div className={"textEmail"}>Адрес электронной почты</div>
                        <input
                            className={"mainEmail"}
                            value={email}
                            onChange={handleEmailChange}
                            type="text"
                            placeholder="Введите адрес электронной почты"
                        />
                    </div>
                    <div className="password">
                        <div className={"textPassword"}>Пароль</div>
                        <div className="passwordInput">
                            <input
                                className={"mainPassword"}
                                value={password}
                                onChange={handlePasswordChange}
                                type={isPasswordVisible ? "text" : "password"}
                                placeholder="Введите пароль"
                            />
                            <AiFillEye
                                className={"showPasswordIcon"}
                                onClick={handleTogglePasswordVisibility}
                            />
                        </div>
                    </div>
                    <button className={"entrance"} type="submit">Войти</button>
                    <div className="passwordForgot">
                        <button className="forgotPasswordButton" type="button">Забыли пароль?</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
