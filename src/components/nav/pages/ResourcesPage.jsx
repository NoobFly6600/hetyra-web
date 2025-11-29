import { Col, Container, Row } from "react-bootstrap";
import { Divider } from "antd";

export default function ResourcesPage(props) {
  const resources = [
    {
      author: "American Massage Therapy Association",
      year: "2024",
      title: "Benefits of Massage",
      url: "https://www.amtamassage.org/benefits-of-massage/",
    },
    {
      author: "National Certification Board for Therapeutic Massage & Bodywork",
      year: "2024",
      title: "Find a Certified Massage Therapist",
      url: "https://www.ncbtmb.org/",
    },
    {
      author: "Maypleo Clinic",
      year: "2023",
      title: "Massage: Get in touch with its many health benefits",
      url: "https://www.Maypleoclinic.org/healthy-lifestyle/stress-management/in-depth/massage/art-20045743",
    },
    {
      author: "WebMD",
      year: "2023",
      title: "Types of Massage: Swedish, Deep Tissue, and More",
      url: "https://www.webmd.com/balance/guide/massage-therapy-styles-and-health-benefits",
    },
  ];

  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>
      <h1 style={{ textAlign: "center" }}>Additional Resources</h1>
      <br />
      <div
        style={{ backgroundColor: "#f8f9fa", minHeight: "calc(100vh - 200px)" }}
      >
        <Container fluid>
          <Row className="justify-content-center mb-5">
            <Col md={8}>
              <h3>Popular Massage Types</h3>
              <ul>
                <li>
                  Swedish Massage - Gentle, relaxing massage using long strokes
                  and kneading
                </li>
                <li>
                  Deep Tissue Massage - Targets deeper muscle layers to release
                  chronic tension
                </li>
                <li>
                  Sports Massage - Helps prevent and treat injuries for athletes
                </li>
                <li>
                  Thai Massage - Combines stretching and pressure point therapy
                </li>
                <li>
                  Hot Stone Massage - Uses heated stones for deeper relaxation
                </li>
              </ul>
            </Col>
          </Row>

          <Divider style={{ height: "50px" }}>Health Benefits</Divider>

          <Row className="justify-content-center mb-5">
            <Col md={8}>
              <ul>
                <li>Reduces stress and anxiety</li>
                <li>Relieves muscle tension and pain</li>
                <li>Improves circulation and flexibility</li>
                <li>Enhances sleep quality</li>
                <li>Boosts immune system function</li>
                <li>Helps with headaches and migraines</li>
              </ul>
            </Col>
          </Row>

          <Divider style={{ height: "50px" }}>Safety Guidelines</Divider>

          <Row className="justify-content-center mb-5">
            <Col md={8}>
              <h4>Before Your Massage:</h4>
              <ul>
                <li>Communicate any medical conditions or injuries</li>
                <li>Discuss pressure preferences with your therapist</li>
                <li>Stay hydrated before and after your session</li>
                <li>Arrive 5-10 minutes early to complete forms</li>
              </ul>
            </Col>
          </Row>

          <Divider style={{ height: "50px" }}>Helpful Links</Divider>

          <Row>
            <Col xs={12}>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                {resources.map((ref, index) => (
                  <li key={index} style={{ marginBottom: "10px" }}>
                    <a
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "blue" }}
                    >
                      {`${ref.author}. (${ref.year}). ${ref.title}`}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </Container>
        <br></br>
        <br></br>
        <br></br>
      </div>
    </div>
  );
}
