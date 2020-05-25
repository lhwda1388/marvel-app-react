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
      <div className="box-wrapper">
        <Link to={`/characters/${id}`}>
          <div className="img-box">
            <img src={thumbnail} alt={name} />
          </div>
          <div className="text-box">
            <span>{name}</span>
          </div>
        </Link>
      </div>
    </li>
  )
}

export default Character
