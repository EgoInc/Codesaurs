import "./BodyButton.css";

const BodyButton = ({ image, text }) => (
  <button className="custom-button1">
    <div className="button-content">
      <img src={image} alt="icon" className="button-icon1" />
      <span className="button-text1">{text}</span>
    </div>
  </button>
);
export default BodyButton;
