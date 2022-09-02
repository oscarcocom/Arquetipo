import React, { useState } from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { useForm } from '../../../hooks/useForm/use-form/use-form'
import { render,screen } from '@testing-library/react'
import { Login } from './login'

describe('Test to  <login/>', () => {
  const initialProps = {
    mail: 'oscar@cocom',
    pass: 'pass333'
  }
  it('should render login', () => {
    // render(<Login setflagLogin={() => {}} />)
    // const titleText=screen.getByText('Iniciar sesión')
    // const InputMail=screen.getByPlaceholderText('Ingresa tu correo')
    // const InputPass=screen.getByPlaceholderText('Ingresa tu contraseña')
    // const Botton=screen.getByRole('button')


    // expect(titleText).toBeInTheDocument()
    // expect(InputMail).toBeInTheDocument()
    // expect(InputPass).toBeInTheDocument()
    // expect(Botton).toBeInTheDocument()
    

  })
})
