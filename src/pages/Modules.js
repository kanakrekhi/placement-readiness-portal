import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaBookOpen,
  FaPlayCircle,
  FaClipboardCheck,
  FaShieldAlt,
  FaCode,
  FaChartLine,
  FaBrain,
  FaBalanceScale
} from "react-icons/fa";
import { motion } from "framer-motion";

/* =====================
   ROLE-WISE MODULE DATA
===================== */

const moduleData = {
  "cyber-security": {
    title: "Cyber Security Modules",
    icon: <FaShieldAlt size={50} className="text-warning" />,
    modules: [
      { title: "Cyber Security Fundamentals", desc: "CIA triad, threats, real-world attacks." },
      { title: "Networking for Security", desc: "TCP/IP, DNS, ports, firewalls." },
      { title: "Linux for Security", desc: "Commands, logs, permissions." },
      { title: "Web Application Security", desc: "OWASP Top 10, SQLi, XSS." },
      { title: "Ethical Hacking Basics", desc: "Footprinting, scanning lifecycle." }
    ]
  },

  "full-stack": {
    title: "Full Stack Developer Modules",
    icon: <FaCode size={50} className="text-warning" />,
    modules: [
      { title: "Programming Fundamentals", desc: "Logic building, OOPs, DSA basics." },
      { title: "Frontend Development", desc: "HTML, CSS, JavaScript, React." },
      { title: "Backend Development", desc: "APIs, authentication, databases." },
      { title: "System Design Basics", desc: "Scalability, architecture concepts." }
    ]
  },

  "ai-data-analyst": {
    title: "AI & Data Analyst Modules",
    icon: <FaChartLine size={50} className="text-warning" />,
    modules: [
      { title: "Statistics & Probability", desc: "Mean, variance, distributions." },
      { title: "SQL for Data Analysis", desc: "Queries, joins, analytics." },
      { title: "Python for Data", desc: "Pandas, NumPy fundamentals." },
      { title: "Machine Learning Intro", desc: "Supervised & unsupervised ML." }
    ]
  },

  "financial-analyst": {
    title: "Financial Analyst Modules",
    icon: <FaChartLine size={50} className="text-warning" />,
    modules: [
      { title: "Financial Accounting Basics", desc: "Balance sheets, P&L, cash flow." },
      { title: "Corporate Finance", desc: "Capital structure, valuation." },
      { title: "Financial Modeling", desc: "Excel models, forecasting." },
      { title: "Investment Analysis", desc: "Stocks, bonds, risk assessment." }
    ]
  },

 " psychologist": {
    title: "Psychology Modules",
    icon: <FaBrain size={50} className="text-warning" />,
    modules: [
      { title: "Psychology Foundations", desc: "Human behavior & cognition." },
      { title: "Counseling Techniques", desc: "Therapy models & ethics." },
      { title: "Mental Health Assessment", desc: "Screening & diagnosis basics." }
    ]
  },

 "lawyer": {
    title: "Lawyer Modules",
    icon: <FaBalanceScale size={50} className="text-warning" />,
    modules: [
      { title: "Legal System Fundamentals", desc: "Indian legal system overview." },
      { title: "Criminal & Civil Law", desc: "IPC, CrPC, civil procedures." },
      { title: "Corporate & Cyber Law", desc: "IT Act, corporate compliance." },
      { title: "Legal Drafting & Research", desc: "Contracts, case analysis." }
    ]
  }
};

/* =====================
   MODULE CARD
===================== */

const ModuleCard = ({ title, desc, role, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 160 }}
    >
      <Card
        className="h-100 text-center"
        style={{
          background: "rgba(255, 255, 255, 0.08)",
          backdropFilter: "blur(15px)",
          borderRadius: "20px",
          border: "1px solid rgba(255,255,255,0.15)",
          boxShadow: "0 15px 30px rgba(0,0,0,0.35)",
          color: "#fff"
        }}
      >
        <Card.Body className="p-4">
          <h5 className="fw-bold mb-2" style={{ color: "#FFD700" }}>
            {title}
          </h5>

          <p className="opacity-75 small">{desc}</p>

          <div className="d-flex justify-content-center gap-4 my-4">
            <FaBookOpen size={22} className="text-info" />
            <FaPlayCircle size={22} className="text-success" />
            <FaClipboardCheck size={22} className="text-warning" />
          </div>

          <Button
            variant="outline-warning"
            size="sm"
            className="rounded-pill px-4 fw-semibold"
            onClick={() => navigate(`/modules/${role}/${index}`)}
          >
            Start Module
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
};

/* =====================
   MAIN COMPONENT
===================== */

export default function Modules() {
  const { role } = useParams();
  const data = moduleData[role];

  if (!data) {
    return (
      <div className="text-center text-white p-5">
        <h2>Modules not found</h2>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #1a1a2e, #0b0b0b)",
        color: "#fff",
        fontFamily: "'Inter', 'Poppins', sans-serif"
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: "linear-gradient(120deg, #141e30, #243b55)",
          padding: "80px 0",
          textAlign: "center"
        }}
      >
        <div className="mb-3">{data.icon}</div>

        <h1
          className="fw-bold"
          style={{ letterSpacing: "0.5px", color: "#FFD700" }}
        >
          {data.title}
        </h1>

        <p className="opacity-75 mt-2">
          Role-specific modules designed for placements & interviews
        </p>
      </div>

      {/* MODULE GRID */}
      <Container className="py-5">
        <Row className="g-4">
          {data.modules.map((m, i) => (
            <Col md={4} key={i}>
              <ModuleCard
                title={m.title}
                desc={m.desc}
                role={role}
                index={i}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
