
import {Navbar,Nav,Container} from 'react-bootstrap';
import Search from './Search';
// import { searchMovie } from '../api';

const NavBar =  () =>{
 
  
  
  return(
    <Navbar bg="dark navbar-dark">
    <Container>
      <Navbar.Brand href="#home" className='logo'>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#series">Series</Nav.Link>
          <Nav.Link href="#series">Films</Nav.Link>
          <Nav.Link href="#new">New & Popular</Nav.Link>
          <Nav.Link href="#list">MyList</Nav.Link>
          <Nav.Link href="#Language">Browse by Languages</Nav.Link>   
         

          <Search/>
          
           
           
          
           
          
           
        </Nav>
      </Navbar.Collapse>

    </Container>
  </Navbar>

  )
}
export default NavBar