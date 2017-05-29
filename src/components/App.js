import React from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import css from '../styles/main.css'

import Header from './Header'
import Filter from './Filter'
import GardensMap from './GardensMap'
import About from './About'
import Questions from './Questions'
import Contact from './Contact'
import Footer from './Footer'

const App = props => (
  <div>
    <Header />
    <Filter />
    <GardensMap />
    <About />
    <Questions />
    <Contact />
    <Footer />
  </div>
)

const mapStateToProps = () => ({

})

const mapDispatchToProps = () => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App)
