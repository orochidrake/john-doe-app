
export interface UserInterface {
  id: string
  name: string
  cpf: string
  email: string
  color: string
}

export interface UserSignupResponseInterface {
  user: UserInterface
}
