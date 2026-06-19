export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's Work Together</h3>
            <p>Ready to bring your project to life? Get in touch and let's discuss how we can create something amazing together.</p>
            <div className="contact-details">
              <div className="contact-item">
                <strong>Email:</strong>
                <a href="mailto:xreinierx@outlook.com">Reinier</a>
              </div>
              <div className="contact-item">
                <strong>Location:</strong> Netherlands
              </div>
              <div className="contact-item">
                <strong>LinkedIn:</strong>{' '}
                <a href="https://www.linkedin.com/in/reinierkamphorst/" target="_blank" rel="noreferrer">
                  Reinier Kamphorst
                </a>
              </div>
            </div>
          </div>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" id="email" name="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
