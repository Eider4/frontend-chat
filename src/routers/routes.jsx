import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Form from '../components/collection/form/Form'


const routes = () => {
  return (
    <Routes>
      <Route path="/form" element={<Form />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/notification" element={<Notification />} />
    </Routes>
  )
}

export default routes