import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "./form.module.css";

const Form = ({
  fields, // Lista de campos dinámicos
  title, // Título del formulario
  buttonText, // Texto del botón
  onSubmit, // Función al enviar el formulario
  customValidation, // Validaciones personalizadas
  showPasswordToggle, // Mostrar/ocultar contraseña
}) => {
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (customValidation) {
      const errors = customValidation(formData);
      if (errors.length > 0) {
        console.error("Errores de validación:", errors);
        return;
      }
    }
    if (onSubmit) onSubmit(formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>{title}</h2>

        {fields.map((field) => (
          <div className={styles.inputGroup} key={field.name}>
            <label htmlFor={field.name}>{field.label}</label>
            {field.type === "password" && showPasswordToggle ? (
              <div className={styles.passwordWrapper}>
                <input
                  type={showPassword ? "text" : "password"}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name] || ""}
                  onChange={handleChange}
                  placeholder={field.placeholder || ""}
                  required={field.required}
                />
                <span
                  className={styles.eyeIcon}
                  onClick={togglePasswordVisibility}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                </span>
              </div>
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder || ""}
                required={field.required}
              />
            )}
          </div>
        ))}

        <button type="submit" className={styles.submitButton}>
          {buttonText}
        </button>
      </form>
    </div>
  );
};

export default Form;
