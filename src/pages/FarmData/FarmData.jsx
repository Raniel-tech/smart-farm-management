import React from "react";
import { Link } from "react-router-dom";

function FarmData() {
  return (
    <div className="min-h-screen bg-green-50 p-8">
      <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
        Farm Data Management
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
        <Link
          to="/crops"
          className="bg-white rounded-xl shadow-md border-t-4 border-green-500 p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-green-600 mb-2">Crop Management</h2>
          <p className="text-gray-500">Record and monitor crop types, soil data, and health.</p>
        </Link>

        <Link
          to="/livestock"
          className="bg-white rounded-xl shadow-md border-t-4 border-blue-500 p-6 hover:shadow-lg transition"
        >
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Livestock Management</h2>
          <p className="text-gray-500">Track animal types, feeding schedules, and health info.</p>
        </Link>
      </div>
    </div>
  );
}

export default FarmData;
