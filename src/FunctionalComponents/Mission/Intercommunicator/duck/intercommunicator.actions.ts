import { ActionType, createAsyncAction } from 'typesafe-actions'

export const communicateWithAliens = createAsyncAction(
  'intercommunicator/COMMUNICATION_REQUEST',
  'intercommunicator/COMMUNICATION_SUCCESS',
  'intercommunicator/COMMUNICATION_FAILURE'
)<
  undefined,
  {
    numberFromSpace: number
  },
  Error
>()

export type IntercommunicatorAction = ActionType<typeof communicateWithAliens>
