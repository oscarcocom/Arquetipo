
import { Routes, Route } from 'react-router-dom'
import { FC } from 'react'
import { MainLayout } from '../../layout'
import { Login } from '../../organism/Login/login'
import { Register } from '../../organism/Register/register'
import  "./login.scss";
export const Loginform: FC = () => {

  return (
    
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
 
  )
}
