import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // your signup logic
    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);

    navigate("/login"); // redirect after signup
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Left Illustration */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(135deg, #8960b6ff, #cd7fc1ff)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ textAlign: "center", padding: "2rem" }}>
          <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            Join Us Today!
          </h1>
          <p style={{ fontSize: "1.1rem", color: "#e0e0e0" }}>
            Create your account to access exclusive features and stay connected.
          </p>

          <img
            src="https://www.shareicon.net/data/2017/06/22/887604_user_512x512.png"
            alt="Illustration"
            style={{
              width: "250px",
              marginTop: "2rem",
              opacity: 0.9,
              animation: "float 3s ease-in-out infinite",
            }}
          />
        </div>

        <style>
          {`
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-15px); }
            }
          `}
        </style>
      </div>

      {/* Right Signup Form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#000000",
        }}
      >
        <div
          style={{
            width: "350px",
            padding: "40px 30px",
            borderRadius: "20px",
            background: "#1c1c1c",
            boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
            color: "#fff",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "25px" }}>
            <img
              src="https://thumbs.dreamstime.com/b/placement-vector-icon-job-illustration-sign-event-symbol-private-sign-placement-vector-icon-job-illustration-sign-event-symbol-285204379.jpg"
              alt="Logo"
              style={{ width: "60px", marginBottom: "15px" }}
            />
            <h2 style={{ marginBottom: "10px", color: "#fff" }}>Sign Up</h2>
            <p style={{ color: "#ddd", fontSize: "0.9rem" }}>
              Fill in your details to create an account
            </p>
          </div>

          <form onSubmit={handleSignup}>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "#ddd" }}>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  marginTop: "5px",
                  borderRadius: "10px",
                  border: "1px solid #333",
                  outline: "none",
                  fontSize: "1rem",
                  background: "#111",
                  color: "#fff",
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ color: "#ddd" }}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  marginTop: "5px",
                  borderRadius: "10px",
                  border: "1px solid #333",
                  outline: "none",
                  fontSize: "1rem",
                  background: "#111",
                  color: "#fff",
                }}
              />
            </div>

            <div style={{ marginBottom: "25px" }}>
              <label style={{ color: "#ddd" }}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{
                  width: "100%",
                  padding: "12px 15px",
                  marginTop: "5px",
                  borderRadius: "10px",
                  border: "1px solid #333",
                  outline: "none",
                  fontSize: "1rem",
                  background: "#111",
                  color: "#fff",
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "12px",
                borderRadius: "25px",
                border: "none",
                background: "linear-gradient(90deg, #8d5b7fff, #c139c6ff)",
                color: "#fff",
                fontWeight: "600",
                cursor: "pointer",
                fontSize: "1rem",
                boxShadow: "0 5px 15px rgba(101, 67, 255, 0.4)",
                transition: "0.3s",
              }}
              onMouseOver={(e) =>
                (e.target.style.background =
                  "linear-gradient(90deg, #2575fc, #6a11cb)")
              }
              onMouseOut={(e) =>
                (e.target.style.background =
                  "linear-gradient(90deg, #8d5b7fff, #c139c6ff)")
              }
            >
              Sign Up
            </button>
          </form>

          <p
            style={{
              marginTop: "20px",
              textAlign: "center",
              color: "#888",
              fontSize: "0.85rem",
            }}
          >
            Already have an account?{" "}
            <a
              href="/login"
              style={{ color: "#6a11cb", textDecoration: "underline" }}
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
