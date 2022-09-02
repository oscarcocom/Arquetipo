import { FC, useState } from 'react'
import { Input } from '../../atoms/Input/Input'
import { Link } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import { useLogin } from './use-login/use-login'
import { NavLink } from 'react-router-dom'

interface Props {
  onSubmmit: (mail: string, pass: string) => void
  mailError:string | null
  passError:string | null
  
}

export const Login: FC<Props> = ({onSubmmit,mailError, passError,}) => {
  
  const {values, handleInputchange } = useLogin({
    mail: '',
    pass: ''
  })
  return (
    <div className="login">
      <div className="login__header">
        <h3>Iniciar sesión</h3>
      </div>
      <div className="login__content-input">
        {/* <input value={values.mail} name="mail" onChange={handleInputchange} /> */}

        <div className="login__input-container">
          <Input
            autofocus={true}
            errorHelper={'Correo es requerido'}
            idElement={'mail'}
            label={'Correo electronico'}
            min={5}
            placeholder={'Ingresa tu correo'}
            size={'large'}
            state={'normal'}
            value={values.mail}
            name={'mail'}
            eventToChange={handleInputchange}
            className={'login__input'}
          />
          {mailError && <span className="login__email-error">{mailError}</span>}
        </div>
      </div>
      <div className="login__content-input">
        {/* <input value={values.mail} name="mail" onChange={handleInputchange} /> */}

        <div className="login__input-container">
          <Input
            autofocus={true}
            errorHelper={'Correo es requerido'}
            idElement={'Input-user'}
            label={'Contraseña contraseña'}
            min={5}
            placeholder={'Ingresa tu contraseña'}
            size={'large'}
            state={'normal'}
            value={values.mail}
            name={'mail'}
            eventToChange={handleInputchange}
          />
          {passError && <span className="login__email-error">{passError}</span>}
        </div>
      </div>

      <div className="login__footer">
        <Link to="/registrarse">
          <a className="login__footer--action" href="#">
            Registrarse aquí
          </a>
        </Link>
        <Button
          onClick={() => onSubmmit(values.mail, values.pass)}
          idelement={'StartSesion'}
          children={'Iniciar Sesión'}
          size={'small'}
        />
      </div>
    </div>
  )
}
