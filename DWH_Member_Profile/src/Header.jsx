import { Row, Col, Container, Nav, Navbar } from "react-bootstrap";
import "./Header.css";

function Header() {
    return (
        <Navbar expand="lg" sticky="top" className="bg-body-tertiary shadow">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img src="./nav-icon-hover.png" className="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center menu">
                        <Nav.Link
                            href="#about"
                            className="hover-4 mx-3 rounded"
                        >
                            ABOUT
                        </Nav.Link>
                        <Nav.Link
                            href="#theTeam"
                            className="hover-4 mx-3 rounded"
                        >
                            THE TEAM
                        </Nav.Link>
                        <Nav.Link
                            href="#services"
                            className="hover-4 mx-3 rounded"
                        >
                            SERVICES
                        </Nav.Link>
                        <Nav.Link
                            href="#contact"
                            className="hover-4 mx-3 rounded"
                        >
                            CONTACT
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
