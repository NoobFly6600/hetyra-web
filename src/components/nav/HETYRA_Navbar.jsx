import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function HETYRA_Navbar(props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar 
            bg="black" 
            variant="dark" 
            expand="lg"
            expanded={expanded}
            onToggle={(expanded) => setExpanded(expanded)}
            className="py-3"
        >
            <Container style={{ maxWidth: '1400px', padding: '0 40px' }}>
                <Navbar.Brand 
                    as={Link} 
                    to="/" 
                    style={{ 
                        fontSize: '24px',
                        color: 'white'
                    }}
                >
                    Hetyra
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />
                
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="me-auto" style={{ fontSize: '16px' }}>
                        <Nav.Link 
                            as={Link} 
                            to="/in-home-services" 
                            className="mx-3"
                            onClick={() => setExpanded(false)}
                            style={{ color: 'white' }}
                        >
                            In-Home Services
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/providers" 
                            className="mx-3"
                            onClick={() => setExpanded(false)}
                            style={{ color: 'white' }}
                        >
                            Providers
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/trust-safety" 
                            className="mx-3"
                            onClick={() => setExpanded(false)}
                            style={{ color: 'white' }}
                        >
                            Trust & Safety
                        </Nav.Link>
                        <NavDropdown 
                            title="About" 
                            id="about-nav-dropdown"
                            className="mx-3"
                        >
                            <NavDropdown.Item as={Link} to="/about-us">About Us</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/how-it-works">How Hetyra Works</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    
                    <Nav>
                        <NavDropdown 
                            title="Language" 
                            id="language-nav-dropdown"
                            align="end"
                            className="mx-3"
                        >
                            <NavDropdown.Item>English</NavDropdown.Item>
                            <NavDropdown.Item>Español</NavDropdown.Item>
                            <NavDropdown.Item>中文</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link 
                            as={Link} 
                            to="/help"
                            className="mx-3"
                            onClick={() => setExpanded(false)}
                            style={{ color: 'white' }}
                        >
                            Help
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
