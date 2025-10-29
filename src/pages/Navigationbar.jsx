import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-green-600 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Smart Farm</h1>
      <div className="space-x-6">
        <Link to="/" className="hover:text-green-200">Dashboard</Link>
        <Link to="/weather" className="hover:text-green-200">Weather</Link>
        <Link to="/expenses" className="hover:text-green-200">Expenses</Link>
        <Link to="/farm-data" className="hover:text-green-200">Farm Data</Link>
        <Link to="/login" className="hover:text-green-200">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
