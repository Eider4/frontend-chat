import { apiUrl } from "../../../config/config";

export const verifyUser = async (name, email) => {
  try {
    const response = await fetch(`${apiUrl}/user/verificar/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(" error ", error);
  }
};
