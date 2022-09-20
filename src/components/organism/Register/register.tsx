import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useGetGlobal } from '../../../hooks/useForm/useApi/use-api'
import { Button } from '../../atoms/Button/Button'
import { Input } from '../../atoms/Input/Input'

import { Alert } from '../Alert/alert'
import { useLogin } from '../Login/use-login/use-login'
import { useValidator } from '../Login/use-login/use-validator'
import { Modal } from '../modal/modal'

export const Register: FC = () => {
  const { values, handleInputchange, toRegiter, setValues } = useLogin({
    name: '',
    mail: '',
    pass: '',
    retryPass: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    option5: '',
    checkUser: 'normal',
    alerts: [],
    statusBotton: false
  })
  const [{ Visible, Message }, setModal] = useState({
    Visible: false,
    Message: '',
  })
  const {
    alerts,
    name,
    statusBotton,
    mail,
    pass,
    retryPass,
    checkUser
  } = values

  const { AddAlert, DeleteAlert } = useValidator()

  const { isLoading, data } = useGetGlobal(`/users/exist-name/${name}`, true) as {
    isLoading: boolean
    data: any
  }
  const CheckUser = () => {
    if (isLoading) return
    else {
      return data.exists
        ? setValues({ ...values, checkUser: 'error' })
        : setValues({ ...values, checkUser: 'normal' })
    }
  }

  useEffect(() => {
    if (name.length > 1) CheckUser()
    if (pass.length < 8) {
      AddAlert(alerts, setValues, 'Deben ser minimo 8 caracteres')
    } else {
      DeleteAlert(alerts, setValues, 'Deben ser minimo 8 caracteres')
    }

    //validar letra
    if (!pass.match(/[A-z]/)) {
      AddAlert(alerts, setValues, 'Deben incluir letras')
    } else {
      DeleteAlert(alerts, setValues, 'Deben incluir letras')
    }

    //validar letra mayúscula
    if (!pass.match(/[A-Z]/)) {
      AddAlert(alerts, setValues, 'Deben incluir una MAY')
    } else {
      DeleteAlert(alerts, setValues, 'Deben incluir una MAY')
    }
    //validar numero
    if (pass.match(/^[0-9]$/)) {
      AddAlert(alerts, setValues, 'Deben incluir un numero')
    } else {
      DeleteAlert(alerts, setValues, 'Deben incluir un numero')
    }
    if (pass !== retryPass) {
      AddAlert(alerts, setValues, 'Contraseñas no coinciden')
    } else {
      DeleteAlert(alerts, setValues, 'Contraseñas no coinciden')
    }
  }, [name, pass, retryPass, mail])

  return (
    <div className="contain">
      <Modal Visible={Visible} Message={Message} setModal={setModal} />
      <div className="login">
        <div className="login__header">
          <h3>Registrarse</h3>
        </div>
        <div className="login__content">
          <Input
            autofocus={true}
            errorHelper={'Este usuario ya existe'}
            idElement={'Input-user'}
            label={'Nombre de usuario'}
            min={5}
            placeholder={'Ej.makoto'}
            size={'large'}
            state={checkUser}
            value={values.name}
            name={'name'}
            eventToChange={handleInputchange}
          />
          <Input
            autofocus={true}
            errorHelper={'Correo es requerido'}
            idElement={'Input-user'}
            label={'Correo es requerido'}
            min={5}
            placeholder={'Ingresa tu correo'}
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
            label={'Contraseña '}
            min={5}
            placeholder={'Ingresa tu contraseña'}
            size={'large'}
            state={'normal'}
            value={values.pass}
            name={'pass'}
            eventToChange={handleInputchange}
            hidePasswordText={'OCULTAR'}
            type={'password'}
          />
          <Input
            autofocus={true}
            errorHelper={'error en contraseña'}
            idElement={'Input-user'}
            label={'Confirmar contraseña'}
            min={5}
            placeholder={'Confirmar contraseña'}
            size={'large'}
            state={'normal'}
            value={values.retryPass}
            name={'retryPass'}
            eventToChange={handleInputchange}
            hidePasswordText={'OCULTAR'}
            type={'password'}
          />
          <Alert alerts={alerts} />
          <div className="login__content__category">
            <h3>Categorias</h3>

            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="option1"
                  value={'Anime'}
                  checked={values.option1 === 'Anime'}
                  onChange={handleInputchange}
                />
                Anime
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="option2"
                  value={'Ciencia ficcion'}
                  checked={values.option2 === 'Ciencia ficcion'}
                  onChange={handleInputchange}
                />
                Ciencia ficcion
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="option3"
                  value={'Novelas'}
                  checked={values.option3 === 'Novelas'}
                  onChange={handleInputchange}
                />
                Novelas
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="option4"
                  value={'Drama'}
                  checked={values.option4 === 'Drama'}
                  onChange={handleInputchange}
                />
                Drama
              </label>
            </div>
            <div className="radio">
              <label>
                <input
                  type="radio"
                  name="option5"
                  value={'Inteligencia artificial'}
                  checked={values.option5 === 'Inteligencia artificial'}
                  onChange={handleInputchange}
                />
                Inteligencia artificial
              </label>
            </div>
          </div>
        </div>

        <div className="login__footer">
          <Link role="redirect" to="/">
            <span className="login__footer--action">Iniciar seseón</span>
          </Link>

          <Button
            onClick={() => toRegiter(values, setModal,setValues)}
            idelement={'StartSesion'}
            children={'Registrar'}
            size={'small'}
            disabled={!!alerts.length || statusBotton || ([
              values.option1,
              values.option2,
              values.option3,
              values.option4,
              values.option5
            ].filter(Boolean).length<3 ) ? true: false}
          />
          {/* <button>hols</button> */}
        </div>
      </div>
    </div>
  )
}
