import { UserInterface } from "@/models/usuario/interface"


export interface SignupResponseInterface {
  user: UserInterface
}

export interface SignupDataInterface {
  cpf: string
  name: string
  email: string
  color: string
}
