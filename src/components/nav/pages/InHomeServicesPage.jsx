import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ThirdPhoto from '../../../Photos/ThirdPhoto.png';
import ForthPhoto from '../../../Photos/ForthPhoto.png';
import AppPhoto from '../../../Photos/AppPhoto.png';
import { CalendarOutlined, StarOutlined, HeartOutlined } from '@ant-design/icons';

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
                        <Col md={6} className="d-flex justify-content-center">
                            <img 
                                src={ThirdPhoto}
                                alt="In-Home Massage"
                                style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    borderRadius: '10px'
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Body Section */}
            <Container fluid className="py-5">
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
                                            borderRadius: '10px',
                                            width: '100%',
                                            objectFit: 'cover',
                                            maxWidth: '600px',
                                            height: 'auto',
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
                        <h2 className="text-center mb-5">Main Benefits</h2>
                        <Row className="g-4">
                            <Col md={4}>
                                <Card className="h-100" style={{ 
                                    border: 'none',
                                    padding: '20px'
                                }}>
                                    <div className="d-flex align-items-center mb-3">
                                        <CalendarOutlined style={{ 
                                            fontSize: '32px', 
                                            color: 'black',
                                            marginRight: '15px'
                                        }} />
                                        <h3 className="h4 mb-0">Convenient scheduling</h3>
                                    </div>
                                    <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                        Enjoy wellness services on your time at your location, 24/7
                                    </p>
                                </Card>
                            </Col>

                            <Col md={4}>
                                <Card className="h-100" style={{ 
                                    border: 'none',
                                    padding: '20px'
                                }}>
                                    <div className="d-flex align-items-center mb-3">
                                        <StarOutlined style={{ 
                                            fontSize: '32px', 
                                            color: 'black',
                                            marginRight: '15px'
                                        }} />
                                        <h3 className="h4 mb-0">High quality</h3>
                                    </div>
                                    <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                        Access verified independent professionals who offer a premium experience tailored to your needs.
                                    </p>
                                </Card>
                            </Col>

                            <Col md={4}>
                                <Card className="h-100" style={{ 
                                    border: 'none',
                                    padding: '20px'
                                }}>
                                    <div className="d-flex align-items-center mb-3">
                                        <HeartOutlined style={{ 
                                            fontSize: '32px', 
                                            color: 'black',
                                            marginRight: '15px'
                                        }} />
                                        <h3 className="h4 mb-0">Relax in Comfort</h3>
                                    </div>
                                    <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
                                        Skip the hassle of traveling to a spa and enjoy ultimate convenience, privacy, and peace—no commuting, no waiting, just pure relaxation.
                                    </p>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
} 