import { FormEvent, useState } from 'react'
import GlobalStyles from '@/styles/global'
import Swal from 'sweetalert2'
import * as S from './styles'
import HTTP from '@/services/http/http';
import Button from '../Button';
import Input from '../Input';

import { SignupDataInterface, SignupResponseInterface } from './interface'
import { removeMaskCpf } from '@/utils/helpers/mask';
import cpfjIsValid from '@/utils/validators/cpf'
import signupValidator from './validator'

declare global {
  interface Window {
    dataLayer: any
  }
}

const signup = async (
  data: SignupDataInterface
): Promise<SignupResponseInterface> => {
  if (!data.name || !data.cpf || !data.email) {
    return new Promise((resolve, reject) => resolve(http.response.body))
  }

  const http = new HTTP()

  if (
    !http.createRequest('POST', `http://localhost:3000/user`, {
      name: data.name,
      cpf: removeMaskCpf(data.cpf),
      email: data.email,
      color: data.color ? data.color : "FFFFFF"
    })
  ) {
    return new Promise((resolve, reject) => reject(http.errorMessage))
  }

  if (!(await http.sendRequest())) {
    return new Promise((resolve, reject) => reject(http.errorMessage))
  }

  return new Promise((resolve, reject) => resolve(http.response.body))
}


export default function FormComponent() {

  const [form, setForm] = useState({
    name: '',
    cpf: '',
    email: '',
    color: '',
  })

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    console.log(ev)

    if (!cpfjIsValid(removeMaskCpf(form.cpf))) {
      const message =
        'O CPF é obrigatório!'
      Swal.fire({
        text: message,
        icon: 'warning'
      })
      return false
    }

    const response = signupValidator(form)
    if (response.hasError) {
      response.client.showErrors()
      return false
    }

    Swal.fire({
      text: 'Criando Cadastro',
      showConfirmButton: false
    })

    signup(form)
      .then((data: SignupResponseInterface) => {
        console.log(data)

        Swal.fire({
          text: 'Cadastro criado com sucesso!',
          icon: 'success'
        }).then((result: any) => {
          // Reload the Page
          location.reload();
        });

      })
      .catch((err) => {
        Swal.fire({
          text: 'Ocorreu um erro durante o processamento dos dados, verifique os dados tente novamente!',
          icon: 'warning'
        }).then((result: any) => {
          // Reload the Page
          location.reload();
        });
      })
  }

  return (
    <>
      <GlobalStyles />
      <S.Container>
        <S.TitleContainer>
          <div className="title">
            <h2>Faça Seu Cadastro</h2>
          </div>
        </S.TitleContainer>
        <S.Content>
          <S.Form onSubmit={handleSubmit}>
            <Input
              label="Nome completo"
              dataType="text"
              handler={(name: string) => {
                setForm({ ...form, name })
              }}
            />
            <Input
              label="CPF"
              dataType="cpf"
              handler={(cpf: string) => {
                setForm({ ...form, cpf })
              }}
            />
            <Input
              label="E-mail"
              dataType="email"
              handler={(email: string) => {
                setForm({ ...form, email })
              }}
            />
            <Input
              label="Sua Cor Favorita"
              dataType="color"
              handler={(color: string) => {
                setForm({ ...form, color })
              }}
            />
            <Button label="Continuar" type="submit" />
          </S.Form>
        </S.Content>
      </S.Container>
    </>
  )
}
