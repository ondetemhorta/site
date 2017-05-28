import { combineReducers } from 'redux'
import { firebaseStateReducer as firebase } from 'react-redux-firebase'

const reducers = combineReducers({
  firebase
})

export default reducers
