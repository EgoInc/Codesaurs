import "./accountInfo.css";

export function AccountInfo(props) {
  return (
    <button className={!props.active ? "account-info__wrapper" : "account-info__wrapper active"} onClick={() => {props.setPage("Аккаунт"); props.setActive(4)}}>
      <img className={"account-info__image"} src={props.src} />
      <div className={"account-info__name"}>
        {props.name}
      </div>
    </button>
  );
}
