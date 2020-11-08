import { ActionType } from 'typesafe-actions/dist/type-helpers'
import types from './mission.types'

const addAstronaut = ({ firstName, lastName }: { firstName: string; lastName: string }) => ({
  type: types.ADD_ASTRONAUT,
  payload: { firstName, lastName },
})

const removeAstronaut = () => ({
  type: types.REMOVE_ASTRONAUT,
})

export default {
  addAstronaut,
  removeAstronaut,
}

export type MissionAction = ActionType<typeof addAstronaut | typeof removeAstronaut>
