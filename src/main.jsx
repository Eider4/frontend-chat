import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes } from 'react-router-dom';
import './index.css'
import RoutesConfig from './routers/routes';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <RoutesConfig/> 
    </BrowserRouter>
  </StrictMode>
);
