import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import ResumePreview from "./ResumePreview"; // ✅ fixed import (same folder)

const ResumeBuilder = () => {
  // ... (rest of your component code remains exactly the same)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    linkedin: "",
    summary: "",
    education: [{ degree: "", institution: "", year: "", grade: "" }],
    experience: [{ jobTitle: "", company: "", duration: "", description: "" }],
    skills: "",
    projects: [{ title: "", technologies: "", description: "" }],
    certifications: [{ name: "", issuer: "", year: "" }]
  });

  const [showPreview, setShowPreview] = useState(false);

  const handleChange = (e, section, index, field) => {
    if (section) {
      const updated = [...formData[section]];
      updated[index][field] = e.target.value;
      setFormData({ ...formData, [section]: updated });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const addItem = (section, template) => {
    setFormData({ ...formData, [section]: [...formData[section], template] });
  };

  const removeItem = (section, index) => {
    const updated = formData[section].filter((_, i) => i !== index);
    setFormData({ ...formData, [section]: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPreview(true);
  };

  return (
    <div style={{ background: "#0f0f0f", minHeight: "100vh", color: "#fff" }}>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">Placement Portal</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/roles">Roles</Nav.Link>
              <Nav.Link as={Link} to="/companies">Companies</Nav.Link>
              <Nav.Link as={Link} to="/resume-builder">Resume Builder</Nav.Link>
              <Nav.Link as={Link} to="/login">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="py-5">
        <h1 className="text-center text-warning mb-4">ATS‑Friendly Resume Builder</h1>
        <p className="text-center text-white-50 mb-5">
          Fill in your details below to generate a professional, ATS‑optimized resume.
        </p>

        <Row>
          <Col lg={showPreview ? 6 : 12}>
            <Card className="bg-dark text-white border-secondary p-4">
              <Form onSubmit={handleSubmit}>
                {/* Personal Information */}
                <h4>Personal Information</h4>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>LinkedIn (optional)</Form.Label>
                      <Form.Control
                        type="url"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <h4 className="mt-3">Professional Summary</h4>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="summary"
                    value={formData.summary}
                    onChange={handleChange}
                    placeholder="Brief overview of your career goals and strengths..."
                    required
                  />
                </Form.Group>

                {/* Education */}
                <h4>Education</h4>
                {formData.education.map((edu, index) => (
                  <Card key={index} className="bg-secondary p-3 mb-3">
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-2">
                          <Form.Label>Degree</Form.Label>
                          <Form.Control
                            type="text"
                            value={edu.degree}
                            onChange={(e) => handleChange(e, "education", index, "degree")}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-2">
                          <Form.Label>Institution</Form.Label>
                          <Form.Control
                            type="text"
                            value={edu.institution}
                            onChange={(e) => handleChange(e, "education", index, "institution")}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-2">
                          <Form.Label>Year</Form.Label>
                          <Form.Control
                            type="text"
                            value={edu.year}
                            onChange={(e) => handleChange(e, "education", index, "year")}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-2">
                          <Form.Label>Grade/Percentage</Form.Label>
                          <Form.Control
                            type="text"
                            value={edu.grade}
                            onChange={(e) => handleChange(e, "education", index, "grade")}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button variant="danger" size="sm" onClick={() => removeItem("education", index)}>
                      Remove
                    </Button>
                  </Card>
                ))}
                <Button variant="outline-info" size="sm" onClick={() => addItem("education", { degree: "", institution: "", year: "", grade: "" })}>
                  + Add Education
                </Button>

                {/* Work Experience */}
                <h4 className="mt-4">Work Experience</h4>
                {formData.experience.map((exp, index) => (
                  <Card key={index} className="bg-secondary p-3 mb-3">
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-2">
                          <Form.Label>Job Title</Form.Label>
                          <Form.Control
                            type="text"
                            value={exp.jobTitle}
                            onChange={(e) => handleChange(e, "experience", index, "jobTitle")}
                            required
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-2">
                          <Form.Label>Company</Form.Label>
                          <Form.Control
                            type="text"
                            value={exp.company}
                            onChange={(e) => handleChange(e, "experience", index, "company")}
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-2">
                          <Form.Label>Duration</Form.Label>
                          <Form.Control
                            type="text"
                            value={exp.duration}
                            onChange={(e) => handleChange(e, "experience", index, "duration")}
                            placeholder="e.g., Jun 2022 – Present"
                            required
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group className="mb-2">
                      <Form.Label>Description (use bullet points)</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        value={exp.description}
                        onChange={(e) => handleChange(e, "experience", index, "description")}
                        required
                      />
                    </Form.Group>
                    <Button variant="danger" size="sm" onClick={() => removeItem("experience", index)}>
                      Remove
                    </Button>
                  </Card>
                ))}
                <Button variant="outline-info" size="sm" onClick={() => addItem("experience", { jobTitle: "", company: "", duration: "", description: "" })}>
                  + Add Experience
                </Button>

                {/* Skills */}
                <h4 className="mt-4">Skills</h4>
                <Form.Group className="mb-3">
                  <Form.Control
                    as="textarea"
                    rows={2}
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="e.g., JavaScript, Python, React, Node.js (comma separated)"
                    required
                  />
                </Form.Group>

                {/* Projects */}
                <h4>Projects</h4>
                {formData.projects.map((proj, index) => (
                  <Card key={index} className="bg-secondary p-3 mb-3">
                    <Form.Group className="mb-2">
                      <Form.Label>Project Title</Form.Label>
                      <Form.Control
                        type="text"
                        value={proj.title}
                        onChange={(e) => handleChange(e, "projects", index, "title")}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label>Technologies Used</Form.Label>
                      <Form.Control
                        type="text"
                        value={proj.technologies}
                        onChange={(e) => handleChange(e, "projects", index, "technologies")}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-2">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={2}
                        value={proj.description}
                        onChange={(e) => handleChange(e, "projects", index, "description")}
                        required
                      />
                    </Form.Group>
                    <Button variant="danger" size="sm" onClick={() => removeItem("projects", index)}>
                      Remove
                    </Button>
                  </Card>
                ))}
                <Button variant="outline-info" size="sm" onClick={() => addItem("projects", { title: "", technologies: "", description: "" })}>
                  + Add Project
                </Button>

                {/* Certifications */}
                <h4 className="mt-4">Certifications (optional)</h4>
                {formData.certifications.map((cert, index) => (
                  <Card key={index} className="bg-secondary p-3 mb-3">
                    <Row>
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            value={cert.name}
                            onChange={(e) => handleChange(e, "certifications", index, "name")}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label>Issuer</Form.Label>
                          <Form.Control
                            type="text"
                            value={cert.issuer}
                            onChange={(e) => handleChange(e, "certifications", index, "issuer")}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={4}>
                        <Form.Group>
                          <Form.Label>Year</Form.Label>
                          <Form.Control
                            type="text"
                            value={cert.year}
                            onChange={(e) => handleChange(e, "certifications", index, "year")}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button variant="danger" size="sm" onClick={() => removeItem("certifications", index)}>
                      Remove
                    </Button>
                  </Card>
                ))}
                <Button variant="outline-info" size="sm" onClick={() => addItem("certifications", { name: "", issuer: "", year: "" })}>
                  + Add Certification
                </Button>

                <div className="text-center mt-4">
                  <Button variant="warning" type="submit" size="lg" className="me-3">
                    Generate Resume
                  </Button>
                  <Button variant="secondary" onClick={() => setShowPreview(false)}>
                    Hide Preview
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>

          {showPreview && (
            <Col lg={6}>
              <ResumePreview data={formData} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ResumeBuilder;