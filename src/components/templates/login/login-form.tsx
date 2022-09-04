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


export const Loginform: FC = () => {
  
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Login  />} /> 
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  )
}
