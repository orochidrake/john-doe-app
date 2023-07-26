export interface HTTPInterface {
  request: HTTPRequestInterface
  response: HTTPResponseInterface
  errorMessage: string
  createRequest(method: string, url: string, body: any): boolean
  sendRequest(): Promise<boolean>
  setHeader(header: HTTPHeaderInterface): boolean
}

export interface HTTPRequestInterface {
  method: string
  url: string
  body: any
  headers: Array<HTTPHeaderInterface>
  ready: boolean
  errorMessage: string
  sendRequest(): Promise<HTTPResponseInterface>
  setHeader(header: HTTPHeaderInterface): boolean
}

export interface HTTPResponseInterface {
  status: number
  body: any
  message: string
  ok: boolean
}

export interface HTTPHeaderInterface {
  key: string
  value: string
}
