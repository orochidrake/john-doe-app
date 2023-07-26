import { toSnake } from '@/utils/helpers/normalizeAttr'
import User from '.'
import { UserInterface } from './interface'

export default class UserCreator {
  static factory(data:any): UserInterface {
    const c = new User()

    Object.keys(c).forEach((att) => {

      if (data[att]) {
        Object.defineProperty(c, att, { value: data[att] })
        return
      }

      if (data[toSnake(att)]) {
        Object.defineProperty(c, att, { value: data[toSnake(att)] })
      }
    })

    return c
  }
}
