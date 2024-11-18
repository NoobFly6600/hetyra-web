import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from 'react';
import crest from '../../assets/uw-crest.svg'

export default function HETYRA_Navbar(props) {
    const [expanded, setExpanded] = useState(false);

    return (
        <Navbar 
            bg="dark" 
            variant="dark" 
            expand="lg"
            expanded={expanded}
            onToggle={(expanded) => setExpanded(expanded)}
            className="py-3"
        >
            <Container fluid>
                <Navbar.Brand 
                    as={Link} 
                    to="/" 
                    style={{ 
                        fontSize: '24px',
                    }}
                >
                    {/* <img
                        alt="Badger Buddies Logo"
                        src={crest}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '} */}
                    HETYRA
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="navbar-nav" />
                
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mx-auto" style={{ fontSize: '18px' }}>
                        <Nav.Link 
                            as={Link} 
                            to="/HomePage" 
                            className="mx-xl-5 mx-lg-4 mx-md-3"
                            onClick={() => setExpanded(false)}
                            style={{ color: 'white' }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/CooperatePage" 
                            className="mx-xl-5 mx-lg-4 mx-md-3"
                            onClick={() => setExpanded(false)}
                            style={{ color: 'white' }}
                        >
                            Cooperate
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/AboutUsPage" 
                            className="mx-xl-5 mx-lg-4 mx-md-3"
                            onClick={() => setExpanded(false)}
                            style={{ color: 'white' }}
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/ResourcesPage" 
                            className="mx-xl-5 mx-lg-4 mx-md-3"
                            onClick={() => setExpanded(false)}
                            style={{ color: 'white' }}
                        >
                            More Resources
                        </Nav.Link>

                    </Nav>
                    
                    <Nav>
                        <NavDropdown 
                            title="Language" 
                            id="language-nav-dropdown"
                            align="end"
                            style={{ color: 'white' }}
                        >
                            <NavDropdown.Item>English</NavDropdown.Item>
                            <NavDropdown.Item>Español</NavDropdown.Item>
                            <NavDropdown.Item>中文</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
