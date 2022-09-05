import { GithubRepositoryInterface } from '../interfaces/GithubRepository'
import { AxiosResponse } from 'axios'
import { GenericService } from './GenericService'

class GithubService extends GenericService {
  constructor() {
    super('/users/hirokirigaya')
  }
  async getAllRepositories(): Promise<
    AxiosResponse<GithubRepositoryInterface[]>
  > {
    return await this.http.get<GithubRepositoryInterface[]>('/repos')
  }
}

export default new GithubService()