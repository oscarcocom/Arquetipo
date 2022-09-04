import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input/Input'
import { useLogin } from '../Login/use-login/use-login'

// interface Props {
//   onSubmmit: (mail: string, pass: string) => void
//   mailError: string | null
//   passError: string | null
// }

export const Register: FC = () => {
  const {values, handleInputchange,toRegiter } = useLogin({
    name: '',
    number: 0,
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

      <Link role="redirect" to="/">
          <span className="login__footer--action">Iniciar seseón</span>
        </Link>
      
        <Button onClick={() => toRegiter(values.mail, values.pass, values.number, values.name)} idelement={'StartSesion'} children={'Registrar'} size={'small'} />
      </div>
    </div>
  )
}
