import { apiUrl } from "../../../config/config";

const SendRequestDelete = async (uid) => {
  try {
    const response = await fetch(`${apiUrl}/friends/delete`, {
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

export default SendRequestDelete;
