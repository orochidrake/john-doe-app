import HTTP from '@/services/http/http'

import {UserInterface} from './interface'


export default class User implements UserInterface {
  id: string
  name: string
  cpf: string
  email: string
  color: string

  constructor() {
    this.id = ''
    this.name = ''
    this.cpf = ''
    this.email = ''
    this.color = ''
  }

}
