import React from "react";
import Form from "./Form";

const Login = () => {
  return (
    <Form
      title="Inicio de Sesión"
      buttonText="Iniciar Sesión"
      fields={[
        {
          name: "correo",
          label: "Correo Electrónico",
          type: "email",
          required: true,
        },
        {
          name: "contraseña",
          label: "Contraseña",
          type: "password",
          required: true,
        },
      ]}
      showPasswordToggle={true}
      onSubmit={(formData) =>
        console.log("Inicio de sesión exitoso:", formData)
      }
    />
  );
};

export default Login;
