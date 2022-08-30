import React from 'react'
import './App.css'
import { Button } from './components/atoms/Button/Button'
import { Login } from './components/atoms/Login/login'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>BIENVENIDO</h1>
      </header>
      <Button color="primary">Hazme click</Button>
    </div>
  )
}

export default App
