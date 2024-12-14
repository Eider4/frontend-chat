import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import Form from "./components/collection/form/Form";
import Router from "./router/Routers";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
