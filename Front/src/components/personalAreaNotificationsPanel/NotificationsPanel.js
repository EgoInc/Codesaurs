import React, { useEffect, useState } from "react";
import "./NotificationPanel.css";
import notificationsData from "./Notificationpanel.json"; // Явный импорт JSON файла

const NotificationPanel = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications(notificationsData.notifications); // Устанавливаем уведомления из загруженного JSON файла
  }, []);

  return (
    <div className="notification-panel">
      <h1 className={"personal-area-progress__title"}>Уведомления</h1>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index}>
            <h3>{notification.title}</h3>
            <p>{notification.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationPanel;
