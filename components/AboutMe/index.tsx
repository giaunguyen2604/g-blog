import React from 'react'
import { useAppContext } from '../../contexts/AppContextProvider'
import { contentType } from '../../constants'

const AboutMe: React.FC = () => {
  const { updateCurrentContent } = useAppContext()

  const nextStep = () => {
    updateCurrentContent(contentType.GALLERY)
  }

  return (
    <section className="tm-section tm-section-1">
      <div className="tm-textbox tm-textbox-2 tm-bg-dark">
        <h2 className="tm-text-blue mb-4">About Me</h2>
        <p className="mb-4">
          You are allowed to modify and use this HTML template for
          your personal or business websites.
        </p>
        <p className="mb-4">
          You are NOT allowed to re-distribute this template file on
          your site for any reason. Thank you.
        </p>
        <a href="#" id="tm_work_link" data-linkid={2} className="tm-link m-0" onClick={nextStep}>Next</a>
      </div>
    </section>
  )
}

export default AboutMe