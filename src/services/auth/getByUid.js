import { apiUrl } from "../../config/config";

export const getByUid = async (uid) => {
  try {
    const response = await fetch(`${apiUrl}/user/get/By/Uid`, {
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
