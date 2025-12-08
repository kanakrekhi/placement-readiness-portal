import React from "react";
import { Link } from "react-router-dom";
import { roles } from "../data/rolesData";

import {
  FaCode,
  FaDatabase,
  FaMobileAlt,
  FaRobot,
  FaCloud,
  FaBug,
  FaPaintBrush,
  FaNetworkWired,
  FaGamepad,
  FaUserShield,
} from "react-icons/fa";

// Icons mapped to each role
const iconMap = {
  "Software Engineer": <FaCode />,
  "Frontend Developer": <FaCode />,
  "Backend Developer": <FaDatabase />,
  "Full Stack Developer": <FaCode />,
  "Python Developer": <FaCode />,
  "Java Developer": <FaCode />,
  "Android Developer": <FaMobileAlt />,
  "Data Analyst": <FaDatabase />,
  "Data Scientist": <FaRobot />,
  "Database Administrator": <FaDatabase />,
  "Cloud Engineer": <FaCloud />,
  "Cybersecurity Analyst": <FaUserShield />,
  "AI/ML Engineer": <FaRobot />,
  "DevOps Engineer": <FaCloud />,
  "UI/UX Designer": <FaPaintBrush />,
  "QA Tester": <FaBug />,
  "Product Manager": <FaUserShield />,
  "Business Analyst": <FaDatabase />,
  "Game Developer": <FaGamepad />,
  "Network Engineer": <FaNetworkWired />,
  "IT Support Engineer": <FaUserShield />,
  "Software Tester": <FaBug />,
  "Blockchain Developer": <FaDatabase />,
  "Embedded Systems Engineer": <FaNetworkWired />,
};

const RolesPage = () => {
  return (
    <div
      className="container-fluid py-5"
      style={{
        minHeight: "100vh",
        background: "radial-gradient(circle at top, #10131a, #06070a 70%)",
        overflowX: "hidden",
      }}
    >
      <h1
        className="text-center fw-bold mb-5"
        style={{
          color: "#fff",
          fontSize: "3rem",
          letterSpacing: "3px",
          textShadow: "0 0 10px #5a6fff",
        }}
      >
        Explore Career Roles ✨
      </h1>

      <div className="row g-4 px-4 justify-content-center">
        {roles.map((role, index) => (
          <div
            key={role}
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            style={{
              animation: `fadeIn 0.6s ease ${index * 0.1}s`,
            }}
          >
            <Link to={`/modules/${role}`} style={{ textDecoration: "none" }}>
              <div
                className="role-card"
                style={{
                  padding: "30px",
                  borderRadius: "20px",
                  background:
                    "rgba(15, 20, 35, 0.35)",

                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(88, 111, 255, 0.25)",
                  boxShadow:
                    "0 0 20px rgba(88, 111, 255, 0.15), inset 0 0 20px rgba(255,255,255,0.05)",
                  textAlign: "center",
                  transition: "0.4s ease",
                  transform: "translateY(0px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px) scale(1.05)";
                  e.currentTarget.style.boxShadow =
                    "0 0 25px rgba(88,111,255,0.9), 0 0 40px rgba(140,60,255,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0px) scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 0 15px rgba(88,111,255,0.15), inset 0 0 10px rgba(255,255,255,0.03)";
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    color: "#8c3bff",
                    filter: "drop-shadow(0 0 8px #8c3bff)",
                    marginBottom: "15px",
                  }}
                >
                  {iconMap[role] || <FaCode />}
                </div>

                <h5
                  style={{
                    color: "#d9ddff",
                    fontWeight: "600",
                    fontSize: "18px",
                    textShadow: "0 0 5px rgba(140,60,255,0.7)",
                  }}
                >
                  {role}
                </h5>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Smooth fade-in animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default RolesPage;
