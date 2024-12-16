import { apiUrl } from "../../config/config";

export const createMessage = async (uidConversation, content, senderId) => {
  try {
    const response = await fetch(`${apiUrl}/message/send`, {
      method: "POST",
      body: JSON.stringify({ uidConversation, content, senderId }),
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
