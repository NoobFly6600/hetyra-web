import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FifthPhoto from '../../../Photos/FifthPhoto.png';
import SixthPhoto from '../../../Photos/SixthPhoto.png';
import SeventhPhoto from '../../../Photos/SeventhPhoto.png';

export default function ProvidersPage() {
    return (
        <div style={{ backgroundColor: '#f8f9fa' }}>
            {/* Banner Section */}
            <Container fluid style={{ backgroundColor: 'black', color: 'white', padding: '60px 0' }}>
                <Container>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1 style={{ 
                                fontSize: '48px', 
                                fontWeight: 'bold',
                                marginBottom: '30px'
                            }}>
                                Be your own boss
                            </h1>
                            <p style={{ 
                                fontSize: '18px',
                                lineHeight: '1.6'
                            }}>
                                Set your own services and prices. Earn on your own schedule.
                            </p>
                        </Col>
                        <Col md={6}>
                            <img 
                                src={FifthPhoto}
                                alt="Be Your Own Boss"
                                style={{
                                    width: '100%',
                                    borderRadius: '10px'
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Body Section */}
            <Container className="py-5">
                {/* Why Become a Provider Section */}
                <Row className="mb-5">
                    <Col>
                        <h2 className="text-center mb-5">Why become a provider at Hetyra?</h2>
                        <Card style={{ border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                            <Row className="g-0">
                                <Col md={6}>
                                    <Card.Img
                                        src={SixthPhoto}
                                        alt="Provider Benefits"
                                        style={{
                                            borderRadius: '10px 0 0 10px',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </Col>
                                <Col md={6}>
                                    <Card.Body className="p-5">
                                        <ul style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                            <li>Set your own schedule and work area</li>
                                            <li>Keep 70-80% of your service fees</li>
                                            <li>Access to a growing client base</li>
                                            <li>Professional liability insurance coverage</li>
                                            <li>In-app tipping and secure payments</li>
                                            <li>24/7 support team</li>
                                        </ul>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

                {/* How to Apply Section */}
                <Row className="mb-5">
                    <Col>
                        <h2 className="text-center mb-5">How to apply?</h2>
                        <Card style={{ border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                            <Row className="g-0">
                                <Col md={6}>
                                    <Card.Body className="p-5">
                                        <ol style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                            <li>Valid massage therapy license</li>
                                            <li>Minimum 2 years of professional experience</li>
                                            <li>Clean background check</li>
                                            <li>Professional liability insurance</li>
                                            <li>Complete Hetyra's safety training</li>
                                        </ol>
                                    </Card.Body>
                                </Col>
                                <Col md={6}>
                                    <Card.Img
                                        src={SeventhPhoto}
                                        alt="Application Process"
                                        style={{
                                            borderRadius: '0 10px 10px 0',
                                            height: '100%',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

                {/* Contact Section */}
                <Row className="text-center mt-5">
                    <Col>
                        <Card 
                            className="p-5 mx-auto" 
                            style={{ 
                                border: 'none', 
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                maxWidth: '600px'
                            }}
                        >
                            <h3 className="mb-4">Ready to get started?</h3>
                            <p className="mb-4" style={{ fontSize: '18px' }}>
                                Email us your resume and credentials at:
                            </p>
                            <h4>
                                <a 
                                    href="mailto:providers@Hetyra.com"
                                    style={{
                                        color: 'black',
                                        textDecoration: 'none',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    providers@Hetyra.com
                                </a>
                            </h4>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
} 