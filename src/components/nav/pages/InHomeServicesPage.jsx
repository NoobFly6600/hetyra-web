import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ThirdPhoto from '../../../Photos/ThirdPhoto.png';
import ForthPhoto from '../../../Photos/ForthPhoto.png';

export default function InHomeServicesPage() {
    return (
        <div style={{ backgroundColor: 'white' }}>
            {/* Banner Section */}
            <Container fluid style={{ backgroundColor: 'black', color: 'white', padding: '60px 0' }}>
                <Container style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <Row className="align-items-center">
                        <Col md={6}>
                            <h1 style={{ 
                                fontSize: '48px', 
                                fontWeight: 'bold',
                                marginBottom: '30px'
                            }}>
                                The Ultimate In-Home Enjoyment
                            </h1>
                            <p style={{ 
                                fontSize: '18px',
                                lineHeight: '1.6'
                            }}>
                                Relax, rejuvenate, and recharge with a professional massage experience 
                                in the comfort of your own home. With Hetyra, your journey to wellness 
                                begins right at your doorstep.
                            </p>
                        </Col>
                        <Col md={6}>
                            <img 
                                src={ThirdPhoto}
                                alt="In-Home Massage"
                                style={{
                                    width: '600px',
                                    height: '400px',
                                    objectFit: 'cover',
                                    borderRadius: '10px'
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Body Section */}
            <Container className="py-5">
                <Row className="mb-5">
                    <Col>
                        <h2 className="text-center mb-5">Book anywhere, anytime on Hetyra app</h2>
                        
                        {/* Steps Cards */}
                        <Row className="g-4">
                            <Col md={4}>
                                <Card className="h-100" style={{ border: 'none' }}>
                                    <Card.Body className="p-4">
                                        <h3 className="h4 mb-3">1. Choose Your Preferred Provider</h3>
                                        <p>
                                            Browse and select from skilled, independent massage therapists 
                                            and bodyworkers nearby. With providers available 24/7, you can 
                                            schedule your appointment at a time that works best for you.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="h-100" style={{ border: 'none' }}>
                                    <Card.Body className="p-4">
                                        <h3 className="h4 mb-3">2. Your Provider Comes to You</h3>
                                        <p>
                                            A vetted, background-checked professional arrives at your chosen 
                                            location, fully equipped to deliver an exceptional experience.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col md={4}>
                                <Card className="h-100" style={{ border: 'none' }}>
                                    <Card.Body className="p-4">
                                        <h3 className="h4 mb-3">3. Unwind and Enjoy</h3>
                                        <p>
                                            Relax and savor your personalized session, all in the comfort 
                                            and privacy of your own space.
                                        </p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* Benefits Section */}
                <Row className="mt-5">
                    <Col>
                        <h2 className="text-center mb-4">Benefits</h2>
                        <img 
                            src={ForthPhoto}
                            alt="Massage Benefits"
                            style={{
                                width: '600px',
                                height: '400px',
                                objectFit: 'cover',
                                borderRadius: '10px',
                                display: 'block',
                                margin: '0 auto'
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
} 