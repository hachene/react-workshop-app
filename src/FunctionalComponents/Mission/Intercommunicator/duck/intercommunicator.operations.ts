import { takeLatest, call, put, all, fork } from 'redux-saga/effects'
import { getType } from 'typesafe-actions'
import { getNextNumber } from '../../../../FakeServer/AlienSpacecraft'
import { communicateWithAliens } from './intercommunicator.actions'

// Keep an eye on the redux cycle. If we see a "communicateWithAliens.request" -> it'll trigger a "requestCommunicationEffect" (a new Saga)
function* watchCommunicationRequestStart() {
  yield takeLatest(getType(communicateWithAliens.request), requestCommunicationEffect)
}

// This new Saga, will call our fake service and when we have the result, we will throw a new action into the redux cycle, with a parameter, the new value got from server
function* requestCommunicationEffect() {
  const numberFromSpace = yield call(getNextNumber)
  yield put(communicateWithAliens.success({ numberFromSpace }))
}

// Explain how this can be managed through the "appSaga" approach
export const rootSaga = function* root() {
  yield all([fork(watchCommunicationRequestStart)])
}
