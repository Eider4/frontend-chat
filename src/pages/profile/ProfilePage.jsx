import React, { useEffect } from "react";
import { socket } from "../../config/config";

// Conectar al servidor de Socket.IO

export default function ProfilePage() {
  useEffect(() => {
    // Escuchar el evento "user-click" desde el servidor
    socket.on("user-click", (data) => {
      console.log(`El usuario ${data.id} hizo clic: ${data.message}`);
    });
  }, []);

  const manejarClick = () => {
    // Emitir el evento "click" al servidor
    socket.emit("click", { user: "User clicked" });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Click Notifier</h1>
      <button
        onClick={manejarClick}
        style={{
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Haz Clic
      </button>
    </div>
  );
}
