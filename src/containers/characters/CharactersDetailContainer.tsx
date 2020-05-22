import React, { useState, useEffect } from 'react'
import CharacterDetail from '../../components/characters/CharacterDetail'
import { urlForCharacters, hash } from '../../contants/info'
import axios from 'axios'
import Loader from '../../components/common/Loader'

export type CharactersDetailContainerProps = {
  match?: any
}
function CharactersDetailContainer(props: CharactersDetailContainerProps) {
  const [character, setCharacter] = useState<any>()
  const [loaded, setLoaded] = useState<boolean>(false)
  const {
    match: {
      params: { id },
    },
  } = props

  useEffect(() => {
    fetchData()
  })
  const fetchData = async () => {
    const {
      data: {
        data: { results },
      },
    } = await axios.get(`${urlForCharacters}/${id}?${hash}`)
    setCharacter(results[0])
    setLoaded(true)
  }

  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        <CharacterDetail
          name={character.name}
          desc={character.desc}
          urls={character.urls}
          thumnail={
            character.thumbnail.path + '.' + character.thumbnail.extension
          }
        />
      )}
    </>
  )
}

export default CharactersDetailContainer
