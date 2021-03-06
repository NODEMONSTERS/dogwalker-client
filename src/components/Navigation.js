import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

const Navigation = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand>
            
          </Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto justify-content-end">
              <Nav.Item ><Link className='nav-link' to='/'>Home</Link></Nav.Item>
              <Nav.Item ><Link className='nav-link' to='/team'>Meet the Team</Link></Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default Navigation;

// The NavBar Brand is in case we wanna add a Logo of some sort