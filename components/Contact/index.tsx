import React from 'react'


const Contact: React.FC = () => {
  return (
    <section className="tm-section tm-section-3 tm-section-left">
      <form  className="tm-contact-form" method="post">
        <div className="form-group mb-4">
          <input type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Name" required />
        </div>
        <div className="form-group mb-4">
          <input type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Email" required />
        </div>
        <div className="form-group mb-4">
          <textarea rows={4} id="contact_message" name="contact_message" className="form-control" placeholder="Message" required defaultValue={""} />
        </div>
        <div className="form-group mb-0">
          <button type="submit" className="btn tm-send-btn tm-fl-right">
            Send
      </button>
        </div>
      </form>
    </section>

  )
}

export default Contact