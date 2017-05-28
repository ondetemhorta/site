import React from 'react'

const TextArea = props => (
  <div className={`${props.name} textarea-${props.color} textarea-group`}>
    <textarea className="textarea-field" required></textarea>
    <label className="textarea-label">{props.label}</label>
  </div>
)

export default TextArea
