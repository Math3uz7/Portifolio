import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/LogoPretoeBranco.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github-mark-white.png';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Entrada</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Habilidades</Nav.Link>
              <Nav.Link href="#services" className={activeLink === 'services' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('services')}>Serviços</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projetos</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/matheus-prudencio-a721b7270/"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/Math3uz7"><img src={navIcon2} alt="" /></a>
                <a href="https://www.instagram.com/matheuss_prudencio?igsh=MTZ3NXBxeXJvYTM2OA=="><img src={navIcon3} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Vamos nos conectar</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
