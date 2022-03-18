import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, NavDropdown } from "react-bootstrap";
import things from '../../images/things_dream.png';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';


export const NavBar = () => {
  return (
      <Navbar  variant="dark" expand="md" className="navbar" >
        <Container className="navbar" >
        <Navbar.Brand>
         <div className="logo navbar " >
           <img src={things} alt="logo" className="navbar" ></img>
         </div>
        </Navbar.Brand>
        <Nav className="me navbar navbar-nav">
          <Link to='/' className="navbar menuLink" > Home </Link>
          <Link to='/bootcamp' className="navbar menuLink" > Bootcamp </Link>
          <NavDropdown title ="Languages" className="navbar menuLink" id="navbarScrollingDropdown">
            <NavDropdown.Item>
              <Link to="/languages/react" className="menuLink"> React.js</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/languages/javascript" className="menuLink"> JavaScript</Link>
            </NavDropdown.Item>
            <NavDropdown.Item> 
              <Link to="/languages/next" className="menuLink"> Next.js</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/languages/html5" className="menuLink"> HTML5</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/languages/css3" className="menuLink"> CSS3</Link>
            </NavDropdown.Item>
          </NavDropdown>
          <CartWidget />
        </Nav>
        </Container>
      </Navbar>


  );
};

