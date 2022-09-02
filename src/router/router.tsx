import { CONNREFUSED } from 'dns'
import { shallowEqual, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '../components/organism/Login/login'
import { Loginform } from '../components/templates/login/login-form'
import { MainLayout } from '../components/layout/'
import App from '../App'
import { Register } from '../components/organism/Register/register'
import { useLogin } from '../components/organism/Login/use-login/use-login'

interface LoginUser {
  user: { mail: string; pass: string }
}
export const Router = () => {
  const loginAccount = useSelector((store: LoginUser) => store.user, shallowEqual)
  console.log(loginAccount.mail)

  return (
    // <MainLayout>
    <Routes>
      {!!loginAccount.mail ? (
        <Route path="/*" element={<Loginform />} />
      ) : (
        <Route path="/*" element={<App />} />
      )}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
    // </MainLayout>
  )
}
