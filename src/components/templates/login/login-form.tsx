// import { FC } from 'react'
// import { Login } from '../../organism/Login/login'
// import { Register } from '../../organism/Register/register'

// interface Props{
//   children :React.ReactNode;
// }
// export const Loginform:FC:<Props> = ({children}) => {
//   // const [flagLogin, setflagLogin] = useState(true)

//   return (
//     <div className="container">
//       {flagLogin ? <Login setflagLogin={setflagLogin} /> : <Register setflagLogin={setflagLogin} />}
//     </div>
//   )
// }
import { Routes, Route} from 'react-router-dom'
import { FC } from 'react'
import { MainLayout } from '../../layout'
import { Login } from '../../organism/Login/login'
import { Register } from '../../organism/Register/register'
import { useLogin } from '../../organism/Login/use-login/use-login'

export const Loginform: FC = () => {
  const { toLogin,toRegiter, mailError, passError } = useLogin({})
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Login onSubmmit={toLogin} mailError={mailError} passError={passError} />} />
        <Route path="register" element={<Register  onSubmmit={toRegiter} mailError={mailError} passError={passError} />} />
      </Route>
    </Routes>
  )
}
