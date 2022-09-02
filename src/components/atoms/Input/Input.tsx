import { FC } from 'react'

type InputSize = 'extra-small' | 'large' | 'medium' | 'small'
type InputStatus = 'disabled' | 'error' | 'normal' | 'success'
interface InputProps {
  autofocus?: boolean
  errorHelper: string
  idElement: string
  label: string
  min: number
  placeholder: string
  showPasswordText?: string
  size: InputSize
  state: InputStatus
  tooltip?: string
  value: string
  name: string
  className?: string
  eventToChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = (props: InputProps) => {
  return (
    <pichincha-input
      className={props.className}
      autofocus={props.autofocus}
      errorHelper={props.errorHelper}
      idElement={props.idElement}
      label={props.label}
      min={props.min}
      placeholder={props.placeholder}
      size={props.size}
      state={props.state}
      tooltip={props.tooltip}
      value={props.value}
      name={props.name}
      ichange={props.eventToChange}
    />
  )
}
