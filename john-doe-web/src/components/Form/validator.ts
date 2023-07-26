import Errors from '@/services/errors'
import { ErrorsInterface } from '@/services/errors/interface'
import cpfIsValid from '@/utils/validators/cpf'
import emailIsValid from '@/utils/validators/email'
import { SignupDataInterface } from './interface'

export interface SignupValidatorResponseInterface {
  hasError: boolean
  client: ErrorsInterface
}

export default function signupValidator(
  form: SignupDataInterface
): SignupValidatorResponseInterface {
  const response: SignupValidatorResponseInterface = {
    hasError: false,
    client: new Errors()
  }

  cpfValidation(form, response)
  nameValidation(form, response)
  emailValidation(form, response)
  // colorValidation(form, response)

  if (response.hasError) {
    response.client.setTitle('Existem erros no formulário')
  }

  return response
}

function cpfValidation(
  { cpf }: SignupDataInterface,
  response: SignupValidatorResponseInterface
) {
  if (cpf === undefined) {
    return
  }

  if (!cpf.length) {
    response.hasError = true
    response.client.addError({
      field: 'cpf',
      message: 'cpf obrigatório'
    })

    return
  }

  if (!cpfIsValid(cpf)) {
    response.hasError = true
    response.client.addError({
      field: 'cpf',
      message: 'cpf inválido'
    })

    return
  }
}

function nameValidation(
  { name }: SignupDataInterface,
  response: SignupValidatorResponseInterface
) {
  if (name === undefined) {
    return
  }

  if (!name.length) {
    response.hasError = true
    response.client.addError({
      field: 'Nome Completo',
      message: 'Nome obrigatório'
    })

    return
  }
}

function emailValidation(
  { email }: SignupDataInterface,
  response: SignupValidatorResponseInterface
) {
  if (email === undefined) {
    return
  }

  if (!email.length) {
    response.hasError = true
    response.client.addError({
      field: 'E-mail',
      message: 'E-mail obrigatório'
    })

    return
  }

  if (!emailIsValid(email)) {
    response.hasError = true
    response.client.addError({
      field: 'E-mail',
      message: 'E-mail inválido'
    })

    return
  }
}

