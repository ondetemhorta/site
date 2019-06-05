import React from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'

import { Icon } from './Icon'

const Content = styled.div`
  width: 38px;
  height: 38px;
  background-color: ${theme('gradients.default')};
  border-radius: ${theme('border.circle')};
  z-index: ${theme('zindex.above')};
  position: absolute;
  right: 20px;
  bottom: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: transform ease 0.2s;
    transform: scale(1.1);
  }
`

export function RideUp({ onClick }) {
  return (
    <Content onClick={onClick}>
      <Icon name="up" width={18} height={18} />
    </Content>
  )
}
