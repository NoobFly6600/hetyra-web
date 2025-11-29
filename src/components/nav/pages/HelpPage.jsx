import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import HelpBackground from "../../../Photos/HelpBackground.png";

export default function HelpPage() {
  return (
    <div
      style={{
        backgroundImage: `url(${HelpBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container fluid style={{ maxWidth: "1400px" }}>
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            <h1
              style={{
                fontSize: "48px",
                fontWeight: "bold",
                marginBottom: "30px",
                color: "black",
              }}
            >
              Welcome to MaySage Support
            </h1>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "black",
              }}
            >
              We're here to help. Looking for customer service contact
              information?
            </p>
            <p
              style={{
                fontSize: "18px",
                lineHeight: "1.6",
                color: "black",
              }}
            >
              Simply send your inquiries to{" "}
              <a
                href="mailto:help@MaySage.com"
                style={{
                  color: "black",
                  textDecoration: "underline",
                  fontWeight: "bold",
                }}
              >
                help@MaySage.com
              </a>
              .
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
