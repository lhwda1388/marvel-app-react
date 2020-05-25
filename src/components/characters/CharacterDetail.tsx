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
    <div className="character-detail-box">
      <div className="character">
        <div className="img-wrap">
          <img src={thumnail} alt={name} />
          <span className="name">{name}</span>
          <span className="desc">{desc}</span>
        </div>
      </div>
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
