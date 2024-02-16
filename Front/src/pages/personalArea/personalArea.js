import { useEffect, useState } from "react";
import { PersonalAreaHeader } from "../../components/personalAreaHeader/personalAreaHeader";
import NotificationPanel from "../../components/personalAreaNotificationsPanel/NotificationsPanel";
import { PersonalAreaProgress } from "../../components/personalAreaProgress/personalAreaProgress";
import "./personalArea.css";
import Task from "../tasksPage/task";

export function PersonalArea(props) {

  const [page, setPage] = useState("Прогресс");

  useEffect(() => {
    setPage("Прогресс");
  }, [])

  return (
    <div className={"personal-area__wrapper"}>
      <PersonalAreaHeader page={page} setPage={setPage}/>
      {page === "Прогресс" && <PersonalAreaProgress/>}
      {page === "Задания" && <Task/>}
      {page === "Прогресс" && <NotificationPanel/>}
    </div>
  );
}
