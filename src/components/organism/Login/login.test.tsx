// import { cleanup, fireEvent, render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
// import { Login } from './login'

// import { renderHook } from '@testing-library/react-hooks'
// import { useLogin } from './use-login/use-login'

// describe('Test to  <login/>', () => {
//   afterEach(() => {
//     cleanup()
//   })

//   const mail = 'os@coco.com'
//   const pass = '1233'
//   const { result } = renderHook(() => {
//     const { toLogin } = useLogin({
//       mail: '',
//       pass: ''
//     })
//     return { toLogin }
//   })
//   beforeEach(() => {
//     result.current.toLogin(mail, pass)
//   })
//   it('should render login', async () => {
//     render(
//       <BrowserRouter>
//         <Routes>
//           <Route index element={<Login />} />
//         </Routes>
//       </BrowserRouter>
//     )
//     const titleText = screen.getByText('Iniciar sesión')
//     const InputMail = screen.getByPlaceholderText('Ingresa tu correo')
//     const InputPass = screen.getByPlaceholderText('Ingresa tu contraseña')
//     const Botton = screen.getByRole('button')
//     const redirec= screen.getByText('Registrarse aquí')

//     //  await userEvent.click(Botton)
//     fireEvent.click(Botton)
    
//     expect(result.current.toLogin).toBeInstanceOf(Function)

//     expect(titleText).toBeInTheDocument()
//     expect(InputMail).toBeInTheDocument()
//     expect(InputPass).toBeInTheDocument()
//     expect(Botton).toBeInTheDocument()
//     expect(redirec).toBeInTheDocument()
    
//      console.log(Botton)

     
    
    

//     // console.log(Botton)
//   })
// })


