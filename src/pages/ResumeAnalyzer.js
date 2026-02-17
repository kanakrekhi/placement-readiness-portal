import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
  ProgressBar,
  Badge,
  ListGroup
} from "react-bootstrap";
import { FaUpload, FaCheckCircle, FaTimesCircle, FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ResumeAnalyzer = () => {
  const [file, setFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [results, setResults] = useState(null);

  // Mock ATS checks – in reality you'd parse the file content
  const mockChecks = [
    { name: "Contact Information", passed: true, tip: "Email, phone, LinkedIn present" },
    { name: "Keywords (Role-specific)", passed: false, tip: "Add more industry keywords like 'React', 'Node.js'" },
    { name: "File Format", passed: true, tip: "PDF is ATS-friendly" },
    { name: "Simple Formatting", passed: true, tip: "No tables or columns detected" },
    { name: "Work Experience (quantified)", passed: false, tip: "Use numbers (e.g., 'Increased sales by 20%')" },
    { name: "Education Section", passed: true, tip: "Degree and institution listed" },
    { name: "Spelling & Grammar", passed: true, tip: "No obvious errors" }
  ];

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setResults(null);
    }
  };

  const analyzeResume = () => {
    if (!file) return;
    setAnalyzing(true);

    // Simulate analysis delay
    setTimeout(() => {
      // Randomize some checks for demo
      const randomized = mockChecks.map(check => ({
        ...check,
        passed: Math.random() > 0.3 // 70% chance of passing for demo
      }));
      setResults(randomized);
      setAnalyzing(false);
    }, 2000);
  };

  const passedCount = results?.filter(r => r.passed).length || 0;
  const totalChecks = mockChecks.length;
  const score = results ? Math.round((passedCount / totalChecks) * 100) : 0;

  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh", color: "#fff" }}>
      <Container className="py-5">
        <h1 className="text-center text-warning mb-4">ATS Resume Analyzer</h1>
        <p className="text-center text-white-50 mb-5">
          Upload your resume to check its ATS friendliness and get improvement tips.
        </p>

        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="bg-dark text-white border-secondary p-4">
              <Form>
                <Form.Group className="mb-4 text-center">
                  <Form.Label className="fs-5">Upload Resume (PDF or DOCX)</Form.Label>
                  <div className="d-flex justify-content-center">
                    <Button
                      variant="outline-info"
                      onClick={() => document.getElementById("resume-upload").click()}
                    >
                      <FaUpload className="me-2" /> Choose File
                    </Button>
                    <Form.Control
                      id="resume-upload"
                      type="file"
                      accept=".pdf,.docx"
                      onChange={handleFileChange}
                      style={{ display: "none" }}
                    />
                  </div>
                  {file && (
                    <p className="mt-3 text-info">
                      Selected: {file.name} ({(file.size / 1024).toFixed(2)} KB)
                    </p>
                  )}
                </Form.Group>

                <div className="text-center">
                  <Button
                    variant="warning"
                    size="lg"
                    onClick={analyzeResume}
                    disabled={!file || analyzing}
                  >
                    {analyzing ? "Analyzing..." : "Analyze Resume"}
                  </Button>
                </div>
              </Form>

              {analyzing && (
                <div className="mt-4">
                  <ProgressBar animated now={100} variant="info" />
                  <p className="text-center mt-2">Analyzing... this may take a moment.</p>
                </div>
              )}

              {results && (
                <div className="mt-5">
                  <h3 className="text-warning">Analysis Results</h3>
                  <div className="d-flex align-items-center mb-4">
                    <h2 className="display-4 me-3">{score}%</h2>
                    <div>
                      <Badge bg={score >= 70 ? "success" : "danger"} className="p-2">
                        {score >= 70 ? "ATS-Friendly" : "Needs Improvement"}
                      </Badge>
                    </div>
                  </div>

                  <ListGroup variant="flush" className="bg-dark">
                    {results.map((check, idx) => (
                      <ListGroup.Item
                        key={idx}
                        className="bg-dark text-white border-secondary d-flex justify-content-between align-items-start"
                      >
                        <div>
                          <strong>{check.name}</strong>
                          <p className="mb-0 small text-white-50">{check.tip}</p>
                        </div>
                        <div>
                          {check.passed ? (
                            <FaCheckCircle className="text-success fs-4" />
                          ) : (
                            <FaTimesCircle className="text-danger fs-4" />
                          )}
                        </div>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>

                  <Alert variant="info" className="mt-4">
                    <FaInfoCircle className="me-2" />
                    <strong>Pro Tip:</strong> Customize your resume with keywords from the job description and keep formatting simple (no tables, columns, or graphics).
                  </Alert>
                </div>
              )}
            </Card>
          </Col>
        </Row>

        <div className="text-center mt-4">
          <Button as={Link} to="/resume-builder" variant="outline-info">
            Build a New Resume
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default ResumeAnalyzer;