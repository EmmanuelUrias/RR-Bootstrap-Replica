import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'

function TopBar () {
    return(
    <Navbar bg="light" expand="lg" >
        
        <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
         <img style={{height: '70px'}} src="./instacart-vector-logo-2022.png" alt='instacart logo' /> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"> 
         </Nav>
          <Nav style={{marginLeft: '1090px'}}>
            <Nav.Link href="#LogIn">Log In</Nav.Link>
            <Button variant="success">Sign Up</Button>{' '}
          </Nav>
      </Navbar.Collapse>
       
    </Navbar>

    )
}

export default TopBar
