import { shallowEqual, useSelector } from 'react-redux'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Loginform } from '../components/templates/login/login-form'
import { Admin } from '../components/templates/admin/admin'

interface LoginUser {
  user: { mail: string; pass: string }
}
export const Router = () => {
  const loginAccount = useSelector((store: LoginUser) => store.user, shallowEqual)
  console.log(loginAccount.mail)
  const token = sessionStorage.getItem('token')

  return (
    // <MainLayout>
    <Routes>
      {token? (
        <Route path="/*" element={<Admin />} />
        ) : (
        <Route path="/*" element={<Loginform />} />
      )}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
    // </MainLayout>
  )
}
