import React from 'react'


const Loader: React.FC = () => {
  return (
    <div id="loader-wrapper">
      <div id="loader" />
      <div className="loader-section section-left" />
      <div className="loader-section section-right" />
    </div>
  )
}

export default Loader