export default function Header() {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <h1>Reinier</h1>
        </div>
        <ul className="nav-menu">
          <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
          <li><a href="#diensten" className="nav-link">Diensten</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <div className="mobile-menu-toggle">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  )
}
