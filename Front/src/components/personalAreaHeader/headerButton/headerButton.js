import "./headerButton.css";

function ActiveButton (text) {
  switch (text){
    case 'Прогресс': return 1
      break;
    case 'Мои курсы': return 2
      break;
    case 'Задания': return 3
      break;
  }
}

export function HeaderButton(props) {
  return (
    <button className={!props.active ? "header-button__wrapper" : "header-button__wrapper active"} onClick={() => {props.setActive(ActiveButton(props.text)); props.setPage(props.text)}}>
      <img className={"header-button__image"} src={props.src} />
      <div className={"header-button__text"}>
        {props.text}
      </div>
    </button>
  );
}
