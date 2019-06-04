import { init } from '@rematch/core'
import createRematchPersist from '@rematch/persist'

import { model as auth } from './auth'
import { model as gardens } from './gardens'

const persist = createRematchPersist({
  version: 1
})

export const store = init({
  models: {
    auth,
    gardens
  },
  plugins: [persist]
})
