import React from 'react'
import './App.css'
import { PlanetarySystem } from './ClassComponents/PlanetarySystem/Planet/PlanetarySystem'
import { RequesterContainer } from './FunctionalComponents/Mission/Intercommunicator/Requester/Requester.container'
import { ViewerContainer } from './FunctionalComponents/Mission/Intercommunicator/Viewer/Viewer.container'
import { Mission } from './FunctionalComponents/Mission/Mission'

function App() {
  return (
    <div className="App">
      <PlanetarySystem name="Solar System" />
      <Mission />
      <RequesterContainer />
      <ViewerContainer />
    </div>
  )
}

export default App
