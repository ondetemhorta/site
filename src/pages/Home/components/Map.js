import React, { useEffect } from 'react'
import styled from 'styled-components'
import v4 from 'uuid/v4'
import L from 'leaflet'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { scroller } from 'react-scroll'

import { Map as Mapeable, TileLayer, Marker } from 'react-leaflet'

import { RideUp, Icon } from '../../../components'

const Mapping = styled(Mapeable)`
  width: 100%;
  height: 100vh;
`

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;

  .icon {
    border: none;
    background: transparent;
  }
`

const IconMarker = new L.Icon({
  iconUrl: require('../../../images/marker.svg'),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(45, 75),
  className: 'icon'
})

export function Map({ gardens, fetch }) {
  const toTop = () =>
    scroller.scrollTo('home', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })

  useEffect(() => {
    fetch()
  }, [])

  return (
    <Container>
      <RideUp onClick={toTop} />

      <Mapping
        center={{ lat: -23.421, lng: -51.9331 }}
        zoomControl={false}
        attributionControl={false}
        zoom={14}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.se/hydda/full/{z}/{x}/{y}.png" />

        {gardens.map(({ latitude, longitude }) => (
          <Marker
            key={v4()}
            icon={IconMarker}
            position={[latitude, longitude]}
          />
        ))}
      </Mapping>
    </Container>
  )
}

Map.defaultProps = {
  gardens: []
}

Map.propTypes = {
  gardens: PropTypes.array.isRequired
}

const mapState = state => ({
  gardens: state.gardens.data
})

const mapDispatch = dispatch => ({
  fetch: dispatch.gardens.fetch
})

export default connect(
  mapState,
  mapDispatch
)(Map)
