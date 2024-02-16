import MainDino from "../../assets/images/mainDino.png"
import LoginForm from "../../components/loginForm/loginForm";

export function LoginPage(props) {
  return (
    <div className="container">
      <img src={MainDino} alt={"Dino"}/>
      <LoginForm/>
    </div>
  );
}
