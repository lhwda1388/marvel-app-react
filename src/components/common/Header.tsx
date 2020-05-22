import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {
  return (
    <header>
      <Link to="/">Characters</Link>
      <Link to="/comics">Comics</Link>
    </header>
  )
}

export default Header
