import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState(null);
  const { token, saveToken, deleteToken } = useContext(tokenContext); 

  const getUser = () => {
    return user;
  };

  const getToken = () => {
    // obtener el token
    return token;
  };

  return (
    <UserContext.Provider value={{ user, userId, getUser, getToken, saveToken, deleteToken }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
