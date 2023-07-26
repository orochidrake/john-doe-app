import { useState, useEffect } from 'react'
import cpfIsValid from '@/utils/validators/cpf'
import emailIsValid from '@/utils/validators/email'
import {
  addMaskCpf,
} from '@/utils/helpers/mask'
import { Error, InputContainer } from './style'

interface InputComponent {
  label: string
  dataType: any
  initialValue?: any
  disabled?: boolean
  handler?: any
  onBlur?: any | null
  onFocus?: any | null
  customValidator?: (value: string) => string
}

export default function Input({
  label,
  dataType,
  handler,
  initialValue,
  onBlur,
  onFocus,
  disabled,
  customValidator
}: InputComponent) {
  const predefinedTypes: any = {
    cpf: {
      type: 'tel',
      initial: initialValue ? initialValue : '',
      validator: (value: string) => {
        if (!cpfIsValid(value)) {
          setError('CPF inválido')
          localStorage.setItem('errorForm', 'true')
        } else {
          setError('')
          localStorage.setItem('errorForm', 'false')
        }
      }
    },
    color: {
      type: 'color',
      initial: initialValue ? initialValue : '',
      validator: (value: string) => {
        if (customValidator) {
          const e = customValidator(value)
          setError(e)
        }
      }
    },
    text: {
      type: 'text',
      initial: initialValue ? initialValue : '',
      validator: (value: string) => {return} // eslint-disable-line
    },
    email: {
      type: 'email',
      initial: initialValue ? initialValue : '',
      validator: (value: string) => {
        if (!emailIsValid(value)) {
          setError('E-mail inválido')
          localStorage.setItem('errorForm', 'true')
        } else {
          setError('')
          localStorage.setItem('errorForm', 'false')
        }
      }
    }
  }

  const selectedType = predefinedTypes[dataType]
  const [value, setValue] = useState(selectedType.initial)

  useEffect(() => {
    if (handler) {
      handler(value)
    }
    selectedType.validator(value)
  }, [value]) // eslint-disable-line

  const [error, setError] = useState('')

  useEffect(() => {
    setError('')
  }, [])

  return (
    <>
      <InputContainer>
        <small>{label}</small>
        <input
          type={selectedType.type}
          value={value}
          onChange={(ev) => {
            if (dataType == 'cpf') {
              setValue(addMaskCpf(ev.target.value))
            } else if (dataType == 'email') {
              setValue(ev.target.value.toLowerCase())
            } else {
              setValue(ev.target.value)
            }
          }}
          disabled={disabled}
          onBlur={onBlur ? () => onBlur(value) : undefined}
          onFocus={onFocus ? () => onFocus(value) : undefined}
        />
      </InputContainer>
      <Error>{error}</Error>
    </>
  )
}
