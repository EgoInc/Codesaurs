import { useEffect, useState } from "react";
import AccountNew from "../../components/accountNew/accountNew";
import { PersonalAreaHeader } from "../../components/personalAreaHeader/personalAreaHeader";
import NotificationPanel from "../../components/personalAreaNotificationsPanel/NotificationsPanel";
import { PersonalAreaProgress } from "../../components/personalAreaProgress/personalAreaProgress";
import "./personalArea.css";
import CourseComponents from "../personalCoursesPage/CourseComponents";
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
      {page === "Задание" && <Task/>}
      {page === "Задания" && <CourseComponents  page={page} setPage={setPage}/>}
      {page === "Прогресс" && <NotificationPanel/>}
      {page === "Аккаунт" && <AccountNew photo={"https://png.pngtree.com/thumb_back/fw800/background/20230610/pngtree-picture-of-a-blue-bird-on-a-black-background-image_2937385.jpg"}/>}
    </div>
  );
}
