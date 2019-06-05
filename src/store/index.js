import { init } from '@rematch/core'
import createRematchPersist from '@rematch/persist'

import { model as auth } from './auth'
import { model as gardens } from './gardens'
import { model as register } from './register'

const persist = createRematchPersist({
  version: 1
})

export const store = init({
  models: {
    auth,
    gardens,
    register
  },
  plugins: [persist]
})
