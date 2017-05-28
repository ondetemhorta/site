import React from 'react'

import Logo from '../images/logo.png'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="copyright">
        <p>Ondetemhorta, um serviço sem fins lucrativos</p>
      </div>
      <div className="logo">
        <a href=""><img src={Logo} alt="Ondetemhorta" /></a>
      </div>
    </div>
  </footer>
)

export default Footer
