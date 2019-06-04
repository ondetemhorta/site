import firebase from 'firebase'

export const firebaseApp = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE
})

export const firebaseAuth = firebaseApp.auth()
export const firebaseDb = firebaseApp.database()
export const firebaseProvider = new firebase.auth.FacebookAuthProvider()
