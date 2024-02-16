import "./accountInfo.css";

export function AccountInfo(props) {
  return (
    <div className={"account-info__wrapper"}>
      <img className={"account-info__image"} src={props.src} />
      <div className={"account-info__name"}>
        {props.name}
      </div>
    </div>
  );
}
