import React from 'react'
import './Characters.scss'
import Character from './Character'

export type CharactersProps = {
  characters: Array<any>
}

function Characters(props: CharactersProps) {
  return (
    <>
      <ul className="characters">
        {props.characters.map((character: any) => {
          return (
            <Character
              key={character.id}
              id={character.id}
              thumbnail={
                character.thumbnail.path + '.' + character.thumbnail.extension
              }
              name={character.name}
            />
          )
        })}
      </ul>
    </>
  )
}

export default Characters
