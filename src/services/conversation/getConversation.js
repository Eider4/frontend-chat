import { apiUrl } from "../../config/config";

export const getConversation = async (user1Id, user2Id) => {
  try {
    const response = await fetch(`${apiUrl}/conversation/get/users`, {
      method: "POST",
      body: JSON.stringify({ user1Id, user2Id }),
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
