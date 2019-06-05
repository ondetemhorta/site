import { firebaseDb } from '../firebase'

export const model = {
  state: {
    data: []
  },
  reducers: {
    valorize: (state, data) => ({
      data
    })
  },
  effects: {
    async fetch() {
      const query = await firebaseDb
        .ref('gardens')
        .once('value')
        .then(snapshot => Object.values(snapshot.val()))

      this.valorize(query)
    }
  }
}
