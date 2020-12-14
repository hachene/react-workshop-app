import { getType } from 'typesafe-actions'
import { addAstronaut, MissionAction, removeAstronaut } from './mission.actions'
import { MissionState } from './mission.types'

const initialState: MissionState = {
  astronauts: [],
}

const missionReducer = (state: MissionState = initialState, action: MissionAction): MissionState => {
  switch (action.type) {
    case getType(addAstronaut): {
      return {
        ...state,
        astronauts: [...state.astronauts, action.payload],
      }
    }
    case getType(removeAstronaut): {
      const newAstronauts = [...state.astronauts]
      newAstronauts.pop()
      return { ...state, astronauts: newAstronauts }
    }
    default:
      return state
  }
}

export default missionReducer
