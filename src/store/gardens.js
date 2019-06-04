import { firebaseDb } from '../firebase'

export const model = {
  state: {},
  reducers: {},
  effects: {
    async save(data) {
      const reference = firebaseDb.ref('/gardens')

      reference.push(data)
    }
  }
}
