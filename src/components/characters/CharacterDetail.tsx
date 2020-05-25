import React from 'react'
import './CharacterDetail.scss'

export type CharacterDetail = {
  name: string
  desc: string
  urls: Array<any>
  thumnail: string
}

function CharacterDetail({ name, desc, urls, thumnail }: CharacterDetail) {
  return (
    <div className="detail-box">
      <img src={thumnail} alt={name} />
      <p className="name">name: {name}</p>
      <p className="desc">desc: {desc}</p>
      <ul className="urls">
        {urls.map((urlInfo, idx) => {
          return (
            <li key={idx}>
              <a href={urlInfo.url} target="__blank">
                {urlInfo.type}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CharacterDetail
