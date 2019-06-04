import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { getPersistor } from '@rematch/persist'
import { PersistGate } from 'redux-persist/integration/react'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { store } from './store'
import { tokens } from './components'

import Home from './pages/Home'
import Register from './pages/Register'

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  h1,
  p,
  button {
    font-family: 'Lato', sans-serif;
  }
`

const Main = (
  <>
    <GlobalStyle />
    <ThemeProvider theme={tokens}>
      <Provider store={store}>
        <PersistGate persistor={getPersistor()}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/register" component={Register} />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </>
)

render(Main, document.getElementById('root'))
