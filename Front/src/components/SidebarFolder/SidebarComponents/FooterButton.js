import "./FooterButton.css";

const FooterButton = ({ image, text }) => (
  <button className="custom-button2">
    <div className="button-content2">
      <img src={image} alt="icon2" className="button-icon2" />
      <span className="button-text2">{text}</span>
    </div>
  </button>
);
export default FooterButton;
