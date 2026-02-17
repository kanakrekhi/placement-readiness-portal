// Roles.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import {
  FaCode,
  FaShieldAlt,
  FaBrain,
  FaChartLine,
  FaRobot,
  FaBalanceScale
} from "react-icons/fa";
import AssessmentModal from "./pages/AssessmentModal";

const roles = [
  {
    title: "Full Stack Developer",
    slug: "full-stack",
    icon: <FaCode size={42} />,
    desc: "Build modern, scalable web applications using frontend & backend technologies."
  },
  {
    title: "Cyber Security",
    slug: "cyber-security",
    icon: <FaShieldAlt size={42} />,
    desc: "Protect systems, networks, and sensitive data from cyber threats."
  },
  {
    title: "Psychologist",
    slug: "psychologist",
    icon: <FaBrain size={42} />,
    desc: "Understand human behavior and improve mental well-being professionally."
  },
  {
    title: "Financial Analyst",
    slug: "financial-analyst",
    icon: <FaChartLine size={42} />,
    desc: "Analyze financial data to guide smart investment decisions."
  },
  {
    title: "AI & Data Analyst",
    slug: "ai-data-analyst",
    icon: <FaRobot size={42} />,
    desc: "Work with data, machine learning, and AI tools."
  },
  {
    title: "Lawyer",
    slug: "lawyer",
    icon: <FaBalanceScale size={42} />,
    desc: "Practice law, analyze legal cases, and provide professional legal guidance."
  }
];

export default function Roles() {
  const navigate = useNavigate();
  const [showAssessment, setShowAssessment] = useState(false);

  return (
    <div className="bg-dark text-white" style={{ minHeight: "100vh" }}>
      {/* HERO SECTION */}
      <div className="bg-primary py-5 text-center" style={{ background: "linear-gradient(120deg, #667eea, #764ba2)" }}>
        <Container>
          <h1 className="fw-bold display-5">Choose Your Career Path</h1>
          <p className="mt-3 fs-5 opacity-75">
            Role-based learning tracks crafted for placements & real-world success
          </p>
        </Container>
      </div>

      {/* CAROUSEL SECTION */}
      <Container className="my-5">
        <Carousel indicators={false} controls={true} interval={3000}>
          {roles.map((role, index) => (
            <Carousel.Item key={index}>
              <div 
                className="d-flex flex-column justify-content-center align-items-center text-center p-5 mx-auto"
                style={{ 
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "18px",
                  height: "260px",
                  maxWidth: "800px",
                  margin: "0 auto"
                }}
              >
                <div className="mb-3 text-info">{role.icon}</div>
                <h3 className="fw-semibold text-white">{role.title}</h3>
                <p className="opacity-75 text-white-50">{role.desc}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      {/* ROLE CARDS SECTION */}
      <Container className="pb-5">
        <Row className="g-4">
          {roles.map((role, index) => (
            <Col md={6} lg={4} key={index}>
              <Card 
                bg="dark" 
                text="white" 
                className="h-100 text-center border-0"
                style={{ 
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px"
                }}
              >
                <Card.Body className="p-4">
                  <div className="mb-3 text-info">{role.icon}</div>
                  <Card.Title className="fw-semibold fs-5">
                    {role.title}
                  </Card.Title>
                  <Card.Text className="text-white-50 small">
                    {role.desc}
                  </Card.Text>
                  <Button
                    variant="outline-info"
                    size="sm"
                    className="mt-2 px-4 rounded-pill"
                    onClick={() => navigate(`/modules/${role.slug}`)}
                  >
                    View Modules
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* CTA SECTION */}
      <div className="bg-dark py-5 text-center" style={{ background: "linear-gradient(120deg, #141e30, #243b55)" }}>
        <Container>
          <h3 className="fw-semibold text-white">Not sure which role suits you?</h3>
          <p className="text-white-50 mb-4">
            Take our smart assessment and get a personalized career recommendation.
          </p>
          <Button 
            size="lg" 
            variant="primary"
            className="rounded-pill px-5"
            onClick={() => setShowAssessment(true)}
            style={{ 
              background: "linear-gradient(45deg, #667eea, #764ba2)",
              border: "none"
            }}
          >
            Take Assessment
          </Button>
        </Container>
      </div>

      {/* ASSESSMENT MODAL */}
      <AssessmentModal 
        show={showAssessment} 
        onHide={() => setShowAssessment(false)} 
      />
    </div>
  );
}