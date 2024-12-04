import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { SafetyOutlined, UserOutlined, CheckCircleOutlined, TeamOutlined } from '@ant-design/icons';
import TrustPhoto from '../../../Photos/TrustPhoto.png';

export default function TrustSafetyPage() {
    return (
        <div style={{ backgroundColor: 'white' }}>
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
                                Trust & Safety
                            </h1>
                            <p style={{ 
                                fontSize: '18px',
                                lineHeight: '1.6'
                            }}>
                                At Hetyra, ensuring access to vital health and wellness services is our top priority. 
                                We are committed to making this process as seamless, safe, and efficient as possible 
                                for both clients and providers.
                            </p>
                        </Col>
                        <Col md={6} className="d-flex justify-content-center">
                            <img 
                                src={TrustPhoto}
                                alt="Trust and Safety"
                                style={{
                                    width: '100%',
                                    maxWidth: '600px',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    borderRadius: '10px'
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Health & Safety Guidelines Section */}
            <Container className="py-5">
                <Row className="mb-5">
                    <Col>
                        <Card style={{ border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                            <Card.Body className="p-4">
                                <div className="d-flex align-items-center mb-4">
                                    <SafetyOutlined style={{ fontSize: '24px', marginRight: '15px', color: 'black' }} />
                                    <h2 className="mb-0">Health & Safety Guidelines</h2>
                                </div>
                                <p className="mb-4">
                                    Our dedicated team of Trust & Safety professionals is continuously updating and 
                                    monitoring our health and safety guidelines. These guidelines align with federal, 
                                    provincial, and local directives for the delivery of wellness services, ensuring 
                                    a safe experience for everyone.
                                </p>
                                <h3 className="h4 mb-3">Cleanliness Practices</h3>
                                <p>
                                    Hetyra providers follow CDC guidelines on hand hygiene, including washing hands 
                                    or using hand sanitizer with at least 60% alcohol content. Providers adhere to 
                                    industry best practices, which include disinfecting all equipment and surfaces 
                                    between clients.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* For Clients Section */}
                <Row className="mb-5">
                    <Col>
                        <Card style={{ border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                            <Card.Body className="p-4">
                                <div className="d-flex align-items-center mb-4">
                                    <UserOutlined style={{ fontSize: '24px', marginRight: '15px', color: 'black' }} />
                                    <h2 className="mb-0">For Clients</h2>
                                </div>
                                <h3 className="h4 mb-3">Vetted Providers</h3>
                                <p className="mb-4">
                                    Our network consists of licensed and insured massage therapists, professional 
                                    bodyworkers, and other wellness practitioners. All Hetyra providers are thoroughly 
                                    evaluated to ensure the highest quality service.
                                </p>
                                <h3 className="h4 mb-3">Provider Booking and Reviews</h3>
                                <p>
                                    When booking an appointment through Hetyra, clients receive a confirmation with 
                                    their provider's name, photo, bio, credentials. We encourage clients to reach 
                                    out to our support team if they have any issues or concerns.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* For Providers Section */}
                <Row>
                    <Col>
                        <Card style={{ border: 'none', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                            <Card.Body className="p-4">
                                <div className="d-flex align-items-center mb-4">
                                    <TeamOutlined style={{ fontSize: '24px', marginRight: '15px', color: 'black' }} />
                                    <h2 className="mb-0">For Providers</h2>
                                </div>
                                <h3 className="h4 mb-3">Safety & Support</h3>
                                <p className="mb-4">
                                    Hetyra providers have the right to decline any appointment based on a safety concern, 
                                    even after the appointment has started. Our Support and Trust & Safety teams are 
                                    available to assist providers at any time during an appointment.
                                </p>
                                <p>
                                    If a provider has a safety concern during or after an appointment, we recommend 
                                    they report it immediately to our Trust & Safety team by reaching out to Support 
                                    through the app or emailing <a href="mailto:help@hetyra.com">help@hetyra.com</a>.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
} 