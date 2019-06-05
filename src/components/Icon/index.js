import React, { lazy, Suspense, memo } from 'react'
import styled from 'styled-components'

import { tokens } from '../tokens'

const { colors } = tokens

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1)

const load = name => lazy(() => import(`./Icons/${capitalize(name)}`))

const Container = styled.div`
  display: inline-block;
`

export const Icon = memo(({ name, onClick, ...props }) => {
  const Iconable = load(name)

  return (
    <Container onClick={onClick}>
      <Suspense fallback={null}>
        <Iconable {...props} />
      </Suspense>
    </Container>
  )
})

Icon.defaultProps = {
  color: colors.white
}
