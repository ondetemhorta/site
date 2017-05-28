import React from 'react'

import Logo from '../images/logo.png'
import Background from '../images/background.jpg'
import Button from './utils/Button'

const Header = () => (
  <header id="header" className="header" style={style}>
    <div className="">
      <nav className="navigation container" data-scroll-header>
        <div className="logo">
          <a href=""><img src={Logo} alt="" /></a>
        </div>

        <ul className="menu">
          <li className="menu-item"><a className="menu-link" data-scroll href="#header">Home</a></li>
          <li className="menu-item"><a className="menu-link" data-scroll href="#about">Sobre</a></li>
          <li className="menu-item"><a className="menu-link" data-scroll href="#questions">Dúvidas</a></li>
          <li className="menu-item"><a className="menu-link" data-scroll href="#contact">Contato</a></li>
          <li className="menu-item"><Button color="white" text="Cadastre sua horta" /></li>
        </ul>
      </nav>

      <div className="more">
        <h1 className="title">Encontre uma horta comunitária próxima a você.</h1>
        <Button color="white" text="Encontrar uma horta" />
      </div>
    </div>
  </header>
)

export default Header
