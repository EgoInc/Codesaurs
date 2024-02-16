import "./HeaderButton.css";
import logo from "./icons/logo.png";

const HeaderButton = () => (
  <button className="custom-button">
    <div>
      <img src={logo} alt="logo" className="button-logo" />
    </div>
  </button>
);
export default HeaderButton;
