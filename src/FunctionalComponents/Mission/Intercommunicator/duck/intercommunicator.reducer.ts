import { getType } from 'typesafe-actions'
import { IntercommunicatorAction, communicateWithAliens } from './intercommunicator.actions'
import { IntercommunicatorState } from './intercommunicator.types'

const initialState: IntercommunicatorState = []

const intercommunicatorReducer = (
  state: IntercommunicatorState = initialState,
  action: IntercommunicatorAction
): IntercommunicatorState => {
  switch (action.type) {
    case getType(communicateWithAliens.success): {
      return [...state, action.payload.numberFromSpace]
    }
    default:
      return state
  }
}

export default intercommunicatorReducer
