import React from 'react'
import { urlForCharacters, hash } from '../../contants/info'
import Characters from '../../components/characters/Characters'
import Loader from '../../components/common/Loader'
import { useGetFetch } from '../../hooks/useGetFetch'

export type CharactersContainersProps = {}

function CharactersContainers(props: CharactersContainersProps) {
  const [loaded, result] = useGetFetch('/data/characters.json', hash)

  return <>{!loaded ? <Loader /> : <Characters characters={result} />}</>
}

export default CharactersContainers
