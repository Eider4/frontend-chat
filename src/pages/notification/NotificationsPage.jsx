import React, { useContext, useEffect, useState } from "react";
import { notificationsContext } from "../../context/notifications-context/notificationsContext";
import styles from "./styles.module.css";
import { acceptSolicitud } from "./services/acceptSolicitud";
import { rejectSolicitud } from "./services/rejectSolicitud";
import { socket } from "../../config/config";

export default function NotificationsPage() {
  const { notifications } = useContext(notificationsContext);
  const manejarNotigicacion = (userId) => {
    socket.emit("refreshNotifications", userId);
  };
  return (
    <div className={styles.notificationsContainer}>
      <h1 className={styles.title}>Notificaciones</h1>
      <div className={styles.notifications}>
        {notifications.map((notification) => {
          return (
            <div key={notification.uid} className={styles.notification}>
              <h2 className={styles.notification_text}>{notification.type}</h2>
              <p className={styles.notification_text}>
                solicitud {notification.state}
              </p>
              <p className={styles.user_name}>{notification.user.name}</p>
              <p className={styles.user_email}>{notification.user.email}</p>
              {notification.state == "pending" && (
                <div className={styles.buttons}>
                  <button
                    className={styles.accept}
                    onClick={() => {
                      acceptSolicitud(notification.uid);
                      manejarNotigicacion(notification.user.uid);
                    }}
                  >
                    Aceptar
                  </button>
                  <button
                    className={styles.reject}
                    onClick={() => {
                      rejectSolicitud(notification.uid);
                      manejarNotigicacion(notification.user.uid);
                    }}
                  >
                    Rechazar
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
