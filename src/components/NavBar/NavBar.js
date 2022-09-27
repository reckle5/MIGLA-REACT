
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './NavBar.css'
import '../CartWidget/CartWidget.css'
import CartWidget from '../CartWidget/CartWidget';
import Counter from '../ItemCount/ItemCount';

const NavBar = () => {
    return(
       <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home" className='BrandColor'>MIGLA HOGAR</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home" className='linkStyle'>Inicio</Nav.Link>
            <Nav.Link href="#macetas" className='linkStyle'>Macetas</Nav.Link>
            <Nav.Link href="#almohadones" className='linkStyle'>Almohadones</Nav.Link>
          </Nav>
       
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
          <CartWidget/>
          <Counter/>
          </Container>
      </Navbar> 
    );
}

export default NavBar;