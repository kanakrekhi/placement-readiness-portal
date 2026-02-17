import React from "react";
import { Link } from "react-router-dom";
import { Carousel, Nav } from "react-bootstrap"; // ✅ Added Nav import
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";

const HomePage = () => {
  return (
    <div style={{ fontFamily: "Poppins, sans-serif", backgroundColor: "#0f0f0f" }}>
      {/* NAVBAR */}
      <motion.nav
        className="navbar navbar-expand-lg navbar-dark shadow-lg sticky-top"
        style={{
          background: "linear-gradient(90deg,#a5cbdbff, #936b9dff, #a5cbdbff)",
          padding: "0.8rem 2rem",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
      >
        <div className="container d-flex justify-content-between align-items-center">
          {/* LOGO + BRAND */}
          <div className="d-flex align-items-center">
            <img
              src="https://vmedulife.com/wp-content/uploads/2025/06/presentation.gif"
              alt="Logo"
              style={{
                width: "45px",
                height: "45px",
                marginRight: "10px",
                borderRadius: "50%",
              }}
            />
            <Link className="navbar-brand fw-bold fs-4" to="/">
              Placement Readiness Portal
            </Link>
          </div>

          {/* NAV LINKS */}
          <ul className="navbar-nav d-flex flex-row">
            {/* HOME */}
            <motion.li className="nav-item mx-3" whileHover={{ scale: 1.2 }}>
              <Link
                className="nav-link fw-semibold"
                style={{ fontSize: "1.1rem", color: "#fff" }}
                to="/"
              >
                Home
              </Link>
            </motion.li>

            {/* ABOUT */}
            <motion.li className="nav-item mx-3" whileHover={{ scale: 1.2 }}>
              <Link
                className="nav-link fw-semibold"
                style={{ fontSize: "1.1rem", color: "#fff" }}
                to="/about"
              >
                About
              </Link>
            </motion.li>

            {/* DASHBOARD */}
            <motion.li className="nav-item mx-3" whileHover={{ scale: 1.2 }}>
              <Link
                className="nav-link fw-semibold"
                style={{ fontSize: "1.1rem", color: "#fff" }}
                to="/dashboard"
              >
                Dashboard
              </Link>
            </motion.li>

            {/* ROLES */}
            <motion.li className="nav-item mx-3" whileHover={{ scale: 1.2 }}>
              <Link
                className="nav-link fw-semibold"
                style={{ fontSize: "1.1rem", color: "#fff" }}
                to="/roles"
              >
                Roles
              </Link>
            </motion.li>

            {/* PROGRAMMING ENVIRONMENT */}
            <motion.li className="nav-item mx-3" whileHover={{ scale: 1.2 }}>
              <Link
                className="nav-link fw-semibold"
                style={{
                  fontSize: "1.1rem",
                  color: "#ffd700",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px"
                }}
                to="/programming-environment"
              >
                <FaCode /> Programming Env
              </Link>
            </motion.li>

            {/* RESUME ANALYZER (new) */}
            <motion.li className="nav-item mx-3" whileHover={{ scale: 1.2 }}>
              <Link
                className="nav-link fw-semibold"
                style={{ fontSize: "1.1rem", color: "#fff" }}
                to="/resume-analyzer" // ✅ Fixed link to correct route
              >
                Resume Analyzer
              </Link>
            </motion.li>

            {/* LOGIN */}
            <li className="nav-item mx-2">
              <Link
                to="/login"
                className="btn btn-light btn-sm rounded-pill px-3 fw-bold"
              >
                Login
              </Link>
            </li>

            {/* SIGN-UP */}
            <li className="nav-item mx-2">
              <Link
                to="/signup"
                className="btn btn-warning btn-sm rounded-pill px-3 fw-bold"
              >
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </motion.nav>

      {/* HERO SECTION */}
      <section
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{
          minHeight: "100vh",
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(https://t3.ftcdn.net/jpg/08/04/88/86/360_F_804888647_YPG5ZinA3NDhKmjQT2LOcyoQYylsMoJz.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          padding: "2rem",
        }}
      >
        <h1 className="fw-bold display-3 mb-3" style={{ textShadow: "3px 3px 12px #000" }}>
          Your Path to Placement Success
        </h1>

        <p className="fs-4 mb-4" style={{ textShadow: "2px 2px 8px #000" }}>
          Step by step: Aptitude • Role-Specific Tests • Interview Prep
        </p>

        <div className="d-flex">
          <Link
            to="/login"
            className="btn btn-light btn-lg mx-2 rounded-pill shadow-lg"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="btn btn-warning btn-lg mx-2 rounded-pill shadow-lg"
          >
            Sign Up
          </Link>
        </div>
      </section>

      {/* CAROUSEL */}
      <div className="container my-5">
        <Carousel fade indicators={false} interval={4000}>
          {/* SLIDE 1 */}
          <Carousel.Item>
            <div
              style={{
                position: "relative",
                height: "400px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 15px 30px rgba(0,0,0,0.5)",
              }}
            >
              <img
                className="d-block w-100"
                src="https://engg.cambridge.edu.in/wp-content/uploads/2023/06/Placement-2023.jpg"
                alt="Success Stories"
                style={{ objectFit: "cover", height: "100%" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))",
                  color: "#ffd700",
                  padding: "1.5rem",
                }}
              >
                <h3>🌟 Success Stories</h3>
                <p>Thousands of students cracked placements using structured preparation.</p>
              </div>
            </div>
          </Carousel.Item>

          {/* SLIDE 2 */}
          <Carousel.Item>
            <div
              style={{
                position: "relative",
                height: "400px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 15px 30px rgba(0,0,0,0.5)",
              }}
            >
              <img
                className="d-block w-100"
                src="https://www.dypiemr.ac.in/images/media_images/placementstat1.jpg"
                alt="Placement Stats"
                style={{ objectFit: "cover", height: "100%" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))",
                  color: "#00ffff",
                  padding: "1.5rem",
                }}
              >
                <h3>📊 Placement Statistics</h3>
                <p>Boost your chances by preparing smartly with our platform.</p>
              </div>
            </div>
          </Carousel.Item>

          {/* SLIDE 3 */}
          <Carousel.Item>
            <div
              style={{
                position: "relative",
                height: "400px",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: "0 15px 30px rgba(0,0,0,0.5)",
              }}
            >
              <img
                className="d-block w-100"
                src="https://blog.puc.edu/wp-content/uploads/2025/01/AdobeStock_387176470.jpeg"
                alt="Motivation"
                style={{ objectFit: "cover", height: "100%" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  width: "100%",
                  background: "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0))",
                  color: "#ff69b4",
                  padding: "1.5rem",
                }}
              >
                <h3>💪 Stay Motivated</h3>
                <p>“Opportunities don’t happen, you create them.”</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default HomePage;