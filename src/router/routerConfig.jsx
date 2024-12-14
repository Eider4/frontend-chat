import ChatPage from "../pages/chat/ChatPage";
import LoginPage from "../pages/login/LoginPage";
import MainPage from "../pages/main/MainPage";
import RegisterPage from "../pages/register/RegisterPage";

export const config = [
  { path: "/", element: <MainPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/chat", element: <ChatPage /> },
];
