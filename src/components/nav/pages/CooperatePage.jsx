import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SectionLeft from "./SectionLeft"
import SectionRight from "./SectionRight"

export default function CooperatePage() {
    const sectionsData = [
        {
            title: "Benefits of Partnering with HETYRA",
            photo: "",
            text: "Join our platform and enjoy flexible working hours, competitive earnings, and a steady stream of clients. Our therapists earn 70-80% of service fees, with bonuses for high ratings and consistent performance. We provide insurance coverage and professional development opportunities.",
            text2: "Use our advanced booking system to manage your schedule efficiently. Our platform handles payments, marketing, and customer service, letting you focus on what you do best - providing excellent massage therapy."
        },
        {
            title: "Requirements & Standards",
            photo: "",
            text: "We maintain high standards to ensure client safety and satisfaction. Requirements include: valid massage therapy license, minimum 2 years of professional experience, clean background check, and professional liability insurance.",
            text2: "All therapists must complete HETYRA's safety and service quality training program. We value professionalism, punctuality, and commitment to customer satisfaction."
        },
        {
            title: "Join Our Network",
            photo: "",
            text: "Getting started is easy: Submit your application online, complete our verification process, attend orientation training, and start accepting bookings. Our support team is available 24/7 to help you succeed.",
            text2: "Join our growing community of professional therapists and be part of the future of on-demand massage services."
        }
    ];

    return (
        <Container style={{ backgroundColor: '#f8f9fa' }}>
            <Row className="text-center mb-4">
                <Col>
                    <h1>Partner With Us</h1>
                    <br/>
                    <p className="lead">
                        Are you a licensed massage therapist looking to grow your practice? 
                        Join HETYRA's network of professional therapists and connect with clients seeking quality massage services.
                    </p>
                </Col>
            </Row>

            {sectionsData.map((section, index) => (
                <Row key={index}>
                    <Col>
                        {index % 2 === 0 ? (
                            <SectionLeft 
                                title={section.title} 
                                photo={section.photo} 
                                text={section.text} 
                                text2={section.text2} 
                            />
                        ) : (
                            <SectionRight 
                                title={section.title} 
                                photo={section.photo} 
                                text={section.text} 
                                text2={section.text2} 
                            />
                        )}
                    </Col>
                </Row>
            ))}

            <Row className="text-center my-5">
                <Col>
                    <h3>Ready to Join?</h3>
                    <p>Start your journey with HETYRA today</p>
                    <button 
                        className="btn btn-primary btn-lg"
                        style={{
                            backgroundColor: '#007bff',
                            border: 'none',
                            padding: '12px 30px',
                            borderRadius: '25px'
                        }}
                    >
                        Apply Now
                    </button>
                </Col>
            </Row>
        </Container>
    );
}