import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  SafetyOutlined,
  UserOutlined,
  CheckCircleOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import TrustPhoto from "../../../Photos/TrustPhoto.png";

export default function TrustSafetyPage() {
  return (
    <div style={{ backgroundColor: "white" }}>
      {/* Banner Section */}
      <Container
        fluid
        style={{ backgroundColor: "black", color: "white", padding: "60px 0" }}
      >
        <Container style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Row className="align-items-center">
            <Col md={6}>
              <h1
                style={{
                  fontSize: "48px",
                  fontWeight: "bold",
                  marginBottom: "30px",
                }}
              >
                Trust & Safety
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                }}
              >
                At MaySage, we are deeply committed to maintaining a safe,
                respectful, and supportive environment for all users and
                providers.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <img
                src={TrustPhoto}
                alt="Trust and Safety"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "10px",
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
            <Card
              style={{ border: "none", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
            >
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <SafetyOutlined
                    style={{
                      fontSize: "24px",
                      marginRight: "15px",
                      color: "black",
                    }}
                  />
                  <h2 className="mb-0">Health & Safety Guidelines</h2>
                </div>
                <p className="mb-4">
                  Our dedicated team of Trust & Safety professionals is
                  continuously updating and monitoring our health and safety
                  guidelines. These guidelines align with federal, provincial,
                  and local directives for the delivery of wellness services,
                  ensuring a safe experience for everyone.
                </p>
                <h3 className="h4 mb-3">Cleanliness Practices</h3>
                <p>
                  MaySage providers follow CDC guidelines on hand hygiene,
                  including washing hands or using hand sanitizer with at least
                  60% alcohol content. Providers adhere to industry best
                  practices, which include disinfecting all equipment and
                  surfaces between clients.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* For Clients Section */}
        <Row className="mb-5">
          <Col>
            <Card
              style={{ border: "none", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
            >
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <UserOutlined
                    style={{
                      fontSize: "24px",
                      marginRight: "15px",
                      color: "black",
                    }}
                  />
                  <h2 className="mb-0">For Clients</h2>
                </div>
                <h3 className="h4 mb-3">Vetted Providers</h3>
                <p className="mb-4">
                  Our network consists of licensed and insured massage
                  therapists, professional bodyworkers, and other wellness
                  practitioners. All MaySage providers are thoroughly evaluated
                  to ensure the highest quality service.
                </p>
                <h3 className="h4 mb-3">Provider Booking and Reviews</h3>
                <p>
                  When booking an appointment through MaySage, clients receive a
                  confirmation with their provider's name, photo, bio,
                  credentials. We encourage clients to reach out to our support
                  team if they have any issues or concerns.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* For Providers Section */}
        <Row>
          <Col>
            <Card
              style={{ border: "none", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}
            >
              <Card.Body className="p-4">
                <div className="d-flex align-items-center mb-4">
                  <TeamOutlined
                    style={{
                      fontSize: "24px",
                      marginRight: "15px",
                      color: "black",
                    }}
                  />
                  <h2 className="mb-0">For Providers</h2>
                </div>
                <p className="mb-4">
                  Your safety is our priority. At MaySage, we are deeply
                  committed to maintaining a safe, respectful, and supportive
                  environment for all providers. We’ve implemented systems and
                  resources to ensure your safety and peace of mind with every
                  appointment.
                </p>
                <h3 className="h4 mb-3">Safety Features</h3>
                <p className="mb-4">
                  We provide immediate emergency support if you ever feel unsafe
                  during an appointment. Our built-in check-in and check-out
                  system allows us to track your well-being throughout each
                  session. In addition, our dedicated Provider Support team is
                  available every day of the year to assist you with anything
                  you need.
                </p>
                <h3 className="h4 mb-3">Verified Clients</h3>
                <p className="mb-4">
                  All clients and patients on the MaySage platform are verified
                  before they can book appointments. However, please note that
                  while we confirm identity, MaySage does not conduct background
                  checks on clients or patients.
                </p>
                <h3 className="h4 mb-3">Booking Transparency</h3>
                <p className="mb-4">
                  As soon as a client books an appointment with you, their name,
                  address, phone number, and rating will be visible in the app.
                  You’ll also have access to any notes or special instructions
                  they’ve included with the booking. We encourage you to reach
                  out to clients directly by phone before the appointment to
                  confirm details and discuss any specific needs or
                  expectations.
                </p>
                <h3 className="h4 mb-3">Provider Feedback</h3>
                <p className="mb-4">
                  After each appointment, providers are encouraged to rate their
                  experience with the client directly in the app. Open
                  communication is highly valued—if you have any concerns about
                  a client or their environment, please don’t hesitate to share
                  your feedback with the MaySage team so we can respond
                  appropriately and ensure a safe experience for everyone.
                </p>

                <h3 className="h4 mb-3">Trust & Safety</h3>
                <p className="mb-4">
                  You always have the right to decline or end an appointment at
                  any time if you feel there’s a trust or safety issue. If any
                  concern rises to the level of personal safety, please report
                  the client immediately to our Trust & Safety team. You can
                  contact us by emailing{" "}
                  <a href="mailto:providers@MaySage.com">
                    providers@MaySage.com
                  </a>{" "}
                  or by calling your dedicated account manager.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
