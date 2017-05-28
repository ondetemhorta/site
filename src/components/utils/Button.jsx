import React from 'react'

const Button = props => (
  <a className={`button-${props.color} button`}>{props.text}</a>
)

export default Button
