import React from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import { Link as Linkable, withRouter } from 'react-router-dom'
import media from 'styled-media-query'

import logoDefault from '../images/logo.svg'
import logoMobile from '../images/icon.svg'

const Logo = styled.img`
  cursor: pointer;
  max-width: 30px;

  ${media.greaterThan('medium')`
    max-width: 100px;
  `}
`

const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;

  background: ${theme('gradients.default')};
`

const Link = styled(Linkable)`
  color: ${theme('colors.white')};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${theme('weight.light')};
  margin-left: 20px;
  font-size: ${theme('font.size.fourteen')};
  cursor: pointer;
`

const Nav = styled.ul``

const Content = styled.div`
  width: 100%;
  height: calc(100vh - 60px);
`

const isMobile = () => window.innerWidth < 768

function Header({ children, history }) {
  const toHome = () => history.push('/')

  return (
    <>
      <Container>
        <Logo onClick={toHome} src={isMobile() ? logoMobile : logoDefault} />

        <Nav>
          <Link to="/gardens">Hortas</Link>
          <Link to="/register">Nova horta</Link>
        </Nav>
      </Container>
      <Content>{children}</Content>
    </>
  )
}

export default withRouter(Header)
