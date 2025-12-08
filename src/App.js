import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AboutV2 from "./pages/AboutV2";
import RolesPage from "./pages/RolesPage";
import ModulesPage from "./pages/ModulesPage";

const App = () => {
  return (
    <Router>
      <Routes>

        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* About */}
        <Route path="/about" element={<AboutV2 />} />

        {/* Roles List */}
        <Route path="/roles" element={<RolesPage />} />

        {/* Modules for each role */}
        <Route path="/modules/:role" element={<ModulesPage />} />

      </Routes>
    </Router>
  );
};

export default App;
