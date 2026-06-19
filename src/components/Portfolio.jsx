export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        <div className="portfolio-grid">

          <div className="project-card">
            <div className="project-image">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Project 1"
              />
            </div>
            <div className="project-info">
              <h3>E-Commerce Platform Not Available Yet</h3>
              <p>Modern e-commerce solution built with React and Node.js</p>
              <div className="tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">MongoDB</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">Live Demo</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Project 2"
              />
            </div>
            <div className="project-info">
              <h3>The Answering Machine</h3>
              <p>Gives you the right answer at the right moment.</p>
              <div className="tech-stack">
                <span className="tech-tag">HTML</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">JavaScript</span>
              </div>
              <div className="project-links">
                <a href="/#/tam" className="project-link">Live Demo</a>
                <a href="https://github.com/reinierx/TAMv2.git" className="project-link">GitHub</a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <img
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Project 3"
              />
            </div>
            <div className="project-info">
              <h3>Financial Dashboard</h3>
              <p>Interactive financial app with results</p>
              <div className="tech-stack">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">APIs</span>
                <span className="tech-tag">Chart.js</span>
              </div>
              <div className="project-links">
                <a href="/sec-dashboard.html" className="project-link">Live Demo</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
