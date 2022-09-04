import { FC, HtmlHTMLAttributes, HTMLInputTypeAttribute, useEffect, useRef } from 'react'

type InputSize = 'extra-small' | 'large' | 'medium' | 'small'
type InputStatus = 'disabled' | 'error' | 'normal' | 'success' | string
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
  value: string | number
  name: string
  className?: string
  eventToChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: FC<InputProps> = (props: InputProps) => {
  const InputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    InputRef.current?.addEventListener('ichange', (event: any) => {
      props.eventToChange(event.detail)
    
    })

    return () => {
      InputRef.current?.addEventListener('eventValue', (event: any) => {
        props.eventToChange(event.detail)
        console.log(event)
        
      })
    }
  }, [InputRef])

  console.log(InputRef)
  return (
    <pichincha-input
      ref={InputRef}
      className={props.className}
      autofocus={props.autofocus}
      id-Element={props.idElement}
      label={props.label}
      min={props.min}
      placeholder={props.placeholder}
      size={props.size}
      state={props.state}
      tooltip={props.tooltip}
      value={props.value}
      name-element={props.name}
      show-icon-status={true}
      full-width={true}
      error-helper={props.errorHelper}
      // filter-regex='/[A-Z]/'
    
      
    />
  )
}
