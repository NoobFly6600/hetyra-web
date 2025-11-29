import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Component from "./Component";

export default function HomePage(props) {
  return (
    <div
      style={{ backgroundColor: "#f8f9fa", minHeight: "calc(100vh - 200px)" }}
    >
      <Container fluid={true} style={{ padding: "40px 20px" }}>
        <Row className="text-center mb-5">
          <Col>
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                marginBottom: "30px",
              }}
            >
              A Tech-driven Massage Service Platform
            </h1>

            <h4
              style={{
                color: "#666",
                marginBottom: "30px",
                lineHeight: "1.6",
              }}
            >
              Adhering to the 'Wellness + Technology' strategy, MaySage commits
              to its mission that 'We help people relax better, feel better'.
            </h4>

            <p
              style={{
                color: "#777",
                maxWidth: "1000px",
                margin: "0 auto",
                lineHeight: "1.8",
              }}
            >
              Since its establishment in 2024, MaySage has advanced the digital
              transformation of massage services by connecting certified
              therapists with customers. Through our innovative platform, we
              provide high-quality on-demand massage services that bring
              relaxation and wellness directly to your location. MaySage
              prioritizes customer satisfaction and therapist safety,
              continuously investing in new technologies to enhance the massage
              service experience.
            </p>
          </Col>
        </Row>

        {/* You can add images or icons here similar to Meituan's layout */}
        <Row className="justify-content-center mt-5">
          <Col md={8}>
            <img
              src="/path-to-your-illustration.png"
              alt="MaySage Service Illustration"
              style={{ width: "100%", maxWidth: "1200px" }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
