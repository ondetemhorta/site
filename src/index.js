import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase'

import App from './components/App'

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE
})


ReactDOM.render(<App />, document.getElementById('root'))