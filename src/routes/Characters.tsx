import React, { useState, useEffect } from 'react'
import { urlForCharacters } from '../contants/info'
import axios from 'axios'
import './Characters.scss'
import Loader from '../components/Loader'

const Characters = () => {
  const [characters, setCharacters] = useState([])
  const [loaded, setLoaded] = useState(false)
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const {
      data: {
        data: { results }
      }
    } = await axios.get(urlForCharacters + '&name=3-D MAN')
    console.log(results)
    setCharacters(results)
    setLoaded(true)
  }
  return (
    <div>
      {!loaded ? (
        <Loader />
      ) : (
        <ul className="characters">
          {characters.map((character: any) => {
            return (
              <li key={character.id}>
                <p>
                  <img
                    src={
                      character.thumbnail.path +
                      '.' +
                      character.thumbnail.extension
                    }
                    alt={character.name}
                  />
                </p>
                <p>{character.name}</p>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default Characters
