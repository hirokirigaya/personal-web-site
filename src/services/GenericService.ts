import axios, { AxiosInstance }from 'axios'

export class GenericService {
  protected readonly http: AxiosInstance
  constructor(relativePath: string = '') {
    const baseURL = `https://api.github.com${relativePath}`
    this.http = axios.create({
      baseURL,
    })
  }
}
