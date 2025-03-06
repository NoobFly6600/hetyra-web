import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import FifthPhoto from '../../../Photos/FifthPhoto.png';
import SixthPhoto from '../../../Photos/SixthPhoto.png';
import SeventhPhoto from '../../../Photos/SeventhPhoto.png';
import {
    DollarOutlined,
    CalendarOutlined,
    BuildOutlined,
    TeamOutlined,
    ShakeOutlined,
    SafetyCertificateOutlined
} from '@ant-design/icons';

export default function ProvidersPage() {
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
                                Be your own boss
                            </h1>
                            <p style={{
                                fontSize: '18px',
                                lineHeight: '1.6'
                            }}>
                                Set your own services and prices. Earn on your own schedule.
                            </p>
                        </Col>
                        <Col md={6} className="d-flex justify-content-center">
                            <img
                                src={FifthPhoto}
                                alt="Be Your Own Boss"
                                style={{
                                    maxWidth: '600px',
                                    height: 'auto',
                                    objectFit: 'cover',
                                    borderRadius: '10px',
                                    width: '100%'
                                }}
                            />
                        </Col>
                    </Row>
                </Container>
            </Container>

            {/* Body Section */}
            <Container fluid className="py-5">
                {/* Join Network Section */}
                <Row className="mb-5">
                    <Col>
                        <h2 className="text-center mb-5">Join the Hetyra Provider Network</h2>
                        <Card style={{
                            border: 'none',
                            maxWidth: '1100px',
                            margin: '0 auto'
                        }}>
                            <Row className="g-0 align-items-center">
                                <Col md={6} className="d-flex justify-content-center">
                                    <Card.Img
                                        src={SixthPhoto}
                                        alt="Provider Benefits"
                                        style={{
                                            borderRadius: '10px 0 0 10px',
                                            width: '700px',
                                            objectFit: 'cover',
                                            marginRight: '30px',
                                            maxWidth: '100%',
                                            height: 'auto'
                                        }}
                                    />
                                </Col>
                                <Col md={6} className="d-flex justify-content-start">
                                    <Card.Body className="p-5" style={{ marginLeft: '10px' }}>
                                        <p style={{
                                            fontSize: '18px',
                                            lineHeight: '1.8',
                                            marginBottom: '20px'
                                        }}>
                                            As part of a growing community of massage and bodywork professionals, you have the freedom to offer services on your terms—set your own prices and customize your offerings.
                                        </p>
                                        <p style={{
                                            fontSize: '18px',
                                            lineHeight: '1.8'
                                        }}>
                                            With Hetyra, you can earn up to 90% of the payment for each session, including 100% of the tips. Take control of your schedule by accepting as many appointments as you like. Get paid bimonthly and enjoy the ultimate flexibility to grow your business on your own terms.
                                        </p>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

                {/* Get Started Steps - Moved to second section */}
                <Row className="mb-5">
                    <Col>
                        <h2 className="text-center mb-4">Get Started in 3 Easy Steps</h2>
                        <Card style={{
                            border: 'none',
                            maxWidth: '1100px',
                            margin: '0 auto'
                        }}>
                            <Row className="g-0 align-items-center">
                                <Col md={6}>
                                    <Card.Body className="p-5">
                                        <Row className="justify-content-center">
                                            <Col>
                                                {[
                                                    {
                                                        title: "Submit Your Application",
                                                        description: "We'll review your details and verify your identity, insurance, credentials, and experience."
                                                    },
                                                    {
                                                        title: "Join the Team",
                                                        description: "Once approved, you'll receive all the resources and guidance needed to thrive on our platform."
                                                    },
                                                    {
                                                        title: "Begin Earning",
                                                        description: "Take appointments on your schedule with the Hetyra Provider app. Our support team is always here for you."
                                                    }
                                                ].map((step, index) => (
                                                    <Card
                                                        key={index}
                                                        className="mb-3"
                                                        style={{
                                                            border: 'none',
                                                            transition: 'transform 0.2s',
                                                            cursor: 'default',
                                                            fontSize: '16px'
                                                        }}
                                                        onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                                                        onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                                    >
                                                        <Card.Body className="p-2">
                                                            <div className="d-flex align-items-center mb-2">
                                                                <div
                                                                    style={{
                                                                        backgroundColor: 'black',
                                                                        color: 'white',
                                                                        width: '30px',
                                                                        height: '30px',
                                                                        borderRadius: '50%',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        marginRight: '15px',
                                                                        flexShrink: 0,
                                                                        fontSize: '14px'
                                                                    }}
                                                                >
                                                                    {index + 1}
                                                                </div>
                                                                <h4 className="mb-0" style={{ fontSize: '20px' }}>
                                                                    {step.title}
                                                                </h4>
                                                            </div>
                                                            <p style={{
                                                                fontSize: '16px',
                                                                lineHeight: '1.4',
                                                                marginLeft: '50px',
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
                                    </Card.Body>
                                </Col>
                                <Col md={6}>
                                    <Card.Img
                                        src={SeventhPhoto}
                                        alt="Earnings Potential"
                                        style={{
                                            borderRadius: '0 10px 10px 0',
                                            width: '700px',
                                            objectFit: 'cover',
                                            maxWidth: '100%',
                                            height: 'auto'
                                        }}
                                    />
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

                {/* Why Become a Provider Section */}
                <Row className="mt-5" style={{ maxWidth: '2000px', margin: '0 auto' }}>
                    <Col>
                        <h2 className="text-center mb-5">Why become a provider at Hetyra?</h2>
                        <Row className="justify-content-center">
                            <Col md={10}>
                                <Row>
                                    {[
                                        {
                                            icon: <DollarOutlined style={{ fontSize: '24px' }} />,
                                            title: "Earn More, On Your Terms",
                                            description: "Earn 2 to 3 times more than the industry standard while keeping up to 90% of each payment. Get fast payment processing and receive 100% of your tips directly through the app."
                                        },
                                        {
                                            icon: <CalendarOutlined style={{ fontSize: '24px' }} />,
                                            title: "Ultimate Flexibility",
                                            description: "Take control of your business by setting your own services and prices. Choose when and where to accept appointments, even while traveling."
                                        },
                                        {
                                            icon: <BuildOutlined style={{ fontSize: '24px' }} />,
                                            title: "Grow Your Business",
                                            description: "Gain exclusive access to a vast network of wellness clients and app features designed to help you secure more bookings and expand your business."
                                        },
                                        {
                                            icon: <TeamOutlined style={{ fontSize: '24px' }} />,
                                            title: "Safety at the Forefront",
                                            description: "Our proprietary check-in/check-out system ensures your safety during appointments. Plus, our Trust & Safety team is always ready to support you."
                                        },
                                        {
                                            icon: <ShakeOutlined style={{ fontSize: '24px' }} />,
                                            title: "Support When You Need It",
                                            description: "Our dedicated Provider Support team is available 365 days a year via the app, phone, text, or email—whenever you need assistance."
                                        },
                                        {
                                            icon: <SafetyCertificateOutlined style={{ fontSize: '24px' }} />,
                                            title: "Manage Everything with Ease",
                                            description: "Run your business effortlessly using the Hetyra Provider app, available on both iOS and Android, giving you full control at your fingertips."
                                        }
                                    ].map((item, index) => (
                                        <Col md={4} key={index} className="mb-4">
                                            <Card
                                                style={{
                                                    border: 'none',
                                                    transition: 'transform 0.2s',
                                                    cursor: 'default',
                                                    height: '100%'
                                                }}
                                                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                                                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                            >
                                                <Card.Body className="p-4">
                                                    <div className="d-flex align-items-center mb-3">
                                                        <div
                                                            style={{
                                                                backgroundColor: 'black',
                                                                color: 'white',
                                                                width: '50px',
                                                                height: '50px',
                                                                borderRadius: '50%',
                                                                display: 'flex',
                                                                alignItems: 'center',
                                                                justifyContent: 'center',
                                                                marginRight: '15px',
                                                                flexShrink: 0
                                                            }}
                                                        >
                                                            {item.icon}
                                                        </div>
                                                        <h4 className="mb-0" style={{ fontSize: '20px' }}>
                                                            {item.title}
                                                        </h4>
                                                    </div>
                                                    <p style={{
                                                        fontSize: '16px',
                                                        lineHeight: '1.4',
                                                        marginBottom: 0,
                                                        color: '#666'
                                                    }}>
                                                        {item.description}
                                                    </p>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>

                {/* How to Apply Section */}
                <Row className="mt-5">
                    <Col>
                        <h2 className="text-center mb-5">How to apply?</h2>
                        <p style={{
                            fontSize: '16px',
                            lineHeight: '1.6',
                            maxWidth: '800px',
                            margin: '0 auto',
                            color: '#666',
                            textAlign: 'center'
                        }}>
                            Interested in joining the Hetyra Provider community? Send your resume to <a href="mailto:providers@hetyra.com">providers@hetyra.com</a> and take the first step toward offering your services on our platform. We look forward to welcoming you!
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
} 