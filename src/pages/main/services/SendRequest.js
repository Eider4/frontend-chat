import { apiUrl } from "../../../config/config";

const SendRequest = async (friendId) => {
  try {
    const response = await fetch(`${apiUrl}/user/friends/request`, {
      method: "POST",
      body: JSON.stringify({ friendId }),
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
