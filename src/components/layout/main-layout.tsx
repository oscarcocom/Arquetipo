import {FC} from 'react'
import { Outlet } from 'react-router-dom'

// interface Props{
//     children :React.ReactNode;
// }

export const MainLayout:FC = () => {
  return (
    <div className='layout'>
     <Outlet/>
    </div>
  )
}
