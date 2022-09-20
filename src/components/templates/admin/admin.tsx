
import { Routes, Route } from 'react-router-dom'
import { FC } from 'react'
import { MainLayout } from '../../layout'
import { AdminView } from '../../organism/Admin/admin-view'
import './admin-view.scss';


export const Admin: FC = () => {

  return (
    
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route  index element={<AdminView />} />
          {/* <Route path="register" element={<Register />} /> */}
        </Route>
      </Routes>
 
  )
}
