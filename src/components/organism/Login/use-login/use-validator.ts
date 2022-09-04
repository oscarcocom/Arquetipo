import { useEffect } from 'react'

export const useValidator = <T extends any>() => {
  const AddAlert = (alerts: string[], setValues: (par: any) => void, message: string) => {
    alerts.includes(message)
      ? null
      : setValues((f: any) => ({
          ...f,
          alerts: [...f.alerts, message] as any
        }))
  }

  const DeleteAlert = (alerts: string[], setValues: (par: any) => void, message: string) => {
    alerts.includes(message)
      ? setValues((d: any) => ({
          ...d,
          alerts: alerts.filter((elem) => elem !== message) as any
        }))
      : null
   
    //       ...d,)
  }

  return {
    AddAlert,
    DeleteAlert
  }
}
