import react from 'react'
import ReactDOM from 'react-dom'

import css from '../stylus/main.styl'

import Header from './Header'
import Filter from './Filter'
import Map from './Map'
import About from './About'
import Questions from './Questions'
import Contact from './Contact'
import Footer from './Footer'

const App = props => (
  <div>
    <Header />
    <Filter />
    <Map />
    <About />
    <Questions />
    <Contact />
    <Footer />
  </div>
)

export default App
