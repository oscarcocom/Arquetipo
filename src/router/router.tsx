import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import App from '../App'
import { Login } from '../components/atoms/Login/login'

interface LoginUser {
  loginReducer: any
}
export const Router = () => {
  const loginAccount = useSelector((store: LoginUser) => store.loginReducer, shallowEqual)
  console.log(loginAccount)
  const auth = true
  return (
    <Routes>
      {/* {!loginAccount.mail ? (
        <Route path="/main" element={<App />} />
      ) : (
        <Route path="/" element={<Login />} />
      )} */}
      <Route path="/" element={<Login />} />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  )
}
