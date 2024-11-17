import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from './Logo';
import CartWidget from './CartWidget';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#telefonos">Teléfonos</Nav.Link>
            <Nav.Link href="#smarthome">Smart Home</Nav.Link>
            <NavDropdown title="Estilo de Vida" id="basic-nav-dropdown">
              <NavDropdown.Item href="#accesorios">Accesorios</NavDropdown.Item>
              <NavDropdown.Item href="#audio">Audio</NavDropdown.Item>
              <NavDropdown.Item href="#cuidadopersonal">Cuidado Personal</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;