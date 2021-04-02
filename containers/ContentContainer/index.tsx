import React from 'react'
import Introduction from '../../components/Introduction'
import AboutMe from '../../components/AboutMe'
import Gallery from '../../components/Gallery'
import Contact from '../../components/Contact'
import { useAppContext } from '../../contexts/AppContextProvider'
import { contentType } from '../../constants'

const ContentContainer: React.FC = () => {
  const { currentContent } = useAppContext()

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="tm-content">
            { currentContent === contentType.INTRO && <Introduction/> }
            { currentContent === contentType.ME && <AboutMe/> }
            { currentContent === contentType.GALLERY && <Gallery/> }
            { currentContent === contentType.CONTACT && <Contact/> }
          </div>
        </div>
      </div>
    </div>

  )
}

export default ContentContainer