import React from 'react'
import styled from 'styled-components'
import { theme } from 'styled-tools'
import { Element, scroller } from 'react-scroll'

import { Button } from '../../components'

import logo from '../../images/logo.svg'
import Map from './components/Map'

const Header = styled.div`
  height: 100vh;
  padding: 0 110px;
  background: ${theme('gradients.default')};
`

const Logo = styled.img`
  max-width: 140px;
  margin-top: 30px;
`

const About = styled.div`
  max-width: 470px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .title {
    color: ${theme('colors.white')};
    font-size: ${theme('font.size.fiftyFour')};
    font-weight: ${theme('weight.bold')};
  }

  .description {
    font-size: ${theme('font.size.eighteen')};
    font-weight: ${theme('weight.light')};
    color: ${theme('colors.white')};
    margin-bottom: 40px;
  }

  .toMap {
    display: block;
    margin-bottom: 15px;
  }
`

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 150px;
`

function Home() {
  const toMap = () =>
    scroller.scrollTo('map', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })

  return (
    <>
      <Element id="home">
        <Header>
          <Logo src={logo} />

          <Content>
            <About>
              <h1 className="title">Onde tem horta?</h1>
              <p className="description">
                Encontre uma horta comunitária próxima a você, ou caso você
                conheça uma horta que não está aqui, informe-nos.
              </p>

              <div className="buttons">
                <Button className="toMap" variant="secondary" onClick={toMap}>
                  Ver hortas comunitárias
                </Button>
                <Button variant="flatten">
                  Conheço uma horta que não está aqui
                </Button>
              </div>
            </About>
          </Content>
        </Header>
      </Element>

      <Element id="map">
        <Map />
      </Element>
    </>
  )
}

export default Home
