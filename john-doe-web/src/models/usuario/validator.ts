import cpfIsValid from '@/utils/validators/cpf'
import emailIsValid from '@/utils/validators/email'
import { UserInterface } from './interface'

interface signupValidatorResponseInterface {
  message: string
  error: boolean
}
export const signupValidator = (
  c: UserInterface
): signupValidatorResponseInterface => {
  if (c.cpf.length == 0) {
    return {
      message: 'cpf é obrigatório',
      error: true
    }
  }

  if (!cpfIsValid(c.cpf)) {
    return {
      message: 'cpf inválido',
      error: true
    }
  }

  if (c.name.length == 0) {
    return {
      message: 'Nome muito curto',
      error: true
    }
  }

  if (c.name.split(' ').length < 2) {
    return {
      message: 'Nome completo é obrigatório',
      error: true
    }
  }

  if (c.email.length == 0) {
    return {
      message: 'E-mail é obrigatório',
      error: true
    }
  }

  if (!emailIsValid(c.email)) {
    return {
      message: 'E-mail inválido',
      error: true
    }
  }

  return { message: '', error: false }
}
