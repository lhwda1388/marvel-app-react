import React from 'react'
import { Link } from 'react-router-dom'

type CharacterProps = {
  id: number | string
  thumbnail: string
  name: string
}
function Character({ id, thumbnail, name }: CharacterProps) {
  return (
    <li>
      <Link to={`/characters/${id}`}>
        <div className="img-box">
          <img src={thumbnail} alt={name} />
        </div>
        <div className="text-box">
          <p>{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default Character
