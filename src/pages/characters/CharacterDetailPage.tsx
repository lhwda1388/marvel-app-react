import React from 'react'
import CharactersDetailContainer from '../../containers/characters/CharactersDetailContainer'

export type CharacterDetailPageProps = {}

function CharacterDetailPage(props: CharacterDetailPageProps) {
  return <CharactersDetailContainer {...props} />
}

export default CharacterDetailPage
