import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navigationbar";
import Dashboard from "./pages/Dashboard";
import Weather from "./pages/Weather";
import Expenses from "./pages/Expenses";
import FarmData from "./pages/FarmData/FarmData";
import Login from "./pages/Login";
import Crops from "./pages/FarmData/Crops";
import Livestock from "./pages/FarmData/Livestock";


function App() {
  return (
    <Router>
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="/farm-data" element={<FarmData />} />
          <Route path="/login" element={<Login />} />
          <Route path="/crops" element={<Crops />} />
          <Route path="/livestock" element={<Livestock />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
