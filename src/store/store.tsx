import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import { loginSlice } from './slices/slice-login'

const rootReducer = combineReducers({
  user: loginSlice.reducer
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    devTools: process.env.NODE_ENV !== "production",
  })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
