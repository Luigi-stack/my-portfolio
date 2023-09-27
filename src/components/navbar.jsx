import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="white" data-bs-theme="light">
        <Container className='justify-content-around'>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="">
            <Nav.Link href="#home" className='me-5'>Home</Nav.Link>
            <Nav.Link href="#abaut" className='me-5'>About</Nav.Link>
            <Nav.Link href="#gallery" className='me-5'>Gallery</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;