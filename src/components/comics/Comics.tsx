import React from 'react'

export type ComisProps = {
  comics: Array<any>
}

function Comics(props: ComisProps) {
  return (
    <div>
      <ul>
        {props.comics.map((comic) => {
          return (
            <li>
              <img
                src={comic.thumbnail.path + '.' + comic.thumbnail.extension}
              />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Comics
