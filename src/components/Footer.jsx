import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <Container fluid={true} style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
            <Row className="mb-2">
                <Col md={3}>
                    <h5 className="mb-2">Individuals</h5>
                    <Nav className="flex-column" style={{ marginLeft: '-12px' }}>
                        <Nav.Link as={Link} to="/in-home-services" className="text-white py-1" style={{ padding: '0 12px' }}>
                            In-Home Services
                        </Nav.Link>
                    </Nav>
                </Col>
                <Col md={3}>
                    <h5 className="mb-2">Providers</h5>
                    <Nav className="flex-column" style={{ marginLeft: '-12px' }}>
                        <Nav.Link as={Link} to="/providers" className="text-white py-1" style={{ padding: '0 12px' }}>
                            Become a Provider
                        </Nav.Link>
                    </Nav>
                </Col>
                <Col md={3}>
                    <h5 className="mb-2">Support</h5>
                    <Nav className="flex-column" style={{ marginLeft: '-12px' }}>
                        <Nav.Link as={Link} to="/trust-safety" className="text-white py-1" style={{ padding: '0 12px' }}>
                            Trust & Safety
                        </Nav.Link>
                        <Nav.Link as={Link} to="/help" className="text-white py-1" style={{ padding: '0 12px' }}>
                            Help
                        </Nav.Link>
                    </Nav>
                </Col>
                <Col md={3}>
                    <h5 className="mb-2">About</h5>
                    <Nav className="flex-column" style={{ marginLeft: '-12px' }}>
                        <Nav.Link as={Link} to="/about-us" className="text-white py-1" style={{ padding: '0 12px' }}>
                            About Us
                        </Nav.Link>
                        <Nav.Link as={Link} to="/how-it-works" className="text-white py-1" style={{ padding: '0 12px' }}>
                            How Hetyra Works
                        </Nav.Link>
                    </Nav>
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr style={{ backgroundColor: '#333', margin: '10px 0' }} />
                    <div className="d-flex justify-content-between align-items-center">
                        <span>©2024 Hetyra Inc.</span>
                        <div>
                            <Nav.Link as={Link} to="/privacy" className="text-white d-inline me-3">Privacy Policy</Nav.Link>
                            <Nav.Link as={Link} to="/terms" className="text-white d-inline">Terms and Conditions</Nav.Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
} 