import { apiUrl } from "../../../config/config";

export const rejectSolicitud = async (uid) => {
  try {
    const data = await fetch(`${apiUrl}/friends/request/reject`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uid }),
    });

    const res = await data.json();
    return res;
  } catch (error) {
    console.log(error);
  }
};
