import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Router } from './router/router'
import { combineReducers, createStore } from 'redux'
import { loginReducer } from './store/reducers/login/loginReducer'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const reducers = combineReducers({
  loginReducer
})
const store = createStore(reducers)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
