import { FC } from 'react'
import './alert.scss'

interface Props {
  alerts: string[]
}

export const Alert: FC<Props> = ({ alerts }) => {
  return (
    <div className="login__alert-container">
      {alerts.map((elem: any) => (
        <span key={elem} className="login__span--color">
          {elem}
        </span>
      ))}
    </div>
  )
}
