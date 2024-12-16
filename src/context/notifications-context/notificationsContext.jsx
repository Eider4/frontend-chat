import { use, useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { userContext } from "../user-context/UserContext";
import { getNotifications } from "../../services/notifications/getNotifications";
import { socket } from "../../config/config";
export const notificationsContext = createContext();

export const NotificationsProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);
  const { user } = useContext(userContext);
  const f_getNotifications = async () => {
    try {
      const data = await getNotifications(user.uid);
      setNotifications(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user) {
      f_getNotifications();
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const handleRefresh = (userId) => {
        if (userId !== user.uid) return;
        setTimeout(() => {
          f_getNotifications();
        }, 500);
      };

      socket.on("refreshNotifications2", handleRefresh);

      // Limpieza al desmontar
      return () => {
        socket.off("refreshNotifications2", handleRefresh);
      };
    }
  }, [user]);

  return (
    <notificationsContext.Provider
      value={{ notifications, setNotifications, f_getNotifications }}
    >
      {children}
    </notificationsContext.Provider>
  );
};
