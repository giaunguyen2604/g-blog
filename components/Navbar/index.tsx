import React from 'react'
import { useAppContext } from '../../contexts/AppContextProvider'
import { contentType } from '../../constants'

const Navbar: React.FC = () => {
  const { updateCurrentContent } = useAppContext()

  return (
    <nav id="tmNav" className="tm-nav">
      <a className="tm-navbar-menu" href="#">Menu</a>
      <ul className="tm-nav-links">
        <li className="tm-nav-item active">
          <a data-linkid={0} data-align="right" className="tm-nav-link" onClick={() => updateCurrentContent(contentType.INTRO)}>Intro</a>
        </li>
        <li className="tm-nav-item">
          <a data-linkid={1} data-align="right" className="tm-nav-link" onClick={() => updateCurrentContent(contentType.ME)}>About</a>
        </li>
        <li className="tm-nav-item">
          <a data-linkid={2} data-align="middle" className="tm-nav-link" onClick={() => updateCurrentContent(contentType.GALLERY)}>Work</a>
        </li>
        <li className="tm-nav-item">
          <a data-linkid={3} data-align="left" className="tm-nav-link" onClick={() => updateCurrentContent(contentType.CONTACT)}>Contact</a>
        </li>
    
      </ul>
    </nav>
  )
}

export default Navbar