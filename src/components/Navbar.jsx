import { useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavbarPage = () => {
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('mainNav');
      if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar expand="lg" className="text-uppercase fixed-top" id="mainNav">
      <Container>
        <Navbar.Brand href="#page-top">Personal Page</Navbar.Brand>
        <Navbar.Toggle className="bg-white" aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive">
          <Nav className="ms-auto">
            <Nav.Item className="mx-0 mx-lg-1"><Nav.Link href="#portfolio">Portfolio</Nav.Link></Nav.Item>
            <Nav.Item className="mx-0 mx-lg-1"><Nav.Link href="#about">About</Nav.Link></Nav.Item>
            <Nav.Item className="mx-0 mx-lg-1"><Nav.Link href="#contact">Contact</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarPage