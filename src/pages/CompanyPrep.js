import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaGoogle,
  FaMicrosoft,
  FaAmazon,
  FaFacebook,
  FaApple,
  FaTv // ✅ Replace FaNetflix with FaTv
} from "react-icons/fa";

const companies = [
  {
    id: "google",
    name: "Google",
    icon: <FaGoogle size={50} className="text-warning" />,
    description: "Master Google's interview process with curated questions on algorithms, system design, and aptitude.",
    applyLink: "https://careers.google.com/"
  },
  {
    id: "microsoft",
    name: "Microsoft",
    icon: <FaMicrosoft size={50} className="text-info" />,
    description: "Prepare for Microsoft with commonly asked DSA, OS, and aptitude questions.",
    applyLink: "https://careers.microsoft.com/"
  },
  {
    id: "amazon",
    name: "Amazon",
    icon: <FaAmazon size={50} className="text-warning" />,
    description: "Ace Amazon's leadership principles and technical rounds with our targeted questions.",
    applyLink: "https://www.amazon.jobs/"
  },
  {
    id: "meta",
    name: "Meta",
    icon: <FaFacebook size={50} className="text-primary" />,
    description: "Get ready for Meta with questions on React, algorithms, and product design.",
    applyLink: "https://www.metacareers.com/"
  },
  {
    id: "apple",
    name: "Apple",
    icon: <FaApple size={50} className="text-light" />,
    description: "Practice Apple-specific questions on Swift, hardware, and problem-solving.",
    applyLink: "https://www.apple.com/careers/"
  },
  {
    id: "netflix",
    name: "Netflix",
    icon: <FaTv size={50} className="text-danger" />, // ✅ Fixed icon
    description: "Netflix culture and engineering – practice questions on streaming algorithms and system design.",
    applyLink: "https://jobs.netflix.com/"
  }
];

const CompanyPrep = () => {
  return (
    <div style={{ background: "radial-gradient(circle at top, #1a1a2e, #0f0f0f)", minHeight: "100vh", color: "#fff" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(120deg, #667eea, #764ba2)", padding: "60px 0", textAlign: "center" }}>
        <Container>
          <h1 className="fw-bold display-5">Company-Specific Interview Prep</h1>
          <p className="mt-3 fs-5 opacity-90">
            Practice aptitude, DSA, and technical questions tailored to top tech companies
          </p>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="g-4">
          {companies.map((company) => (
            <Col md={6} lg={4} key={company.id}>
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-100 text-center" style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                  color: "#fff"
                }}>
                  <Card.Body className="p-4 d-flex flex-column">
                    <div className="mb-3">{company.icon}</div>
                    <Card.Title className="fw-bold fs-3">{company.name}</Card.Title>
                    <Card.Text className="text-white-50 small mb-4">
                      {company.description}
                    </Card.Text>
                    <div className="mt-auto d-flex justify-content-center gap-2">
                      <Button
                        as={Link}
                        to={`/companies/${company.id}`}
                        variant="outline-info"
                        className="rounded-pill px-4"
                      >
                        View Questions
                      </Button>
                      <Button
                        href={company.applyLink}
                        target="_blank"
                        variant="outline-success"
                        className="rounded-pill px-4"
                      >
                        Apply
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CompanyPrep;