import React from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'

const Content = styled.div`
  width: 35px;
  height: 35px;
  background-color: ${theme('gradients.default')};
  border-radius: ${theme('border.circle')};
  z-index: ${theme('zindex.above')};
  position: absolute;
  right: 20px;
  bottom: 20px;
  cursor: pointer;

  &:hover {
    transition: transform ease 0.2s;
    transform: scale(1.1);
  }
`

export function RideUp({ onClick }) {
  return <Content onClick={onClick}>a</Content>
}
