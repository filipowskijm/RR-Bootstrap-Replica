import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

function TopBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg" >
                <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
                    <img src="C:\Users\Jake\NCSU-SD\React_Redux\RR-Bootstrap-Replica\public\instacart-logo.svg" alt="logo"/> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto"> 
                    </Nav>
                    <Nav>
                        <Nav.Link href="#LogIn">Log In</Nav.Link>
                        <Button variant="success">Sign Up</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default TopBar;
