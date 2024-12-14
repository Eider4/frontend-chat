import { BrowserRouter, Routes, Route } from "react-router-dom";
import { config } from "./routerConfig";
import Layout from "../layout/Layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {config.map(({ path, element }, index) => (
          <Route key={index} path={path} element={<Layout>{element}</Layout>} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
