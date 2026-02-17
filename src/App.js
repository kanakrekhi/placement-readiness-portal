import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CompanyPrep from "./pages/CompanyPrep";
import CompanyDetails from "./pages/CompanyDetails";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AboutV2 from "./pages/AboutV2";
import StudentDashboard from "./pages/StudentDashboard";
import Roles from "./Roles";
import Modules from "./pages/Modules";
import ModuleDetails from "./pages/ModuleDetails";
import ProgrammingEnvironment from "./pages/ProgrammingEnvironment";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import ResumeBuilder from "./pages/ResumeBuilder";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<AboutV2 />} />
        <Route path="/dashboard" element={<StudentDashboard />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/modules/:role" element={<Modules />} />
        <Route path="/modules/:role/:moduleIndex" element={<ModuleDetails />} />
        <Route path="/programming-environment" element={<ProgrammingEnvironment />} />
        <Route path="/companies" element={<CompanyPrep />} />
        <Route path="/companies/:companyId" element={<CompanyDetails />} />
        <Route path="/resume-analyzer" element={<ResumeAnalyzer />} />
        <Route path="/resume-builder" element={<ResumeBuilder />} />
      </Routes>
    </Router>
  );
};

export default App;