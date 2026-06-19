export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Space Explorer"
          />
        </div>
        <div className="hero-text">
          <h2>Full Stack Developer</h2>
          <p>Exploring the digital universe, one line of code at a time</p>
          <div className="hero-buttons">
            <a href="https://github.com/reinierx/reinierx.github.io.git">
              <button className="btn btn-primary">View Portfolio</button>
            </a>
            <a href="mailto:xreinierx@outlook.com">
              <button className="btn btn-secondary">Get in Touch</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
