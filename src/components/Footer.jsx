import React from 'react';
import { Container, Row, Col, Nav, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GetAndroid from '../Photos/GetAndroid.png';
import GetApple from '../Photos/GetApple.png';

export default function Footer() {
    return (
        <Container fluid={true} style={{ backgroundColor: 'black', color: 'white', padding: '20px' }}>
            <Row className="mb-2 justify-content-center">
                <Col md={2} style={{ padding: '0 0px' }}>
                    <h5 className="mb-2">Individuals</h5>
                    <Nav className="flex-column" style={{ margin: 0, padding: 0 }}>
                        <Nav.Link 
                            as={Link} 
                            to="/in-home-services" 
                            className="text-white py-1" 
                            style={{ padding: 0 }}
                        >
                            In-Home Services
                        </Nav.Link>
                    </Nav>
                    <br/>
                </Col>
                <Col md={2} style={{ padding: '0 0px' }}>
                    <h5 className="mb-2">Providers</h5>
                    <Nav className="flex-column" style={{ margin: 0, padding: 0 }}>
                        <Nav.Link 
                            as={Link} 
                            to="/providers" 
                            className="text-white py-1" 
                            style={{ padding: 0 }}
                        >
                            Become a Provider
                        </Nav.Link>
                    </Nav>
                    <br/>
                </Col>
                <Col md={2} style={{ padding: '0 0px' }}>
                    <h5 className="mb-2">Support</h5>
                    <Nav className="flex-column" style={{ margin: 0, padding: 0 }}>
                        <Nav.Link 
                            as={Link} 
                            to="/trust-safety" 
                            className="text-white py-1" 
                            style={{ padding: 0 }}
                        >
                            Trust & Safety
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/help" 
                            className="text-white py-1" 
                            style={{ padding: 0 }}
                        >
                            Help
                        </Nav.Link>
                    </Nav>
                    <br/>
                </Col>
                <Col md={2} style={{ padding: '0 0px' }}>
                    <h5 className="mb-2">About</h5>
                    <Nav className="flex-column" style={{ margin: 0, padding: 0 }}>
                        <Nav.Link 
                            as={Link} 
                            to="/about-us" 
                            className="text-white py-1" 
                            style={{ padding: 0 }}
                        >
                            About Us
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            to="/how-it-works" 
                            className="text-white py-1" 
                            style={{ padding: 0 }}
                        >
                            How Hetyra Works
                        </Nav.Link>
                    </Nav>
                    <br/>
                </Col>
            </Row>

            {/* App Download Links Section - Side by Side */}
            <Row className="mb-4">
                <Col md={{ span: 8, offset: 2 }} style={{ paddingLeft: '10px' }}>
                    <Row>
                        <Col md={6} className="mb-3 mb-md-0" style={{ paddingLeft: '0' }}>
                            <h5 className="mb-3">Download Client App</h5>
                            <div className="d-flex">
                                <a href="https://apps.apple.com/ca/app/hetyra/id6741908357" target="_blank" rel="noopener noreferrer" className="me-3">
                                    <Image src={GetApple} alt="Download on App Store" style={{ height: '40px' }} />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.hetyra" target="_blank" rel="noopener noreferrer">
                                    <Image src={GetAndroid} alt="Get it on Google Play" style={{ height: '40px' }} />
                                </a>
                            </div>
                        </Col>
                        <Col md={6}>
                            <h5 className="mb-3">Download Provider App</h5>
                            <div className="d-flex">
                                <a href="https://apps.apple.com/ca/app/htr-provider/id6741950460" target="_blank" rel="noopener noreferrer" className="me-3">
                                    <Image src={GetApple} alt="Download on App Store" style={{ height: '40px' }} />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.htr_provider" target="_blank" rel="noopener noreferrer">
                                    <Image src={GetAndroid} alt="Get it on Google Play" style={{ height: '40px' }} />
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <hr style={{ backgroundColor: '#333', margin: '10px 0' }} />
            <Row className="justify-content-center">
                <Col md={8} style={{ padding: '0 0px' }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <span>©2024 Hetyra Inc.</span>
                        <div>
                            <Nav.Link 
                                as={Link} 
                                to="/privacy" 
                                className="text-white d-inline me-4"
                                style={{ padding: 0 }}
                            >
                                Privacy Policy
                            </Nav.Link>
                            <Nav.Link 
                                as={Link} 
                                to="/terms" 
                                className="text-white d-inline"
                                style={{ padding: 0 }}
                            >
                                Terms and Conditions
                            </Nav.Link>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
} 