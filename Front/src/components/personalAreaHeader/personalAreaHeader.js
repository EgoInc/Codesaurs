import React, { useState } from "react";
import { AccountInfo } from "./accountInfo/accountInfo";
import { HeaderButton } from "./headerButton/headerButton";
import "./personalAreaHeader.css";
import CourseImage from "../../assets/images/hat-icon.jpg";
import TasksImage from "../../assets/images/two-icon.jpg";
import ProgressImage from "../../assets/images/sign.jpg";
import ExitImage from "../../assets/images/exit.png";
import SettingsImage from "../../assets/images/settings.png";

export function PersonalAreaHeader(props) {

  const [active, setActive] = useState(1);

  return (
    <div className={"personal-area-header__wrapper"}>
      <div>
        <AccountInfo active={active === 4 ? "active" : null} setPage={props.setPage} setActive={setActive} src={"https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg"} name={"Misha"}/>
        <HeaderButton active={active === 1 ? "active" : null} setPage={props.setPage} setActive={setActive} text={"Прогресс"} src={ProgressImage}/>
        <HeaderButton active={active === 2 ? "active" : null} setPage={props.setPage} setActive={setActive} text={"Мои курсы"} src={CourseImage}/>
        <HeaderButton active={active === 3 ? "active" : null} setPage={props.setPage} setActive={setActive} text={"Задания"} src={TasksImage}/>
      </div>
      <div className={"personal-area-header__footer"}>
        <HeaderButton active={false} setActive={setActive} setPage={props.setPage} text={"Настройки профиля"} src={SettingsImage}/>
        <HeaderButton active={false} setActive={setActive} setPage={props.setPage} text={"Выйти"} src={ExitImage}/>
      </div>
    </div>
  // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7dT9_3bq4xn-7p_0tDaLl9SJR2AMnnIW4g&usqp=CAU"
  );
}
