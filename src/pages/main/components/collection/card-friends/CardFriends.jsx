import React, { useContext, useEffect, useState } from "react";
import SendRequestDelete from "../../../services/SendRequestDelete";
import SendRequest from "../../../services/SendRequest";
import { userContext } from "../../../../../context/user-context/UserContext";
import styles from "./styles.module.css";
export default function CardFriends({ friend, manejarNotigicacion }) {
  const { user } = useContext(userContext);
  const [typeBtn, setTypeBtn] = useState(false);
  const handleTypeBtn = () => {
    setTypeBtn(!typeBtn);
    manejarNotigicacion(friend.uid);
  };
  useEffect(() => {
    if (friend.solicitud) {
      setTypeBtn(true);
    }
  }, []);
  return (
    <div className={styles.friend}>
      <h2 className={styles.friend_name}>{friend.name}</h2>
      <p className={styles.friend_email}>{friend.email}</p>
      {friend?.solicitud && (
        <div>
          {friend.solicitud.state === "accepted" && (
            <p className={styles.text_accepted}>Solicitud aceptada</p>
          )}
          {friend.solicitud.state === "rejected" && (
            <p className={styles.text_rejected}>Solicitud rechazada</p>
          )}
          {friend.solicitud.state === "pending" && (
            <p className={styles.text_pending}>Solicitud pendiente</p>
          )}
        </div>
      )}
      {!friend.solicitud && (
        <>
          {typeBtn ? (
            <>
              <button
                className={styles.button_cancel}
                onClick={() => {
                  handleTypeBtn();
                  SendRequestDelete(friend.solicitud.uid);
                }}
              >
                Eliminar
              </button>
            </>
          ) : (
            <button
              className={styles.button_send}
              onClick={() => {
                handleTypeBtn();
                SendRequest(friend.uid, user.uid);
              }}
            >
              Enviar solicitud
            </button>
          )}
        </>
      )}
    </div>
  );
}
