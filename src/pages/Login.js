// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     // Your login logic here
//     alert(`Email: ${email}\nPassword: ${password}`);

//     navigate("/dashboard");
//  // redirect to modules page
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         minHeight: "100vh",
//         fontFamily: "Poppins, sans-serif",
//       }}
//     >
//       {/* Left Illustration */}
//       <div
//         style={{
//           flex: 1,
//           background: "linear-gradient(135deg, #8960b6ff, #cd7fc1ff)",
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           color: "#fff",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         <div style={{ textAlign: "center", padding: "2rem" }}>
//           <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
//             Welcome Back!
//           </h1>
//           <p style={{ fontSize: "1.1rem", color: "#e0e0e0" }}>
//             Enter your credentials to access your account and continue your
//             journey.
//           </p>

//           {/* Illustration */}
//           <img
//             src="https://www.shareicon.net/data/2017/06/22/887604_user_512x512.png"
//             alt="Illustration"
//             style={{
//               width: "250px",
//               marginTop: "2rem",
//               opacity: 0.9,
//               animation: "float 3s ease-in-out infinite",
//             }}
//           />
//         </div>

//         {/* Floating Animation */}
//         <style>
//           {`
//             @keyframes float {
//               0%, 100% { transform: translateY(0px); }
//               50% { transform: translateY(-15px); }
//             }
//           `}
//         </style>
//       </div>

//       {/* Right Login Form */}
//       <div
//         style={{
//           flex: 1,
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           background: "#000000",
//         }}
//       >
//         <div
//           style={{
//             width: "350px",
//             padding: "40px 30px",
//             borderRadius: "20px",
//             background: "#1c1c1c",
//             boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
//             color: "#fff",
//           }}
//         >
//           <div style={{ textAlign: "center", marginBottom: "25px" }}>
//             <img
//               src="https://thumbs.dreamstime.com/b/placement-vector-icon-job-illustration-sign-event-symbol-private-sign-placement-vector-icon-job-illustration-sign-event-symbol-285204379.jpg"
//               alt="Logo"
//               style={{ width: "60px", marginBottom: "15px" }}
//             />
//             <h2 style={{ marginBottom: "10px", color: "#fff" }}>Login</h2>
//             <p style={{ color: "#ddd", fontSize: "0.9rem" }}>
//               Enter your email and password
//             </p>
//           </div>

//           <form onSubmit={handleLogin}>
//             <div style={{ marginBottom: "20px" }}>
//               <label style={{ color: "#ddd" }}>Email</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 style={{
//                   width: "100%",
//                   padding: "12px 15px",
//                   marginTop: "5px",
//                   borderRadius: "10px",
//                   border: "1px solid #333",
//                   outline: "none",
//                   fontSize: "1rem",
//                   background: "#111",
//                   color: "#fff",
//                 }}
//               />
//             </div>

//             <div style={{ marginBottom: "25px" }}>
//               <label style={{ color: "#ddd" }}>Password</label>
//               <input
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 style={{
//                   width: "100%",
//                   padding: "12px 15px",
//                   marginTop: "5px",
//                   borderRadius: "10px",
//                   border: "1px solid #333",
//                   outline: "none",
//                   fontSize: "1rem",
//                   background: "#111",
//                   color: "#fff",
//                 }}
//               />
//             </div>

//             <button
//               type="submit"
//               style={{
//                 width: "100%",
//                 padding: "12px",
//                 borderRadius: "25px",
//                 border: "none",
//                 background: "linear-gradient(90deg, #8d5b7fff, #c139c6ff)",
//                 color: "#fff",
//                 fontWeight: "600",
//                 cursor: "pointer",
//                 fontSize: "1rem",
//                 boxShadow: "0 5px 15px rgba(101, 67, 255, 0.4)",
//                 transition: "0.3s",
//               }}
//               onMouseOver={(e) =>
//                 (e.target.style.background =
//                   "linear-gradient(90deg, #2575fc, #6a11cb)")
//               }
//               onMouseOut={(e) =>
//                 (e.target.style.background =
//                   "linear-gradient(90deg, #8d5b7fff, #c139c6ff)")
//               }
//             >
//               Login
//             </button>
//           </form>

//           <p
//             style={{
//               marginTop: "20px",
//               textAlign: "center",
//               color: "#888",
//               fontSize: "0.85rem",
//             }}
//           >
//             Don't have an account?{" "}
//             <a
//               href="/signup"
//               style={{ color: "#6a11cb", textDecoration: "underline" }}
//             >
//               Sign Up
//             </a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleLogin = async (e) => {
  //   e.preventDefault();

  //   const res = await fetch("http://localhost:5000/api/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   });

  //   const data = await res.json();

  //   if (data.success) {
  //     // ✅ store logged user
  //     localStorage.setItem("username", data.username);

  //     navigate("/dashboard");
  //   } else {
  //     alert("Invalid login");
  //   }
  // };

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      throw new Error("Server not responding");
    }

    const data = await res.json();
if (data.success) {
  localStorage.setItem("email", data.email); // store email
  navigate("/dashboard"); // go to role page
}

    else {
      alert("Invalid login credentials");
    }
  } catch (error) {
    console.error("Login Error:", error);
    alert("Cannot connect to server. Make sure backend is running.");
  }
};

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* LEFT */}
      <div
        style={{
          flex: 1,
          background: "linear-gradient(135deg, #8960b6ff, #cd7fc1ff)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1>Welcome Back!</h1>
          <p>Login to continue your placement journey</p>
        </div>
      </div>

      {/* RIGHT */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#000",
        }}
      >
        <form
          onSubmit={handleLogin}
          style={{
            width: "300px",
            background: "#1c1c1c",
            padding: "30px",
            borderRadius: "15px",
            color: "#fff",
          }}
        >
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "10px", marginTop: "10px" }}
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px", marginTop: "10px" }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "15px",
              background: "#6a11cb",
              color: "#fff",
              border: "none",
              borderRadius: "10px",
            }}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
