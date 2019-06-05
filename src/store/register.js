import { firebaseDb } from '../firebase'

export const model = {
  state: {},
  reducers: {},
  effects: {
    async save(data) {
      firebaseDb.ref('/gardens').push(data)
    }
  }
}
