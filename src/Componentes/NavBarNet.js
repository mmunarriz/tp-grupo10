import { Navbar, Nav, Container } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Nav.css";

function NavBarNet() {

    return (
        <>
            <div>
                <Navbar className="navBg" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand>
                            <img
                                className="nav_logo"
                                src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
                                alt="Netflix Logo"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to="/profile" >Profile</Nav.Link>
                                <Nav.Link as={Link} to="/mostrarfavoritas">Mis Favoritas</Nav.Link>
                                <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );

}

export default NavBarNet;