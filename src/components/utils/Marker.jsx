import React from 'react'

const Marker = props => (
  <div className="marker">
    <div className="marker-top">
      <h3 className="marker-name-label">Nome da horta</h3>
      <h3 className="marker-name-value">{props.name}</h3>
    </div>

    <div className="marker-bottom">
      <h3 className="marker-person-label">Organizada por</h3>
      <h3 className="marker-person-value">{props.person}</h3>

      <h3 className="marker-phone-label">Para mais informações</h3>
      <h3 className="marker-phone-value">{props.phone}</h3>
    </div>
  </div>
)

export default Marker
