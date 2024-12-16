import { apiUrl } from "../../../config/config";

const loginUser = async (formData) => {
  try {
    const response = await fetch(`${apiUrl}/user/login`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include", // Esto asegura que las cookies se envíen o guarden
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default loginUser;
