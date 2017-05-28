import React from 'react'
import GoogleMapReact from 'google-map-react'

const GardensMap = props => (
  <section className="map">
    <GoogleMapReact
      defaultCenter={props.center}
      defaultZoom={props.zoom}>
    </GoogleMapReact>
  </section>
)

GardensMap.defaultProps = {
  center: {
    lat: 59.95,
    lng: 30.33
  },
  zoom: 11
}

export default GardensMap
