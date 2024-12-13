import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "./form.module.css";

const Form = ({ onSubmit, register, userVetification }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    contraseña: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const Ture = userVetification(formData.name);
    if (!Ture) {
      console.log("Datos enviados:", formData);
      if (onSubmit) onSubmit();
    } else {
      console.log(`El usuario ${nombreUsuario} no existe.`);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>
          {register ? "Registar" : "Iniciar sesion"}
        </h2>
        <div className={styles.inputGroup}>
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="correo">Correo Electronico</label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="contraseña">Contraseña</label>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              id="contraseña"
              name="contraseña"
              value={formData.contraseña}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className={styles.eyeButton}
              onClick={togglePasswordVisibility}
              aria-label="Toggle password visibility"
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
          </div>
        </div>
        <button type="submit" className={styles.submitButton}>
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default Form;
