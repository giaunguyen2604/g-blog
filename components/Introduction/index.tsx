import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../contexts/AppContextProvider'
import { contentType } from '../../constants'

const Introduction: React.FC = () => {
  const { updateCurrentContent } = useAppContext()
  const [opacity, setOpacity] = useState<number>(0)
  const nextStep = () => {
    updateCurrentContent(contentType.ME)
  }

  useEffect(() => {
    setOpacity(1);
  },[])

  return (
    <section className="tm-section tm-section-0" style={{  opacity: opacity }}>
      <h2 className="tm-section-title mb-3 font-weight-bold">
        Introduction
      </h2>
      <div className="tm-textbox tm-bg-dark">
        <p>
          The Card template is last updated on 21 May 2019. Read More button is linked to second page. You can try it now. External link button is added on main menu.
        </p>
        <p className="mb-0">
          Please tell your friends about Tooplate for free templates. This is 70% alpha background.
        </p>
      </div>
      <a id="tm_about_link" data-linkid={1} className="tm-link" onClick={nextStep}>Read More</a>
    </section>

  )
}

export default Introduction