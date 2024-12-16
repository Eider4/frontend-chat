import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from '../components/collection/form/Form'
import Login from '../components/collection/form/Login'


const RoutesConfig  = () => {
  return (
    <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  )
}

export default RoutesConfig 









{/* <Route path="/profile" element={<Profile />} />
<Route path="/register" element={<Register />} />
<Route path="/chat" element={<Chat />} />
<Route path="/notification" element={<Notification />} /> */}