import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import HelpBackground from '../../../Photos/HelpBackground.png'; // Make sure this path is correct

export default function HelpPage() {
    return (
        <div
            style={{
                backgroundImage: `url(${HelpBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Container>
                <Row className="justify-content-center">
                    <Col md={8} className="text-center">
                        <div
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                padding: '40px',
                                borderRadius: '10px',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                            }}
                        >
                            <h1 
                                style={{
                                    fontSize: '48px',
                                    fontWeight: 'bold',
                                    marginBottom: '30px'
                                }}
                            >
                                Welcome to Hetyra Support
                            </h1>
                            <p 
                                style={{
                                    fontSize: '18px',
                                    lineHeight: '1.6',
                                    color: '#666'
                                }}
                            >
                                We're here to help. Looking for customer service contact information? 
                                Simply send your inquiries to{' '}
                                <a 
                                    href="mailto:help@hetyra.com"
                                    style={{
                                        color: '#000',
                                        textDecoration: 'none',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    help@hetyra.com
                                </a>
                                .
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
} 