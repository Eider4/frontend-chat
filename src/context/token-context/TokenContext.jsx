import { createContext, useState } from "react";

export const tokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [expirationTimeout, setExpirationTimeout] = useState(null);

  const saveToken = (newToken, expiresIn) => {
    clearTimeout(expirationTimeout); // Limpia cualquier temporizador existente
    setToken(newToken);
    if (expiresIn) {
      const timeout = setTimeout(() => {
        setToken(null); // Limpia el token al expirar
      }, expiresIn * 1000);
      setExpirationTimeout(timeout);
    }
  };
  const deleteToken = () => {
    clearTimeout(expirationTimeout);
    setToken(null);
  };
  return (
    <tokenContext.Provider value={{ token, saveToken, deleteToken }}>
      {children}
    </tokenContext.Provider>
  );
};
