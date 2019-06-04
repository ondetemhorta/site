import { firebaseAuth, firebaseProvider, firebaseDb } from '../firebase'

export const model = {
  state: {
    isAdmin: false
  },
  reducers: {
    login: (state, data) => data
  },
  effects: {
    async doLogin() {
      const logged = await firebaseAuth.signInWithPopup(firebaseProvider)

      const query = await firebaseDb
        .ref(`users/${logged.user.uid}`)
        .once('value')
        .then(snapshot => snapshot.val())

      this.login({
        email: query.email,
        isAdmin: query.isAdmin
      })
    }
  }
}
