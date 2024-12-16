import { createContext, useContext, useEffect, useState } from "react";
import { verifyToken } from "../../services/auth/auth";
import { tokenContext } from "../token-context/TokenContext";
import { getCookie } from "../../utils/getCookies";
import getFriendsUser from "../../services/friends/getFriendsUser";

export const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const { token, saveToken, deleteToken } = useContext(tokenContext);

  const getUser = async (currentToken) => {
    if (!currentToken) return;
    try {
      const res = await verifyToken(currentToken); // Verifica el token
      if (!res.datos) return;
      const friends = await getFriendsUser(res.datos.uid);
      setUser({ ...res.datos, friendsData: friends });
      const expiresIn = res.expiresIn || 3600; // Tiempo de expiración (ejemplo: 1 hora)
      saveToken(currentToken, expiresIn);
    } catch (error) {
      console.error("Token expirado o incorrecto", error);
      deleteToken(); // Limpia el token si no es válido
      setUser(null); // Limpia el usuario
    }
  };
  const getToken = () => {
    const currentToken = getCookie("access_token");
    if (currentToken) {
      getUser(currentToken);
      return currentToken;
    } else {
      deleteToken();
      console.log("No hay token");
      return null;
    }
  };

  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    if (!token) {
      setUser(null);
      if (user) setUserId(user.id);
    }
  }, [token]);
  return (
    <userContext.Provider value={{ user, getUser, getToken, userId }}>
      {children}
    </userContext.Provider>
  );
};
