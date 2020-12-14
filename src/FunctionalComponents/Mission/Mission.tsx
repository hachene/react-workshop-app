import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Astronaut } from './Astronaut/Astronaut'
import { Spacecraft } from './Spacecraft/Spacecraft'
import { addAstronaut } from './duck/mission.actions'
import { MissionState } from './duck/mission.types'

export const Mission = () => {
  const [spaceCraftState, setSpaceCraftState] = useState('')

  const dispatch = useDispatch()

  const handleAddAstronaut = () => {
    dispatch(addAstronaut({ firstName: 'Valentina', lastName: '' }))
  }

  const addSpaceCraft = () => {
    setSpaceCraftState('Sputnik 1')
  }

  // EXPLAIN: We shouldn't be using this line
  const astronauts = useSelector<MissionState, MissionState['astronauts']>(state => state.astronauts)

  return (
    <div>
      <h1>Mission 1</h1>
      <button onClick={handleAddAstronaut}>Add astronaut</button>
      <button onClick={addSpaceCraft}>Add spacecraft</button>

      {astronauts &&
        astronauts.map(({ firstName, lastName }) => <Astronaut firstName={firstName} lastName={lastName} />)}

      {spaceCraftState !== '' && (
        <div>
          <p>Will travel on a</p>
          <Spacecraft name={spaceCraftState} />
        </div>
      )}
    </div>
  )
}

// EXPLAIN: We shouldn't be using this maps

// const mapStateToProps = (state: MissionState) => ({astronauts: state.astronauts})

// const mapDispatchToProps = (dispatch) => ({onAstronautAdded: ()=> dispatch({type: actionTypes.ADD_ASTRONAUT})})
