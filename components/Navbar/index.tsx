import React from 'react'


const Navbar: React.FC = () => {
  return (
    <nav id="tmNav" className="tm-nav">
      <a className="tm-navbar-menu" href="#">Menu</a>
      <ul className="tm-nav-links">
        <li className="tm-nav-item active">
          <a href="#" data-linkid={0} data-align="right" className="tm-nav-link">Intro</a>
        </li>
        <li className="tm-nav-item">
          <a href="#" data-linkid={1} data-align="right" className="tm-nav-link">About</a>
        </li>
        <li className="tm-nav-item">
          <a href="#" data-linkid={2} data-align="middle" className="tm-nav-link">Work</a>
        </li>
        <li className="tm-nav-item">
          <a href="#" data-linkid={3} data-align="left" className="tm-nav-link">Contact</a>
        </li>
        <li className="tm-nav-item">
          <a rel="nofollow" href="https://fb.com/tooplate" className="tm-nav-link external">External</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar