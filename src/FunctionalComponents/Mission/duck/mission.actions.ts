import { ActionType, createAction } from 'typesafe-actions'

export const addAstronaut = createAction('mission/ADD_ASTRONAUT')<{
  firstName: string
  lastName: string
}>()

export const removeAstronaut = createAction('mission/ADD_ASTRONAUT')<{
  firstName: string
  lastName: string
}>()

export type MissionAction = ActionType<typeof addAstronaut | typeof removeAstronaut>
