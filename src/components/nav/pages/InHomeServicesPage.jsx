import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ThirdPhoto from '../../../Photos/ThirdPhoto.png';
import ForthPhoto from '../../../Photos/ForthPhoto.png';
import AppPhoto from '../../../Photos/AppPhoto.png';

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
                {/* Steps Section */}
                <Row className="mb-5">
                    <Col>
                        <h2 className="text-center mb-5">Book anywhere, anytime on Hetyra app</h2>
                        <Card style={{ 
                            border: 'none',
                            maxWidth: '1100px',
                            margin: '0 auto'
                        }}>
                            <Row className="g-0 align-items-center">
                                <Col md={6}>
                                    <Card.Body className="p-5">
                                        <div style={{ fontSize: '18px', lineHeight: '1.8' }}>
                                            <div className="mb-4">
                                                <h3 className="h4 mb-3">1. Choose Your Preferred Provider</h3>
                                                <p>Browse and select from skilled, independent massage therapists 
                                                and bodyworkers nearby. With providers available 24/7, you can 
                                                schedule your appointment at a time that works best for you.</p>
                                            </div>
                                            <div className="mb-4">
                                                <h3 className="h4 mb-3">2. Your Provider Comes to You</h3>
                                                <p>A vetted, background-checked professional arrives at your chosen 
                                                location, fully equipped to deliver an exceptional experience.</p>
                                            </div>
                                            <div>
                                                <h3 className="h4 mb-3">3. Unwind and Enjoy</h3>
                                                <p>Relax and savor your personalized session, all in the comfort 
                                                and privacy of your own space.</p>
                                            </div>
                                        </div>
                                    </Card.Body>
                                </Col>
                                <Col md={6} className="d-flex justify-content-center">
                                    <Card.Img
                                        src={AppPhoto}
                                        alt="Massage Benefits"
                                        style={{
                                            borderRadius: '0 10px 10px 0',
                                            height: '500px',
                                            width: '800px',
                                            objectFit: 'cover'
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Card>
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