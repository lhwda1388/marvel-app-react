import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <header>
      <div className="header__in">
        <h1 className="logo">
          <i className="fas fa-hat-wizard"></i>
        </h1>
      </div>
      <nav className="navbar">
        <Link to="/">Characters</Link>
        <Link to="/comics">Comics</Link>
      </nav>
    </header>
  )
}

export default Header
