import React, { useState, useEffect } from 'react'
import { urlForCharacters, hash } from '../../contants/info'
import axios from 'axios'
import Characters from '../../components/characters/Characters'
import Loader from '../../components/common/Loader'

export type CharactersContainersProps = {}

function CharactersContainers(props: CharactersContainersProps) {
  const [characters, setCharacters] = useState<Array<any>>([])
  const [loaded, setLoaded] = useState<boolean>(false)
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const {
      data: {
        data: { results },
      },
    } = await axios.get(`${urlForCharacters}?${hash}`)
    console.log(results)
    setCharacters(results)
    setLoaded(true)
  }
  return <>{!loaded ? <Loader /> : <Characters characters={characters} />}</>
}

export default CharactersContainers
