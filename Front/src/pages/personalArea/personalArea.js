import { useState } from "react";
import { PersonalAreaHeader } from "../../components/personalAreaHeader/personalAreaHeader";
import { PersonalAreaProgress } from "../../components/personalAreaProgress/personalAreaProgress";
import "./personalArea.css";
import Task from "../majanebpart/task";

export function PersonalArea(props) {

  const [page, setPage] = useState("прогресс");

  return (
    <div className={"personal-area__wrapper"}>
      <PersonalAreaHeader page={page} setPage={setPage}/>
      {page === "Прогресс" && <PersonalAreaProgress/>}
      {page === "Задания" && <Task/>}
    </div>
  );
}
