import React from 'react'
import { connect } from 'react-redux'
import { signInWithFacebook } from '../actions/authActions'

import logo from '../images/logo.png'
import Button from './utils/Button'

const Header = props => (
  <header id="header" className="header">
    <div className="">
      <nav className="navigation container" data-scroll-header>
        <div className="logo">
          <a href=""><img src={logo} alt="" /></a>
        </div>

        <ul className="menu">
          <li className="menu-item"><a className="menu-link" data-scroll href="#header">Home</a></li>
          <li className="menu-item"><a className="menu-link" data-scroll href="#about">Sobre</a></li>
          <li className="menu-item"><a className="menu-link" data-scroll href="#questions">Dúvidas</a></li>
          <li className="menu-item"><a className="menu-link" data-scroll href="#contact">Contato</a></li>
          <li className="menu-item" onClick={props.signIn}><Button color="white" text="Cadastre sua horta" /></li>
        </ul>
      </nav>

      <div className="more">
        <h1 className="title">Encontre uma horta comunitária próxima a você.</h1>
        <Button color="white" text="Encontrar uma horta" />
      </div>
    </div>
  </header>
)

const mapDispatchToProps = dispatch => ({
  signIn() {
    dispatch(signInWithFacebook())
  }
})

export default connect(null, mapDispatchToProps)(Header)
