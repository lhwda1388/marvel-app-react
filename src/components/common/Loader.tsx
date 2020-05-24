import React from 'react'
import './Loader.scss'

export type LoaderProps = {}
function Loader(props: LoaderProps) {
  return (
    <div className="loader-box">
      <div className="loader-spinner">
        <i className="fas fa-spinner"></i>
      </div>
      <div className="loader-background"></div>
    </div>
  )
}

export default Loader
