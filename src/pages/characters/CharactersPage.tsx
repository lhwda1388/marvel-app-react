import React from 'react'
import CharactersContainer from '../../containers/characters/CharactersContainer'

export type CharactersPageProps = {}

function CharactersPage(props: CharactersPageProps) {
  return <CharactersContainer {...props} />
}

export default CharactersPage
