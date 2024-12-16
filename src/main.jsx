import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Form from "./components/collection/form/Form";
import Router from "./router/Routers";
import { TokenProvider } from "./context/token-context/TokenContext";
import { UserProvider } from "./context/user-context/UserContext";
import { NotificationsProvider } from "./context/notifications-context/notificationsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TokenProvider>
      <UserProvider>
        <NotificationsProvider>
          <Router />
        </NotificationsProvider>
      </UserProvider>
    </TokenProvider>
  </StrictMode>
);
