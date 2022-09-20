import { FC, useState, useEffect } from 'react'
import { Input } from '../../atoms/Input/Input'
import { Link } from 'react-router-dom'
import { Button } from '../../atoms/Button/Button'
import { useLogin } from './use-login/use-login'
import { Alert } from '../Alert/alert'
import { useValidator } from './use-login/use-validator'
import { useGetGlobal } from '../../../hooks/useForm/useApi/use-api'
import { Modal } from '../modal/modal'


export const Login = () => {
  const { toLogin, values, setValues, handleInputchange } = useLogin({
    mail: '',
    pass: '',
    alerts: [],
    checkUser: 'normal',
    statusBotton:false
  })

  const { checkUser, mail, pass, alerts,statusBotton } = values as {
    checkUser: string
    mail: string
    pass: string
    alerts: string[],
    statusBotton:boolean
  }

  const { AddAlert, DeleteAlert } = useValidator()

  const { isLoading, data } = useGetGlobal(`/users/exist-email?email=${mail}`, true) as {
    isLoading: boolean
    data: any
  }

  const [{ Visible, Message }, setModal] = useState({
    Visible: true,
    Message: '',
  })
  const CheckUser = () => {
    if (isLoading) return
    else {
      return data.exists
        ? setValues({ ...values, checkUser: 'normal' })
        : setValues({ ...values, checkUser: 'error' })
    }
  }
  //setValues({...values,checkUser:'normal'})
  useEffect(() => {
    if (mail.length > 1) CheckUser()
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
      console.log('quitado nume alert')
    }
  }, [pass, mail])

 
  return (
    <div className="contain">
       <Modal Visible={Visible} Message={Message} setModal={setModal} />
      <div className="login">
        
          <div className="login__header">
            <h3>Iniciar sesión</h3>
          </div>
          <div className="login__content-input">
            {/* <input value={values.mail} name="mail" onChange={handleInputchange} /> */}

            <div className="login__input-container">
              <Input
                autofocus={true}
                errorHelper={'Usuario no existe'}
                idElement={'mail'}
                label={'Correo electronico'}
                min={5}
                placeholder={'Ingresa tu correo'}
                size={'large'}
                state={checkUser}
                value={mail}
                name={'mail'}
                eventToChange={handleInputchange}
                className={'login__input'}
              />

          {/* {mailError && <span className="login__email-error">{mailError}</span>} */}
            </div>
          </div>
          <div className="login__content-input">
            {/* <input value={values.mail} name="mail" onChange={handleInputchange} /> */}

            <div className="login__input-container">
              <Input
                autofocus={true}
                errorHelper={'Contraseña no valida'}
                idElement={'Input-user'}
                label={'Contraseña'}
                min={5}
                placeholder={'Ingresa tu contraseña'}
                size={'large'}
                state={alerts.length < 1 ? 'normal' : 'error'}
                value={pass}
                name={'pass'}
                eventToChange={handleInputchange}
              />
              {/* {passError && <span className="login__email-error">{passError}</span>} */}
              <Alert alerts={alerts} />
            </div>
          </div>

          <div className="login__footer">
            <Link role="redirect" to="/register">
              <span className="login__footer--action">Registrarse aquí</span>
            </Link>
            <div className={'login__footer--Button'}>

            <Button
              onClick={() => toLogin(values.mail, values.pass,  setModal,setValues)}
              idelement={'StartSesion'}
              children={'Iniciar Sesión'}
              size={'small'}
              disabled={alerts.length > 1 || mail.length < 1 || statusBotton ? true : false}
              
              //  className={'login__footer--Button'}
            />
            </div>
          </div>
        
      </div>
    </div>
  )
}
