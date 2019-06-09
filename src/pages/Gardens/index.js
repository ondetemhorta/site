import React from 'react'
import styled from 'styled-components'

import Map from './components/Map'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export default function Gardens() {
  return (
    <Container>
      <Map />
    </Container>
  )
}
