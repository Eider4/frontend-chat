import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CreateUser from './pages/register/services/CreateUser'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateUser/>
  </StrictMode>,
)
