import './Nav.css'

const Nav = () => {
  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a className="site-nav__brand" href="#home">
          <span className="site-nav__mark" aria-hidden="true">P</span>
          <span>Pranshu Urmaliya</span>
        </a>
        <ul className="site-nav__links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav