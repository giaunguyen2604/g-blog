import React from 'react'


const Introduction: React.FC = () => {
  return (
    <section className="tm-section tm-section-0">
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
      <a href="#" id="tm_about_link" data-linkid={1} className="tm-link">Read More</a>
    </section>

  )
}

export default Introduction