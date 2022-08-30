import { Account, Action } from '../../../services/user.service'
import { LOGIN_USER } from '../../actions/login/login.action'

const InitialState = {
  mail: '',
  password: ''
} as Account

export function loginReducer(state = InitialState, action = {} as Action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        state: action.payload
      }

    default:
      return state
  }
}
