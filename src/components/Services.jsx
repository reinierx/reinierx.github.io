export default function Services() {
  return (
    <section className="diensten" id="diensten">
      <div className="container">
        <h2 className="section-title">Diensten</h2>
        <div className="services-grid">

          <div className="service-card">
            <div className="service-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2,17 12,22 22,17"></polyline>
                <polyline points="2,12 12,17 22,12"></polyline>
              </svg>
            </div>
            <h3>Frontend Development</h3>
            <p>Modern, responsive web interfaces using React, Vue.js, and vanilla JavaScript</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3>Backend Development</h3>
            <p>Scalable server-side solutions with Node.js, Express, and database integration</p>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
              </svg>
            </div>
            <h3>Database Design</h3>
            <p>Efficient database architecture and optimization for MongoDB, PostgreSQL, and MySQL</p>
          </div>

        </div>
      </div>
    </section>
  )
}
