import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
return ( <div className="min-h-screen bg-green-50 p-8"> <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
Smart Farm Management Dashboard </h1>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
    <Link
      to="/weather"
      className="bg-white rounded-xl shadow-md border-t-4 border-blue-500 p-6 hover:shadow-lg transition"
    >
      <h2 className="text-xl font-semibold text-blue-600 mb-2">Weather</h2>
      <p className="text-gray-500">View current farm weather conditions</p>
    </Link>

    <Link
      to="/expenses"
      className="bg-white rounded-xl shadow-md border-t-4 border-yellow-500 p-6 hover:shadow-lg transition"
    >
      <h2 className="text-xl font-semibold text-yellow-600 mb-2">Expenses</h2>
      <p className="text-gray-500">Track your farm expenses easily</p>
    </Link>

    <Link
      to="/farm-data"
      className="bg-white rounded-xl shadow-md border-t-4 border-green-500 p-6 hover:shadow-lg transition"
    >
      <h2 className="text-xl font-semibold text-green-600 mb-2">Farm Data</h2>
      <p className="text-gray-500">
        Record and view crop and livestock data
      </p>
    </Link>
  </div>
</div>


);
}

export default Dashboard;
