import React from 'react'

import Input from './utils/Input'
import Button from './utils/Button'

const Filter = props => (
  <section className="filter">
    <div className="container">
      <Input label="Informe sua cidade" name="city" color="white" />
      <Button color="white" text="Procurar horta" />
      <Button color="white" text="Mostrar minhas hortas" />
    </div>
  </section>
)

export default Filter
