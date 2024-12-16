import { apiUrl } from "../../config/config";

export const getAllMessage = async (uidConversation) => {
  try {
    const response = await fetch(`${apiUrl}/message/get/all`, {
      method: "POST",
      body: JSON.stringify({ uidConversation }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
