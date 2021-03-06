import React from 'react'
import CharacterDetail from '../../components/characters/CharacterDetail'
import { urlForCharacters, hash } from '../../contants/info'
import Loader from '../../components/common/Loader'
import { useGetFetch } from '../../hooks/useGetFetch'

export type CharactersDetailContainerProps = {
  match?: any
}
function CharactersDetailContainer(props: CharactersDetailContainerProps) {
  const {
    match: {
      params: { id }
    }
  } = props
  const [loaded, result] = useGetFetch(`${urlForCharacters}/${id}`, hash)
  // const [loaded, result] = useGetFetch(`/data/1010354.json`, hash)

  return (
    <>
      {!loaded ? (
        <Loader />
      ) : (
        <CharacterDetail
          name={result[0].name}
          desc={result[0].description}
          urls={result[0].urls}
          thumnail={
            result[0].thumbnail.path + '.' + result[0].thumbnail.extension
          }
        />
      )}
    </>
  )
}

export default CharactersDetailContainer
