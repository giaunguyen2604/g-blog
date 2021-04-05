import React, { useState, useEffect } from 'react'
import { useAppContext } from '../../contexts/AppContextProvider'
import { contentType } from '../../constants'

const AboutMe: React.FC = () => {
  const { updateCurrentContent } = useAppContext()
  const [opacity, setOpacity] = useState<number>(0)
  const nextStep = () => {
    setOpacity(0);
    setTimeout(() => {
      updateCurrentContent(contentType.GALLERY)
    },1000)
  }

  useEffect(() => {
    setOpacity(1);
  },[])

  return (
    <section className="tm-section tm-section-1" style={{  opacity: opacity }}>
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
        <a id="tm_work_link" data-linkid={2} className="tm-link m-0" onClick={nextStep}>Next</a>
      </div>
    </section>
  )
}

export default AboutMe