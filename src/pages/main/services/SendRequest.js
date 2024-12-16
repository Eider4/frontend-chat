import { apiUrl } from "../../../config/config";

const SendRequest = async (userRejects, userSend) => {
  try {
    const response = await fetch(`${apiUrl}/friends/request`, {
      method: "POST",
      body: JSON.stringify({
        userSend,
        userRejects,
      }),
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

export default SendRequest;
