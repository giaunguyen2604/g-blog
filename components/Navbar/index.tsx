import React, { useState } from 'react'
import { useAppContext } from '../../contexts/AppContextProvider'
import { contentType } from '../../constants'

const Navbar: React.FC = () => {
  const { currentContent, updateCurrentContent } = useAppContext()
  const [showMenu, setShowMenu] = useState<boolean>(false)

  const getActiveClassMenu = (option: string) => {
    if (option === currentContent)
      return 'active'
    return ''
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav id="tmNav" className="tm-nav">
      <a className="tm-navbar-menu" onClick={toggleMenu}>Menu</a>
      <ul className={`tm-nav-links ${showMenu && 'open'}`}>
        <li className={`tm-nav-item ${getActiveClassMenu(contentType.INTRO)}`}>
          <a data-linkid={0} data-align="right" className="tm-nav-link" onClick={() => updateCurrentContent(contentType.INTRO)}>Intro</a>
        </li>
        <li className={`tm-nav-item ${getActiveClassMenu(contentType.ME)}`}>
          <a data-linkid={1} data-align="right" className="tm-nav-link" onClick={() => updateCurrentContent(contentType.ME)}>About</a>
        </li>
        <li className={`tm-nav-item ${getActiveClassMenu(contentType.GALLERY)}`}>
          <a data-linkid={2} data-align="middle" className="tm-nav-link" onClick={() => updateCurrentContent(contentType.GALLERY)}>Work</a>
        </li>
        <li className={`tm-nav-item ${getActiveClassMenu(contentType.CONTACT)}`}>
          <a data-linkid={3} data-align="left" className="tm-nav-link" onClick={() => updateCurrentContent(contentType.CONTACT)}>Contact</a>
        </li>

      </ul>
    </nav>
  )
}

export default Navbar