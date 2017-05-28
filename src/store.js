import { createStore, applyMiddleware } from 'redux'
import { reduxFirebase } from 'react-redux-firebase'
import { createLogger } from 'redux-logger'

import reducers from './reducers'

const middlewares = applyMiddleware(promise(), createLogger())

export default createStore(reducers, middlewares)