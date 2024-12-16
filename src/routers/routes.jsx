import React from "react";
import { Route, Routes } from "react-router-dom";
import Form from "../components/collection/form/Form";
import Login from "../components/collection/form/Login";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route
        path="/form"
        element={
          <Form
            title="Registro"
            buttonText="Registrarse"
            fields={[
              { name: "nombre", label: "Nombre", type: "text", required: true },
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
            onSubmit={(formData) => console.log("Registro exitoso:", formData)}
            customValidation={(data) => {
              const errors = [];
              if (!data.nombre) errors.push("El nombre es obligatorio.");
              if (!data.correo.includes("@"))
                errors.push("El correo no es válido.");
              return errors;
            }}
          />
        }
      />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default RoutesConfig;

{
  /* <Route path="/profile" element={<Profile />} />
<Route path="/register" element={<Register />} />
<Route path="/chat" element={<Chat />} />
<Route path="/notification" element={<Notification />} /> */
}
