import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface InitialState {
  mail: string
  pass: string
}

const initialState: InitialState = {
  mail: 'userName@mail',
  pass: ''
}

export const loginSlice = createSlice({
  name: 'LOGIN_USER',
  initialState,
  reducers: {
    Login: (state, action: PayloadAction<object>) => {
      state: action.payload
    },
    logout: (state) => {
      // delete ssesion storage
    }
  }
})

// Action creators are generated for each case reducer function
export const { Login, logout } = loginSlice.actions

export default loginSlice.reducer
