import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import InHomeService from "../../../Photos/InHomeServices.png";
import BeYourOwnBoss from "../../../Photos/BeYourOwnBoss.png";
import UserQR from "../../../Photos/userQR.png";
import ProviderQR from "../../../Photos/providerQR.png";

export default function LandingPage(props) {
  const [titleSize, setTitleSize] = useState("120px");
  const [subtitleSize, setSubtitleSize] = useState("32px");
  const [marginTop, setMarginTop] = useState("120px");

  useEffect(() => {
    // Function to update sizes based on window width
    const updateSizes = () => {
      if (window.innerWidth > 1600) {
        setTitleSize("120px");
        setSubtitleSize("32px");
        setMarginTop("30px");
      } else if (window.innerWidth > 1200) {
        setTitleSize("90px");
        setSubtitleSize("26px");
        setMarginTop("20px");
      } else if (window.innerWidth > 800) {
        setTitleSize("72px");
        setSubtitleSize("24px");
        setMarginTop("10px");
      } else {
        setTitleSize("48px");
        setSubtitleSize("20px");
        setMarginTop("0px");
      }
    };

    // Initial size setup
    updateSizes();

    // Add event listener for window resize
    window.addEventListener("resize", updateSizes);

    // Cleanup
    return () => window.removeEventListener("resize", updateSizes);
  }, []);

  return (
    <div style={{ backgroundColor: "white", minHeight: "calc(100vh - 200px)" }}>
      <Container
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "80px 20px 40px",
        }}
      >
        <Row
          className="text-center mb-5"
          style={{
            marginTop: marginTop,
            marginBottom: "120px",
            transition: "margin-top 0.3s ease",
          }}
        >
          <Col>
            <h1
              style={{
                fontSize: titleSize,

                marginBottom: "10px",
                color: "black",
                lineHeight: "1.1",
                transition: "font-size 0.3s ease",
                padding: "0 20px",
              }}
            >
              Relax anywhere,
            </h1>
            <h1
              style={{
                fontSize: titleSize,
                marginBottom: "60px",
                color: "black",
                lineHeight: "1.1",
                transition: "font-size 0.3s ease",
                padding: "0 20px",
              }}
            >
              anytime with Mayple
            </h1>
            <h4
              style={{
                color: "black",
                marginBottom: "60px",
                lineHeight: "1.4",
                fontSize: subtitleSize,
                transition: "font-size 0.3s ease",
                maxWidth: "1500px",
                margin: "0 auto",
                padding: "0 20px",
              }}
            >
              North America’s leading in-home massage platform, offering
              on-demand, professional therapeutic and wellness services.
            </h4>
          </Col>
        </Row>

        {/* First Card */}
        <Row
          className="mb-5"
          style={{
            marginTop: "120px",
          }}
        >
          <Col>
            <Card
              className="h-100"
              style={{
                border: "none",
                maxWidth: "1200px",
                margin: "0 auto",
              }}
            >
              <Row className="g-0 align-items-center">
                <Col md={6} className="d-flex justify-content-center">
                  <Card.Img
                    src={InHomeService}
                    alt="In-Home Massage Service"
                    style={{
                      borderRadius: "0 10px 10px 0",
                      maxWidth: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Col>
                <Col md={6}>
                  <Card.Body className="p-5" style={{ paddingLeft: "100px" }}>
                    <Card.Title as="h2" className="mb-4">
                      In-Home Services
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontSize: "18px",
                        lineHeight: "1.6",
                        marginBottom: "30px",
                      }}
                    >
                      Bring relaxation and rejuvenation straight to your
                      doorstep! With Mayple, you can easily book skilled massage
                      therapists at a time and place that fits your schedule.
                    </Card.Text>
                    <Link to="/in-home-services">
                      <Button
                        size="lg"
                        style={{
                          backgroundColor: "black",
                          border: "none",
                          padding: "12px 30px",
                          borderRadius: "5px",
                        }}
                      >
                        Get Started
                      </Button>
                    </Link>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        {/* Second Card */}
        <Row>
          <Col>
            <Card className="h-100" style={{ border: "none" }}>
              <Row className="g-0 align-items-center">
                <Col md={6}>
                  <Card.Body className="p-5">
                    <Card.Title as="h2" className="mb-4">
                      Be your own boss
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontSize: "18px",
                        lineHeight: "1.6",
                        marginBottom: "30px",
                      }}
                    >
                      Join Mayple and take control of your business. Set your
                      availability, define your service areas, manage
                      appointments, and maximize your earning potential—all with
                      ease through the Mayple Provider App.
                    </Card.Text>
                    <Link to="/providers">
                      <Button
                        size="lg"
                        style={{
                          backgroundColor: "black",
                          border: "none",
                          padding: "12px 30px",
                          borderRadius: "5px",
                        }}
                      >
                        Become a Provider
                      </Button>
                    </Link>
                  </Card.Body>
                </Col>
                <Col md={6}>
                  <Card.Img
                    src={BeYourOwnBoss}
                    alt="Be Your Own Boss"
                    style={{
                      borderRadius: "0 10px 10px 0",
                      maxWidth: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        {/* Do more in the app Section */}
        <Row className="mt-5 pt-5">
          <Col className="text-center mb-5">
            <h2 style={{ marginBottom: "50px" }}>Do more in the app</h2>
            <Row className="justify-content-center">
              <Col md={6} className="mb-4">
                <Card
                  style={{
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    borderRadius: "10px",
                    height: "100%",
                  }}
                >
                  <Card.Body className="d-flex flex-row align-items-center p-4">
                    <div className="me-4">
                      <img
                        src={UserQR}
                        alt="Mayple User App QR Code"
                        style={{
                          width: "150px",
                          height: "150px",
                        }}
                      />
                    </div>
                    <div className="text-start">
                      <h4 className="mb-2">Download the Mayple app</h4>
                      <p className="text-muted">Scan to download</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card
                  style={{
                    border: "none",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    borderRadius: "10px",
                    height: "100%",
                  }}
                >
                  <Card.Body className="d-flex flex-row align-items-center p-4">
                    <div className="me-4">
                      <img
                        src={ProviderQR}
                        alt="Mayple Provider App QR Code"
                        style={{
                          width: "150px",
                          height: "150px",
                        }}
                      />
                    </div>
                    <div className="text-start">
                      <h4 className="mb-2">Download the Provider app</h4>
                      <p className="text-muted">Scan to download</p>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
