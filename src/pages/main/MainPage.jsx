import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchFriends from "./services/SearchFriends";
import styles from "./styles.module.css";
import SendRequest from "./services/SendRequest";

export default function MainPage() {
  const [name, setName] = useState("");
  const [friends, setFriends] = useState([]);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await SearchFriends(name);
    setFriends(data);
  };
  const navigate = useNavigate();
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Chat</h1>
      <nav className={styles.nav}>
        <p onClick={() => navigate("/")}>Home</p>
        <p onClick={() => navigate("/register")}>Register</p>
        <p onClick={() => navigate("/login")}>Login</p>
        <p onClick={() => navigate("/chat")}>Chat</p>
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
          search
        </button>
      </form>
      <div className={styles.friendsContainer}>
        {friends.map((friend) => (
          <div key={friend.id} className={styles.friend}>
            <h2 className={styles.friend_name}>{friend.name}</h2>
            <p className={styles.friend_email}>{friend.email}</p>
            <button
              className={styles.button_send}
              onClick={() => SendRequest(friend.id)}
            >
              Enviar solicitud
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
