import React from 'react'
import styled, { css } from 'styled-components'
import { theme, switchProp } from 'styled-tools'

const Content = styled.button`
  border-radius: ${theme('border.circle')};
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${theme('weight.regular')};

  ${switchProp('variant', {
    primary: css`
      color: ${theme('colors.white')};
      background-color: ${theme('gradients.default')};
    `,
    secondary: css`
      color: ${theme('colors.apple')};
      background-color: ${theme('colors.white')};
    `,
    flatten: css`
      color: ${theme('colors.white')};
      border: 1px solid ${theme('colors.white')};
      background: transparent;
    `
  })}

  &:focus {
    outline: none;
  }

  &:hover {
    transition: transform ease 0.2s;
    transform: scale(1.02);
  }
`

export const Button = ({ children, ...props }) => (
  <Content {...props}>{children}</Content>
)
