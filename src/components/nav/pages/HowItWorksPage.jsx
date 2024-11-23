import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function HowItWorksPage() {
    const steps = [
        {
            number: "Step 1",
            title: "A client opens the app",
            description: "The client enters their locations to see nearby available providers; reviews each session option for provider, service, duration and time; chooses the desired option; then confirms the session."
        },
        {
            number: "Step 2",
            title: "The provider gets notified",
            description: "The provider sees and chooses to accept the client's request. The client is automatically notified when the provider confirms the order."
        },
        {
            number: "Step 3",
            title: "The providers arrives at the address",
            description: "The client and the provider verify each other's names and order information. Then the session begins."
        },
        {
            number: "Step 4",
            title: "The provider completes the session",
            description: "Once the session is finished, the provider ensures the client is satisfied and confirms the session completion in the app."
        },
        {
            number: "Step 5",
            title: "The client and provider leave ratings and reviews",
            description: "At the end of each session, providers and clients can rate each other from 1 to 5 stars. Clients also have the option to give the driver compliments and a tip directly in the app."
        }
    ];

    return (
        <div style={{ backgroundColor: '#f8f9fa', padding: '60px 0' }}>
            <Container>
                {/* Header Section */}
                <Row className="text-center mb-5">
                    <Col>
                        <h1 style={{
                            fontSize: '48px',
                            fontWeight: 'bold',
                            marginBottom: '30px'
                        }}>
                            How to use the Hetyra app
                        </h1>
                        <p style={{
                            fontSize: '18px',
                            lineHeight: '1.6',
                            maxWidth: '800px',
                            margin: '0 auto',
                            color: '#666'
                        }}>
                            Our core service is developing technology that connects clients and providers 
                            on demand. Here's how the app works, step by step:
                        </p>
                    </Col>
                </Row>

                {/* Steps Section */}
                <Row className="justify-content-center">
                    <Col md={10}>
                        {steps.map((step, index) => (
                            <Card 
                                key={index}
                                className="mb-4"
                                style={{ 
                                    border: 'none',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.2s',
                                    cursor: 'default'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                <Card.Body className="p-4">
                                    <div className="d-flex align-items-center mb-3">
                                        <div
                                            style={{
                                                backgroundColor: 'black',
                                                color: 'white',
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '50%',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '20px',
                                                flexShrink: 0
                                            }}
                                        >
                                            {index + 1}
                                        </div>
                                        <h3 className="mb-0" style={{ fontSize: '24px' }}>
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p style={{
                                        fontSize: '18px',
                                        lineHeight: '1.6',
                                        marginLeft: '80px',
                                        marginBottom: 0,
                                        color: '#666'
                                    }}>
                                        {step.description}
                                    </p>
                                </Card.Body>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
} 