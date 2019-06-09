import React from 'react'
import styled from 'styled-components'
import media from 'styled-media-query'
import { theme } from 'styled-tools'
import { Link } from 'react-router-dom'

import { Button } from '../../components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  align-items: center;
  padding: 0 20px;

  .title {
    font-size: ${theme('font.size.fiftyFour')};
    font-weight: ${theme('weight.bold')};
    color: ${theme('gradients.default')};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .description {
    font-size: ${theme('font.size.eighteen')};
    font-weight: ${theme('weight.light')};
    color: ${theme('gradients.default')};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 40px;
  }

  ${media.lessThan('large')`
    max-width: 100%;
    text-align: center;

    .title {
      margin: 0 auto;
    }

    .buttons {
      width: 100%;
      display: flex;
      justify-content: space-around;
    }
`}

  ${media.lessThan('medium')`

    .title {
      font-size: ${theme('font.size.thirtyFive')};
      margin-bottom: 10px;
    }

    .buttons {
      flex-direction: column;
    }
`}
`

function Home() {
  return (
    <Container>
      <h1 className="title">Onde tem horta?</h1>
      <p className="description">
        Encontre uma horta comunitária próxima a você, ou caso você conheça uma
        horta que não está aqui, informe-nos.
      </p>

      <div className="buttons">
        <Button variant="primary">
          <Link to="/gardens">Ver hortas comunitárias</Link>
        </Button>
        <Button variant="flatten">
          <Link to="/register">Conheço uma horta que não está aqui</Link>
        </Button>
      </div>
    </Container>
  )
}

export default Home
