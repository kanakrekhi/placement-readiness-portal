import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Navbar,
  Nav,
  Carousel,
  Button
} from "react-bootstrap";

import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

import { Link } from "react-router-dom";

const COLORS = ["#00d8ff", "#ffc107", "#ff6b6b"];

const StudentDashboard = () => {

  const email = localStorage.getItem("email");

  const [data, setData] = useState([]);

  /* ================= AUTO FETCH EVERY 2 SEC ================= */
  useEffect(() => {
    if (!email) return;

    const fetchData = () => {
      fetch(`http://localhost:5000/api/getProgress/${email}`)
        .then(res => res.json())
        .then(res => setData(res))
        .catch(err => console.log("Backend error ❌", err));
    };

    fetchData(); // first call

    const interval = setInterval(fetchData, 2000); // auto refresh

    return () => clearInterval(interval);

  }, [email]);

  /* ================= CALCULATIONS ================= */

  const totalModules = data.length;
  const testsAttempted = data.length;

  const eligibleCount = data.filter(d => d.verdict === "Eligible").length;

  const avgScore =
    totalModules > 0
      ? Math.round((eligibleCount / totalModules) * 100)
      : 0;

  const role = data.length > 0 ? data[0].role : "Not Selected";

  /* ================= CHART DATA ================= */

  const skillData = [
    { name: "Completed", value: totalModules },
    { name: "Eligible", value: eligibleCount },
    { name: "Remaining", value: Math.max(0, 10 - totalModules) }
  ];

  const testData = data.map((d, i) => ({
    name: `Test ${i + 1}`,
    score: d.score || 0
  }));

  return (
    <div style={{ backgroundColor: "#0f0f0f", minHeight: "100vh", color: "#fff" }}>

      {/* NAVBAR */}
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
        <Container>
          <Navbar.Brand as={Link} to="/dashboard">
            Placement Portal
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/modules">Modules</Nav.Link>
              <Nav.Link as={Link} to="/roles">Roles</Nav.Link>
              <Nav.Link as={Link} to="/login">Logout</Nav.Link>
              <Nav.Link as={Link} to="/companies">Companies</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* HERO */}
      <Container className="my-5">
        <Card className="text-center shadow-lg"
          style={{
            background: "linear-gradient(90deg,#667eea,#764ba2)",
            borderRadius: "20px",
            color: "#fff"
          }}>
          <Card.Body>
            <h2>Welcome {email} 👋</h2>
            <p className="fs-5">Your Placement Readiness Score</p>
            <h1 className="fw-bold">{avgScore}%</h1>
            <p>Keep improving — you’re on the right path!</p>
          </Card.Body>
        </Card>
      </Container>

      {/* STATS */}
      <Container>
        <Row className="g-4 text-center">

          <Col md={3}>
            <Card className="shadow" style={{ borderRadius: "15px" }}>
              <Card.Body>
                <h5>Selected Role</h5>
                <h3 className="fw-bold">{role}</h3>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="shadow" style={{ borderRadius: "15px" }}>
              <Card.Body>
                <h5>Modules Completed</h5>
                <h3 className="fw-bold">{totalModules}</h3>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="shadow" style={{ borderRadius: "15px" }}>
              <Card.Body>
                <h5>Tests Attempted</h5>
                <h3 className="fw-bold">{testsAttempted}</h3>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="shadow" style={{ borderRadius: "15px" }}>
              <Card.Body>
                <h5>Eligible Modules</h5>
                <h3 className="fw-bold">{eligibleCount}</h3>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

      {/* CAROUSEL */}
      <Container className="my-5">
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 rounded"
              src="https://engg.cambridge.edu.in/wp-content/uploads/2023/06/Placement-2023.jpg"
              alt="slide1"
              height="350"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img className="d-block w-100 rounded"
              src="https://www.dypiemr.ac.in/images/media_images/placementstat1.jpg"
              alt="slide2"
              height="350"
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* CHARTS */}
      <Container className="my-5">
        <Row className="g-4">

          <Col md={6}>
            <Card className="shadow p-3">
              <h5 className="text-center">Skill Distribution</h5>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={skillData} dataKey="value" outerRadius={100}>
                    {skillData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="shadow p-3">
              <h5 className="text-center">Test Performance</h5>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={testData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="score" />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </Col>

        </Row>
      </Container>

      {/* ACTION BUTTON */}
      <Container className="text-center my-4">
        <Link to="/dashboard">
          <Button variant="success">Refresh Dashboard</Button>
        </Link>
      </Container>

      {/* FOOTER */}
      <footer className="text-center py-3" style={{ backgroundColor: "#111" }}>
        <p className="mb-0">© 2025 Placement Readiness Portal</p>
      </footer>

    </div>
  );
};

export default StudentDashboard;


