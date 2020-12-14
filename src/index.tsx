import React from 'react'
import { Provider } from 'react-redux'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import missionReducer from './FunctionalComponents/Mission/duck/mission.reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './FunctionalComponents/Mission/Intercommunicator/duck/intercommunicator.operations'
import intercommunicatorReducer from './FunctionalComponents/Mission/Intercommunicator/duck/intercommunicator.reducer'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = composeWithDevTools({
  serialize: true,
})

const reducers = combineReducers({ intercommunicatorReducer, missionReducer })
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

sagaMiddleware.run(rootSaga)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
