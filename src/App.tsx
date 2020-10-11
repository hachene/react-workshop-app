import React from 'react'
import './App.css'
import { PlanetarySystem } from './ClassComponents/PlanetarySystem/Planet/PlanetarySystem'
import { Mission } from './FunctionalComponents/Mission/Mission'

function App() {
  return (
    <div className="App">
      <PlanetarySystem name="Solar System" />
      <Mission />
    </div>
  )
}

export default App
