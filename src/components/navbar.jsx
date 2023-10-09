import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function scrollToSection(event, sectionId) {
  event.preventDefault();
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function NavBar() {
  return (
    <>
      <Navbar bg="black" data-bs-theme="dark" className='fixed-top'>
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="/#home" onClick={(event) => scrollToSection(event, 'home')}>Home</Nav.Link>
            <Nav.Link href="/#about" onClick={(event) => scrollToSection(event, 'about')}>About</Nav.Link>
            <Nav.Link href="/#projects" onClick={(event) => scrollToSection(event, 'projects')}>Projects</Nav.Link>
            <Nav.Link href="/#contact" onClick={(event) => scrollToSection(event, 'contact')}>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;