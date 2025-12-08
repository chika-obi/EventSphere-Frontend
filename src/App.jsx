import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import DashboardStudent from "./pages/DashboardStudent/DashboardStudent"; // <-- import it

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard/student" element={<DashboardStudent />} /> {/* new route */}
        <Route path="*" element={<Register />} /> {/* default */}
      </Routes>
    </Router>
  );
}

export default App;
