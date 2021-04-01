import React from 'react'
import Introduction from '../../components/Introduction'
import AboutMe from '../../components/AboutMe'
import Gallery from '../../components/Gallery'
import Contact from '../../components/Contact'

const ContentContainer: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="tm-content">
            <Introduction/>
            <AboutMe/>
            <Gallery/>
            <Contact/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ContentContainer