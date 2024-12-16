import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchFriends from "./services/SearchFriends";
import styles from "./styles.module.css";
import { userContext } from "../../context/user-context/UserContext";
import { notificationsContext } from "../../context/notifications-context/notificationsContext";
import { socket } from "../../config/config";
import CardFriends from "./components/collection/card-friends/CardFriends";

export default function MainPage() {
  const [name, setName] = useState("");
  const [friends, setFriends] = useState([]);
  const { notifications, f_getNotifications } =
    useContext(notificationsContext);
  const { user } = useContext(userContext);
  const navigate = useNavigate();

  const handleChange = (e) => setName(e.target.value);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    const data = await SearchFriends(name, user.uid);
    setFriends(data);
  };

  const manejarNotigicacion = (userUid) => {
    socket.emit("refreshNotifications", userUid);
    setFriends([]);
  };
  useEffect(() => {
    const handleRefresh = (userId) => {
      if (userId !== user.uid) return;
      f_getNotifications(); // Actualiza las notificaciones
    };

    socket.on("refreshNotifications2", handleRefresh);

    return () => {
      socket.off("refreshNotifications2", handleRefresh);
    };
  }, [f_getNotifications]);

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Chat</h1>
      <nav className={styles.nav}>
        <p onClick={() => navigate("/profile")}>Profile</p>
        <p onClick={() => navigate("/notifications")}>
          Notificaciones <span>{notifications?.length}</span>
        </p>
      </nav>
      <form onSubmit={handleSubmit} className={styles.searchForm}>
        <input
          name="name"
          id="name"
          className={styles.input}
          type="text"
          value={name}
          onChange={handleChange}
          placeholder="Buscar amigos"
        />
        <button type="submit" className={styles.button}>
          Buscar
        </button>
      </form>
      <div className={styles.friendsContainer}>
        {friends.length > 0 &&
          friends.map((friend) => {
            if (friend.uid === user.uid) return null;
            return (
              <CardFriends
                friend={friend}
                key={friend.uid}
                manejarNotigicacion={manejarNotigicacion}
              />
            );
          })}
      </div>
      <div>
        <h1>Friends</h1>
        <div className={styles.friendsContainer}>
          {user &&
            user?.friendsData?.map((friend) => {
              return (
                <div
                  key={friend.uid}
                  className={styles.friend}
                  onClick={() => navigate(`/chat/${friend.uid}`)}
                >
                  <h2 className={styles.friend_name}>{friend.name}</h2>
                  <p className={styles.friend_email}>{friend.email}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
