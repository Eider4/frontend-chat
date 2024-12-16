import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getByUid } from "../../services/auth/getByUid";
import styles from "./styles.module.css";
import { userContext } from "../../context/user-context/UserContext";
import { getConversation } from "../../services/conversation/getConversation";
import { createMessage } from "../../services/message/createMessage";
import { getAllMessage } from "../../services/message/getAllMessage";
import { socket } from "../../config/config";

export default function ChatPage() {
  const [friend, setFriend] = useState(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { user } = useContext(userContext);
  const { id } = useParams();
  const [conversation, setConversation] = useState();

  const getFriend = async () => {
    const data = await getByUid(id);
    setFriend(data);
    const conversationApi = await getConversation(user.uid, id);
    setConversation(conversationApi);
    if (conversationApi) {
      const messagesApi = await getAllMessage(conversationApi.uid);
      setMessages(messagesApi);
    }
  };

  useEffect(() => {
    getFriend();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMessage(conversation.uid, message, user.uid);
    setMessage("");
    const updatedMessages = await getAllMessage(conversation.uid);
    setMessages(updatedMessages);
    socket.emit("refreshMessages", conversation.uid);
  };
  useEffect(() => {
    const handleRefresh = async (uidConversation) => {
      console.log(" uidConversation ", uidConversation);
      if (uidConversation !== conversation.uid) return;
      const newMessage = await getAllMessage(conversation.uid);
      setMessages(newMessage);
    };
    socket.on("refreshMessages2", handleRefresh);
    return () => {
      socket.off("refreshMessages2", handleRefresh);
    };
  }, [getAllMessage]);
  if (!friend) return <div>Loading...</div>;

  return (
    <div className={styles.chatContainer}>
      <h1 className={styles.user_name}>{friend.name}</h1>
      <p className={styles.user_email}>{friend.email}</p>
      <div className={styles.message_Container_and_form}>
        <form className={styles.form_message} onSubmit={handleSubmit}>
          <textarea
            type="text"
            className={styles.input_input_message}
            placeholder="Escribe un mensaje"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit" className={styles.button_send}>
            Enviar
          </button>
        </form>
        <div className={styles.messageContainer}>
          {messages.map((message) => {
            const date = new Date(message.createdAt);
            const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
            return (
              <div
                key={message.uid}
                className={styles.message}
                style={{
                  justifyContent:
                    user.uid === message.senderId ? "flex-end" : "flex-start",
                }}
              >
                <div
                  className={
                    user.uid === message.senderId
                      ? styles.message_prymary
                      : styles.message_secondary
                  }
                >
                  <p className={styles.message_text}>{message.content}</p>
                  <p className={styles.message_date}>{time}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
