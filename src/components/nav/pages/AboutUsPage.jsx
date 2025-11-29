import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import Component from "./Component";
import AboutUsPhoto from "../../../Photos/AboutUsPhoto.png"; // Import the photo

export default function AboutUsPage() {
  const companyValues = [
    {
      title: "Our Mission",
      photo: "",
      text: "MaySage is dedicated to redefining the massage therapy industry by empowering clients and therapists alike through our state-of-the-art platform. Our mission is to make high-quality, professional massage services universally accessible, ensuring convenience, safety, and satisfaction at every step.",
    },
    {
      title: "Our Vision",
      photo: "",
      text: "We aspire to be the global leader in on-demand wellness, crafting a world where stress relief and relaxation are within everyone's reach. Our vision is a future where therapists thrive professionally and clients enjoy unparalleled access to transformative massage experiences, all powered by technology and trust.",
    },
    {
      title: "Our Values",
      photo: "",
      text: "At MaySage, our core values shape everything we do. Excellence is at the heart of our mission, driving us to deliver unparalleled service to both therapists and clients. Accessibility guides our commitment to making professional wellness services available to everyone, anytime, anywhere. Safety is foundational to our platform, ensuring a secure and reliable environment for all users. Innovation fuels our journey as we adapt and evolve with advanced technology to meet the ever-changing needs of the wellness industry. Finally, we believe in Empowerment—supporting therapists to build successful careers while enriching clients' lives with easy access to care.",
    },
    {
      title: "Our Technology",
      photo: "",
      text: "MaySage is powered by advanced technology, designed to simplify and elevate the massage therapy experience. Our smart matching system uses sophisticated algorithms to connect clients with therapists who best suit their unique preferences and requirements. Real-time booking functionality allows users to schedule appointments effortlessly, avoiding delays and conflicts. We prioritize financial security through robust, seamless transaction systems. Safety is enhanced with tools like identity verification, location tracking, and emergency assistance, ensuring trust and reliability for everyone involved. Constant innovation keeps MaySage ahead, with our team continuously refining the platform and introducing new features to meet the evolving needs of our users.",
    },
  ];

  const keyFeatures = [
    {
      title: "Safety First",
      photo: "",
      text: "At MaySage, safety is our highest priority. We conduct thorough background checks, verify licenses, and continuously monitor the performance of all therapists to ensure professionalism and trust. Our platform features real-time appointment tracking, giving clients and therapists transparency and peace of mind throughout the service. Additionally, integrated emergency assistance tools are in place to address unexpected situations quickly and effectively, ensuring a safe and secure experience for everyone.",
    },
    {
      title: "Uncompromising Quality",
      photo: "",
      text: "Quality defines every aspect of our service. All therapists on the MaySage platform are certified professionals with extensive training and proven experience. To maintain excellence, we provide regular training sessions and skill development workshops. We also actively gather and analyze client feedback to refine our services continuously. By upholding rigorous standards, we ensure that every session delivered through MaySage exceeds expectations and provides unparalleled relaxation and wellness.",
    },
    {
      title: "Dedicated Customer Support",
      photo: "",
      text: "Our commitment to exceptional customer care is reflected in our 24/7 support system. Our dedicated team is always ready to assist, whether it's helping clients book or reschedule appointments or following up after a service. We prioritize clear communication and personalized solutions to address individual needs. By managing every detail with care, we ensure a seamless and stress-free experience for both clients and therapists.",
    },
  ];

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
                About Us
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.6",
                }}
              >
                Founded in 2024, MaySage is transforming the massage therapy
                industry through technology. We connect certified massage
                therapists with clients seeking professional massage services,
                making wellness accessible to everyone.
              </p>
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <img
                src={AboutUsPhoto}
                alt="About MaySage"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  height: "auto",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Body Section */}
      <Container className="py-5">
        {/* Our Foundation Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="mb-4">Our Foundation</h2>
            <p className="mb-5" style={{ fontSize: "18px", lineHeight: "1.6" }}>
              At MaySage, we believe in transforming the way people experience
              wellness and relaxation by seamlessly blending innovation,
              professionalism, and accessibility.
            </p>
            {companyValues.map((value, index) => (
              <Card
                key={index}
                className="mb-4"
                style={{
                  border: "none",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  cursor: "default",
                }}
              >
                <Card.Body className="p-4">
                  <h3 className="mb-3">{value.title}</h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    {value.text}
                  </p>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>

        {/* What Sets Us Apart Section */}
        <Row className="mt-5">
          <Col>
            <h2 className="mb-4">What Sets Us Apart</h2>
            {keyFeatures.map((feature, index) => (
              <Card
                key={index}
                className="mb-4"
                style={{
                  border: "none",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  cursor: "default",
                }}
              >
                <Card.Body className="p-4">
                  <h3 className="mb-3">{feature.title}</h3>
                  <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
                    {feature.text}
                  </p>
                </Card.Body>
              </Card>
            ))}
            <p
              style={{ fontSize: "16px", lineHeight: "1.6", marginTop: "20px" }}
            >
              MaySage stands apart as a trusted and innovative platform,
              delivering safety, quality, and care in every interaction. Through
              our unwavering dedication to these values, we make wellness
              accessible, reliable, and exceptional for all.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
