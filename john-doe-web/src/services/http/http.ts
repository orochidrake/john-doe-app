import {
  HTTPHeaderInterface,
  HTTPInterface,
  HTTPRequestInterface,
  HTTPResponseInterface
} from './interface'

class HTTPRequest implements HTTPRequestInterface {
  public method: string
  public url: string
  public body: any
  public ready: boolean
  public headers: Array<HTTPHeaderInterface>
  public ok: boolean
  errorMessage: string

  constructor() {
    this.method = ''
    this.url = ''
    this.body = null
    this.ready = false
    this.errorMessage = ''
    this.ok = false
    this.headers = []
  }

  async sendRequest(): Promise<HTTPResponseInterface> {
    const response = new HTTPResponse()

    if (!this.ready) {
      response.message = 'request not ready to been sent'
      return response
    }

    const options: RequestInit = {
      method: this.method
    }

    if (this.body) {
      options.body = JSON.stringify(this.body)

      this.setHeader({ key: 'Content-Type', value: 'application/json' })
    }

    if (this.headers.length) {
      const headers: HeadersInit = new Headers()
      for (let i = 0; i < this.headers.length; i++) {
        headers.set(this.headers[i].key, this.headers[i].value)
      }
      options.headers = headers
    }

    const resp = await fetch(this.url, options)
    response.status = resp.status
    response.ok = resp.ok

    if (!resp.ok) {
      response.message = resp.statusText

      try {
        response.body = await resp.json()
      } catch (e) {
        console.log(e)
      }
    } else {
      if (resp.status != 204) {
        try {
          response.body = await resp.json()
        } catch (e) {
          console.log(e)
        }
      }
    }

    return response
  }

  setHeader(header: HTTPHeaderInterface): boolean {
    this.headers.push(header)
    return true
  }
}

class HTTPResponse implements HTTPResponseInterface {
  public status: number
  public body: any
  public message: string
  public ok: boolean

  constructor() {
    this.status = 0
    this.body = null
    this.message = ''
    this.ok = false
  }
}

export default class HTTP implements HTTPInterface {
  public request: HTTPRequestInterface
  public response: HTTPResponseInterface
  public errorMessage: string

  constructor() {
    this.request = new HTTPRequest()
    this.response = new HTTPResponse()
    this.errorMessage = ''
  }

  createRequest(method: string, url: string, body: any = null): boolean {
    if (method == '') {
      this.errorMessage = 'method can`t be empty'
      return false
    }

    this.request.method = method

    if (url == '') {
      this.errorMessage = 'url can`t be empty'
      return false
    }

    this.request.url = url

    if (body && typeof body != 'object') {
      this.errorMessage = 'body must be a object serializable'
      return false
    }

    this.request.body = body
    this.request.ready = true

    return true
  }

  async sendRequest(): Promise<boolean> {
    this.response = await this.request.sendRequest()
    if (!this.response.ok) {
      this.errorMessage = this.response.message
      return false
    }

    return true
  }

  setHeader(header: HTTPHeaderInterface): boolean {
    return this.request.setHeader(header)
  }
}
