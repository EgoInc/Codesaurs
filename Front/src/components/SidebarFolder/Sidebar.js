import "./Sidebar.css";
import HeaderButton from "./SidebarComponents/HeaderButton";
import BodyButton from "./SidebarComponents/BodyButton";
import FooterButton from "./SidebarComponents/FooterButton";
import icon1 from "./SidebarComponents/icons/Ivan-Petrov.jpg";
import icon2 from "./SidebarComponents/icons/sign.jpg";
import icon3 from "./SidebarComponents/icons/hat-icon.jpg";
import icon4 from "./SidebarComponents/icons/two-icon.jpg";
import icon5 from "./SidebarComponents/icons/settings.png";
import icon6 from "./SidebarComponents/icons/exit.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="header">
        <HeaderButton />
      </div>
      <div className="body">
        <BodyButton image={icon1} text="Иван Петров" />
        <BodyButton image={icon2} text="Прогресс" />
        <BodyButton image={icon3} text="Мои курсы" />
        <BodyButton image={icon4} text="Задания" />
      </div>
      <div className="footer">
        <FooterButton image={icon5} text="Настройки профиля" />
        <FooterButton image={icon6} text="Выйти" />
      </div>
    </div>
  );
};

export default Sidebar;
