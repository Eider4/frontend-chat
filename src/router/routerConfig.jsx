import ChatPage from "../pages/chat/ChatPage";
import LoginPage from "../pages/login/LoginPage";
import MainPage from "../pages/main/MainPage";
import NotificationsPage from "../pages/notification/NotificationsPage";
import ProfilePage from "../pages/profile/ProfilePage";
import RegisterPage from "../pages/register/RegisterPage";
export const config = [
  { path: "/", element: <MainPage /> },
  { path: "*", element: <MainPage /> },
  { path: "/register", element: <RegisterPage /> },
  { path: "/login", element: <LoginPage /> },
  { path: "/chat/:id", element: <ChatPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/notifications", element: <NotificationsPage /> },
];
