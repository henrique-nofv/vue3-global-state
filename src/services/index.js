import githubService from './github'
import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://api.github.com'
})

export default {
  github: githubService(httpClient)
}
