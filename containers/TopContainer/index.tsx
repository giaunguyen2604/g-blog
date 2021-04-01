import React from 'react'
import Navbar from '../../components/Navbar'

const TopContainer: React.FC = () => {
  return (
    <div className="tm-top-container">
      <Navbar/>
      <header className="tm-site-header-box tm-bg-dark">
        <h1 className="tm-site-title">The Card</h1>
        <p className="mb-0 tm-site-subtitle">Free HTML Template for you</p>
      </header>
    </div>
  )
}

export default TopContainer