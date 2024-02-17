import "./personalAreaCourse.css";

export function PersonalAreaCourse(props) {
  return (
    <div className={"personal-area-course__wrapper"}>
      <img className={"personal-area-course__image"} src={props.src}/>
      <div className={"personal-area-course__content"}>
        <div className={"personal-area-course__title"}>
          {props.title}
        </div>
        <div className={"personal-area-course__date"}>
          {`Начало курса: ${props.date}`}
        </div>
        <div className={"personal-area-course__progress-wrapper"}>
          <progress className={"personal-area-course__progressbar"} value={props.progress} max={props.duration}></progress>
          {/* {props.progress} */}
          <div>{`Пройдено ${props.progress}/10`}</div>
        </div>
      </div>
    </div>
  );
}
