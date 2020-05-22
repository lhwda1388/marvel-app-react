import React from 'react'

export type CharacterDetail = {
  name: string
  desc: string
  urls: Array<any>
  thumnail: string
}

function CharacterDetail({ name, desc, urls, thumnail }: CharacterDetail) {
  return (
    <div>
      <p>
        <img src={thumnail} alt={name} />
      </p>
      <p>name: {name}</p>
      <p>desc: {desc}</p>
      <ul>
        {urls.map((urlInfo, idx) => {
          return (
            <li key={idx}>
              <a href={urlInfo.url}>{urlInfo.type}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CharacterDetail
