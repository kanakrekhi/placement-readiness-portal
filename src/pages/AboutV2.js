import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const AboutV2 = () => {
  return (
    <div style={{ background: "#0a0f1f", color: "white" }}>

      {/* ---------------- HERO SECTION ---------------- */}
      <section
        style={{
          background:
            "linear-gradient( rgba(0,0,0,0.6), rgba(0,0,0,0.8) ), url('https://iitmpravartak.org.in/new_home/images/jobs2.jpg') center/cover no-repeat",
          height: "70vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <div>
          <h1 className="fw-bold display-3" style={{ color: "#4da8ff" }}>
            Placement Readiness Portal
          </h1>
          <p className="lead mt-3" style={{ color: "#d9e4ff" }}>
            Prepare. Practice. Get Placed.  
            Your journey to top tech jobs begins here.
          </p>
        </div>
      </section>

      {/* --------------- OUR PURPOSE SECTION ---------------- */}
      <section className="container py-5">
        <div className="row g-4">

          <div className="col-md-6">
            <div
              className="p-4 rounded shadow-lg"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid #3a4a6a",
              }}
            >
              <h2 style={{ color: "#58c4ff" }}>🎯 Why This Portal Exists</h2>
              <p className="mt-3" style={{ color: "#cdd9ff" }}>
                The Placement Readiness Portal is designed to eliminate student
                anxiety by providing structured learning, mock tests, coding
                challenges, and job-oriented interview preparation.
              </p>
              <img
                src="https://joinsuperset.com/blogs/wp-content/uploads/2025/01/PlacementPorta.jpeg"
                alt="purpose"
                className="img-fluid rounded mt-3"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div
              className="p-4 rounded shadow-lg"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid #3a4a6a",
              }}
            >
              <h2 style={{ color: "#ff8a8a" }}>🚀 What We Deliver</h2>
              <ul style={{ color: "#cdd9ff" }}>
                <li>Role-based learning modules</li>
                <li>Mock tests with instant scoring</li>
                <li>Coding assessments</li>
                <li>HR & Technical interview prep</li>
                <li>Personalized Dashboard Analytics</li>
              </ul>
              <img
                src="https://joinsuperset.com/blogs/wp-content/uploads/2025/01/BenefitsofReal-TimeUpdatesforUniversitie.jpeg"
                alt="deliver"
                className="img-fluid rounded mt-3"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ------------------- TIMELINE ---------------------- */}
      <section className="container text-center py-5">
        <h2 className="fw-bold mb-4" style={{ color: "#4da8ff" }}>
          ⏳ Project Journey Timeline
        </h2>

        <div className="row g-4">
          {[
            ["Step 1", "Concept & Idea Creation"],
            ["Step 2", "Designing Portal Architecture"],
            ["Step 3", "Developing Modules & Quiz Engine"],
            ["Step 4", "Launch & Feedback"],
          ].map((item, index) => (
            <div key={index} className="col-md-3">
              <div
                className="p-4 rounded shadow-lg"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid #3a4a6a",
                }}
              >
                <h4>{item[0]}</h4>
                <p>{item[1]}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------- TEAM SECTION (ONE MEMBER) -------------------- */}
      <section className="container py-5">
        <h2 className="fw-bold text-center" style={{ color: "#ffb84d" }}>
          👤 Developer
        </h2>

        <div className="d-flex justify-content-center">
          <div
            className="p-4 rounded shadow-lg text-center mt-4"
            style={{
              width: "300px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid #3a4a6a",
            }}
          >
            <img
              src="https://banner2.cleanpng.com/20240301/cqk/transparent-business-woman-cartoon-businesswoman-black-suit-re-woman-in-business-suit-with-red-1710856354594.webp"
              className="rounded-circle mb-3"
              width="130"
              alt="team"
            />
            <h4>Kanak Rekhi</h4>
            <p style={{ color: "#cdd9ff" }}>Full Stack Developer</p>
          </div>
        </div>
      </section>

      {/* ------------------- FAQ ---------------------- */}
      <section className="container py-5">
        <h2 className="fw-bold text-center mb-4" style={{ color: "#4da8ff" }}>
          ❓ Frequently Asked Questions
        </h2>

        <div className="accordion" id="faqAccordion">

          {/* Question 1 */}
          <div className="accordion-item bg-dark text-light border-secondary">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-dark text-light"
                data-bs-toggle="collapse"
                data-bs-target="#faq1"
              >
                What is the purpose of this portal?
              </button>
            </h2>
            <div
              id="faq1"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                The portal offers mock tests, interview prep, coding practice
                and analytics to help students prepare effectively for placements.
              </div>
            </div>
          </div>

          {/* Question 2 */}
          <div className="accordion-item bg-dark text-light border-secondary mt-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-dark text-light"
                data-bs-toggle="collapse"
                data-bs-target="#faq2"
              >
                Are mock tests included?
              </button>
            </h2>
            <div
              id="faq2"
              className="accordion-collapse collapse"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes! Mock tests with instant scoring & detailed results are included.
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <div className="text-center py-4" style={{ color: "#7e8bb7" }}>
        <hr style={{ borderColor: "#3a4a6a" }} />
        <p>© 2025 Placement Readiness Portal</p>
      </div>

    </div>
  );
};

export default AboutV2;
