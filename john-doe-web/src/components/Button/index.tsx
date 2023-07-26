import { ButtonContainer } from './style'

interface ButtonPropsInterface {
  label: string
  handler?: () => void
  type?: any
}

export default function Button({ label, handler, type }: ButtonPropsInterface) {
  return (
    <ButtonContainer>
      <button type={type || 'button'} onClick={handler}>
        {label}
      </button>
    </ButtonContainer>
  )
}
