import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL as string

export interface FirebaseWrapper<T> {
  data: T
}

export interface User {
  username: string
  email: string
  token: string
}

export interface createUser {
  status: string;
  id:     string;
}

export class UserService {
  static async getUsers() {
    const response = await axios.get<User[]>(API_URL)
    return response.data
  }
}

export interface Account {
  mail:  string
  password:  string
}

export interface Action {
  type: string
  payload: string | Account
}
