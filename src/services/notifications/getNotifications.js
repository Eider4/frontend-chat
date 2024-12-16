import { apiUrl } from "../../config/config";

export const getNotifications = async (uid) => {
  try {
    const response = await fetch(`${apiUrl}/notifications`, {
      method: "POST",
      body: JSON.stringify({ uid }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
