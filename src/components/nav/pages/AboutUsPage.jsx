import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import Component from './Component';

export default function AboutUsPage() {
    const companyValues = [
        {
            title: 'Our Mission',
            photo: '',
            text: 'HETYRA is committed to revolutionizing the massage therapy industry by connecting qualified therapists with clients through our innovative platform. We aim to make professional massage services more accessible, convenient, and safe for everyone.'
        },
        {
            title: 'Our Vision',
            photo: '',
            text: 'To become the leading on-demand massage service platform, creating a world where wellness and relaxation are just a tap away. We envision a future where both therapists and clients can benefit from seamless, technology-driven massage services.'
        },
        {
            title: 'Our Technology',
            photo: '',
            text: 'Our platform leverages cutting-edge technology to provide real-time booking, secure payments, and intelligent matching between clients and therapists. We continuously innovate to enhance the user experience and ensure safety for all parties.'
        }
    ];

    const keyFeatures = [
        {
            title: 'Safety First',
            photo: '',
            text: 'We implement rigorous verification processes for all therapists, including background checks, license verification, and ongoing performance monitoring. Our platform includes real-time tracking and emergency assistance features.'
        },
        {
            title: 'Quality Service',
            photo: '',
            text: 'All our therapists are certified professionals with extensive experience. We maintain high service standards through regular training, quality assessments, and client feedback systems.'
        },
        {
            title: 'Customer Care',
            photo: '',
            text: 'Our dedicated support team is available 24/7 to assist both clients and therapists. We handle all aspects of customer service, from booking support to post-service follow-up.'
        }
    ];

    return (
        <Container style={{ backgroundColor: '#f8f9fa' }}>
            <Row className="mb-4">
                <Col>
                    <h1>About HETYRA</h1>
                    <br/>
                    <p className="lead">
                        Founded in 2024, HETYRA is transforming the massage therapy industry through technology. 
                        We connect certified massage therapists with clients seeking professional massage services, 
                        making wellness accessible to everyone.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col>
                    <h3>Our Foundation</h3>
                </Col>
            </Row>
            <br/>
            {companyValues.map((section, index) => (
                <Component key={index} title={section.title} photo={section.photo} text={section.text} />
            ))}

            <Row className="mt-5">
                <Col>
                    <h3>What Sets Us Apart</h3>
                </Col>
            </Row>
            <br/>
            {keyFeatures.map((section, index) => (
                <Component key={index} title={section.title} photo={section.photo} text={section.text} />
            ))}

            <Row className="text-center my-5">
                <Col>
                    <Card className="p-4" style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                        <h4>Join Us in Revolutionizing Wellness</h4>
                        <p>
                            Whether you're a client seeking quality massage services or a therapist looking to grow your practice, 
                            HETYRA provides the platform to connect, engage, and experience wellness in a new way.
                        </p>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}