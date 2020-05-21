import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to="/">Characters</Link>
      <Link to="/comics">Comics</Link>
    </div>
  )
}

export default Header
