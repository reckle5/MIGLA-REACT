import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './NavBar.css';
import '../CartWidget/CartWidget.css';
import CartWidget from '../CartWidget/CartWidget';



const NavBar = () => {
    return(
       <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand as={Link} to='/' className='BrandColor'>MIGLA HOGAR</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/' className='linkStyle'>Inicio</Nav.Link>
            <Nav.Link  as={Link} to='/category/maceta' className='linkStyle'>macetas</Nav.Link>
            <Nav.Link as={Link} to='/category/almohadon'  className='linkStyle'>almohadones</Nav.Link>
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

          </Container>
      </Navbar> 
    );
}

export default NavBar;