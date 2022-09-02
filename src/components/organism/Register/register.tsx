import { FC } from 'react'
import { useForm } from '../../../hooks/useForm/use-form/use-form'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input/Input'
import { useLogin } from '../Login/use-login/use-login'

interface Props {
  onSubmmit: (mail: string, pass: string) => void
  mailError: string | null
  passError: string | null
}

export const Register: FC<Props> = ({ onSubmmit, mailError, passError }) => {
  const {values, handleInputchange } = useLogin({
    name: '',
    number: '',
    mail: '',
    pass: ''
  })
  return (
    <div className="login">
      <div className="login__header">
        <h3>Registrarse</h3>
      </div>
      <div className="login__content">
        <Input
          autofocus={true}
          errorHelper={'Correo es requerido'}
          idElement={'Input-user'}
          label={'Correo electronico'}
          min={5}
          placeholder={'Ingresa tu correo'}
          size={'large'}
          state={'normal'}
          value={values.name}
          name={'name'}
          eventToChange={handleInputchange}
        />
        <Input
          autofocus={true}
          errorHelper={'Correo es requerido'}
          idElement={'Input-user'}
          label={'Contraseña contraseña'}
          min={5}
          placeholder={'Ingresa tu contraseña'}
          size={'large'}
          state={'normal'}
          value={values.number}
          name={'number'}
          eventToChange={handleInputchange}
        />
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
        <Input
          autofocus={true}
          errorHelper={'Correo es requerido'}
          idElement={'Input-user'}
          label={'Contraseña contraseña'}
          min={5}
          placeholder={'Ingresa tu contraseña'}
          size={'large'}
          state={'normal'}
          value={values.pass}
          name={'pass'}
          eventToChange={handleInputchange}
        />
      </div>

      <div className="login__footer">
        <a   href="#">
          Iniciar Sesión
        </a>
        <Button onClick={() => onSubmmit(values.mail, values.pass)} idelement={'StartSesion'} children={'Registrar'} size={'small'} />
      </div>
    </div>
  )
}
