import { useState } from "react";

const crearUsuario = async (userData) => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  try {
    const response = await fetch('https://mi-api.com/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('Error al crear el usuario');
    }

    const data = await response.json();
    setSuccessMessage(`Usuario creado con éxito! ID del usuario: ${data.id}`);
    setError(null);
  } catch (error) {
    setError('Hubo un error al crear el usuario. Intenta nuevamente.');
    setSuccessMessage(null);
  }

  return { successMessage, error };
};

export default crearUsuario;
