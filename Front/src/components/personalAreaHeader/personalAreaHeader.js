import React, { useState } from "react";
import { AccountInfo } from "./accountInfo/accountInfo";
import { HeaderButton } from "./headerButton/headerButton";
import "./personalAreaHeader.css";

export function PersonalAreaHeader(props) {

  const [active, setActive] = useState(1);

  return (
    <div className={"personal-area-header__wrapper"}>
      <div>
        <AccountInfo src={"https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg"} name={"Misha"}/>
        <HeaderButton active={active === 1 ? "active" : null} setPage={props.setPage} setActive={setActive} text={"Прогресс"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7dT9_3bq4xn-7p_0tDaLl9SJR2AMnnIW4g&usqp=CAU"}/>
        <HeaderButton active={active === 2 ? "active" : null} setPage={props.setPage} setActive={setActive} text={"Мои курсы"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7dT9_3bq4xn-7p_0tDaLl9SJR2AMnnIW4g&usqp=CAU"}/>
        <HeaderButton active={active === 3 ? "active" : null} setPage={props.setPage} setActive={setActive} text={"Задания"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7dT9_3bq4xn-7p_0tDaLl9SJR2AMnnIW4g&usqp=CAU"}/>
      </div>
      <div className={"personal-area-header__footer"}>
        <HeaderButton active={null} setActive={setActive} text={"Настройки профиля"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7dT9_3bq4xn-7p_0tDaLl9SJR2AMnnIW4g&usqp=CAU"}/>
        <HeaderButton active={null} setActive={setActive} text={"Выйти"} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi7dT9_3bq4xn-7p_0tDaLl9SJR2AMnnIW4g&usqp=CAU"}/>
      </div>
    </div>
  );
}
