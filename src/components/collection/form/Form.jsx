import React, { useContext, useEffect, useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from "./form.module.css";
import { createUser } from "../../../pages/register/services/createUser";
import { verifyUser } from "../../../pages/register/services/verifyUser";
import { useNavigate } from "react-router-dom";
import loginUser from "../../../pages/login/services/loginUser";
import { userContext } from "../../../context/user-context/UserContext";
import { use } from "react";

const Form = ({ register }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [nameExisting, setNameExisting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const { user } = useContext(userContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (register) {
      const Ture = await verifyUser(formData.name, formData.email);
      if (Ture.name && Ture.email) {
        return setNameExisting("el email y el nombre ya existe");
      } else {
        if (Ture.name)
          return setNameExisting(`El nombre ${formData.name} ya existe.`);
        if (Ture.email)
          return setNameExisting(`El email ${formData.email} ya existe.`);
        setNameExisting("Datos enviados");
        const data = await createUser(formData);
        return;
      }
    } else loginUser(formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/");
  }, [user]);
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>
          {register ? "Registar" : "Iniciar sesion"}
        </h2>
        {register && (
          <div className={styles.inputGroup}>
            <label htmlFor="name">name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        )}
        <div className={styles.inputGroup}>
          <label htmlFor="email">email Electronico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="password">password</label>
          <div className={styles.passwordWrapper}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <span
              className={styles.eyeIcon}
              onClick={togglePasswordVisibility}
              aria-label="Toggle password visibility"
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </span>
          </div>
        </div>
        {nameExisting && <p>{nameExisting}</p>}
        <button type="submit" className={styles.submitButton}>
          Registrarse
        </button>
        <p>
          {register ? (
            <>
              ya tengo una cuenta ingresa{" "}
              <span className={styles.link} onClick={() => navigate("/login")}>
                aqui
              </span>
            </>
          ) : (
            <>
              no tengo una cuenta, cree una{" "}
              <span
                className={styles.link}
                onClick={() => navigate("/register")}
              >
                aqui
              </span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Form;
