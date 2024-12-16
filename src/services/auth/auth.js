import { apiUrl } from "../../config/config";

export const verifyToken = async (token) => {
  try {
    const response = await fetch(`${apiUrl}/user/verify-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Token inválido");
    }
    return data;
  } catch (error) {
    console.error("Error al verificar token:", error);
    throw error;
  }
};
export const refreshToken = async (userId) => {
  try {
    const resp = await UsePost({ userId }, "refresh-token");
    console.log("refrescar token:::: ", resp);
    return resp;
  } catch (error) {
    console.log("error al refrescar el Token", error);
  }
};
