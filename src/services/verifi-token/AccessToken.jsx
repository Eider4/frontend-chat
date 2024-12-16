import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { useUser } from './UserContext'; // Asegúrate de importar tu contexto correctamente

const AccessToken = () => {
  const { setUser } = useUser(); // Hook del contexto para actualizar el usuario

  useEffect(() => {
    const verifyToken = async () => {
      try {
        // Obtén el token (puedes usar localStorage, cookies, etc.)
        const token = localStorage.getItem('access_token');
        if (!token) {
          console.log('No se encontró un token.');
          return;
        }

        // Envía el token al backend
        const response = await axios.post('http://localhost:5173/', {
          token,
        });

        // Si el token es válido, actualiza el contexto con el usuario recibido
        if (response.data?.user) {
          setUser(response.data.user);
        } else {
          console.error('El token no es válido o no se retornó un usuario.');
        }
      } catch (error) {
        console.error('Error al verificar el token:', error);
      }
    };

    verifyToken();
  }, [setUser]); // Solo ejecuta este efecto cuando `setUser` cambia

  return <div>Verificando acceso...</div>;
};

export default AccessToken;
