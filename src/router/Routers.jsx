import { BrowserRouter, Routes, Route } from "react-router-dom";
import { config } from "./routerConfig";
import Layout from "../layout/Layout";
import { tokenContext } from "../context/token-context/TokenContext";
import { useContext } from "react";
import RegisterPage from "../pages/register/RegisterPage";

export default function Router() {
  const { token } = useContext(tokenContext);

  return (
    <BrowserRouter>
      <Routes>
        {config.map(({ path, element }, index) => (
          <Route
            key={index}
            path={path}
            element={
              <Layout>
                {!token && path !== "/login" ? <RegisterPage /> : element}
              </Layout>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
