import React, { useState } from 'react'
import { Astronaut } from './Astronaut/Astronaut'
import { Spacecraft } from './Spacecraft/Spacecraft'

export const Mission = () => {
  const [astronautsState, setAstronautStates] = useState({
    astronauts: [
      { firstName: 'Valentina', lastName: 'Tereshkova' },
      { firstName: 'Yuri', lastName: 'Gagarin' },
    ],
  })

  const [spaceCraftState, setSpaceCraftState] = useState('')

  const addAstronaut = () => {
    setAstronautStates({
      astronauts: [...astronautsState.astronauts, { firstName: 'Juan', lastName: 'Martínez' }],
    })
  }

  const addSpaceCraft = () => {
    setSpaceCraftState('Sputnik 1')
  }

  return (
    <div>
      <h1>Mission 1</h1>
      <button onClick={addAstronaut}>Add astronaut</button>
      <button onClick={addSpaceCraft}>Add spacecraft</button>
      <Astronaut
        firstName={astronautsState.astronauts[0].firstName}
        lastName={astronautsState.astronauts[0].lastName}
      />
      <Astronaut
        firstName={astronautsState.astronauts[1].firstName}
        lastName={astronautsState.astronauts[1].lastName}
      />
      {spaceCraftState !== '' && (
        <div>
          <p>Will travel on a</p>
          <Spacecraft name={spaceCraftState} />
        </div>
      )}
    </div>
  )
}
