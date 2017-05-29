import React from 'react'

const Input = props => (
  <div className={`${props.name} input-${props.color} input-group`}>
    <input className="input-field" type={props.type} required />
    <label className="input-label">{props.label}</label>
  </div>
)

export default Input
