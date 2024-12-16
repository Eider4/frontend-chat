// import { apiUrl } from "../../../config/config";

import { apiUrl } from "../../../config/config";

export const createUser = async (userData) => {
  try {
    const response = await fetch(`${apiUrl}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
      credentials: "include", // Esto asegura que las cookies se envíen o guarden
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(" error ", error);
  }
};
