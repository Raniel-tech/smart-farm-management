import React, { useState } from "react";

function Crops() {
  const [crops, setCrops] = useState([]);
  const [cropName, setCropName] = useState("");
  const [plantingDate, setPlantingDate] = useState("");
  const [expectedHarvest, setExpectedHarvest] = useState("");

  const handleAddCrop = (e) => {
    e.preventDefault();

    if (!cropName || !plantingDate || !expectedHarvest) return;

    const newCrop = {
      id: Date.now(),
      cropName,
      plantingDate,
      expectedHarvest,
    };

    setCrops([...crops, newCrop]);
    setCropName("");
    setPlantingDate("");
    setExpectedHarvest("");
  };

  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
        Crop Management
      </h1>

      <form
        onSubmit={handleAddCrop}
        className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mb-8"
      >
        <h2 className="text-xl font-semibold mb-4 text-green-600">Add New Crop</h2>

        <input
          type="text"
          placeholder="Crop Name"
          value={cropName}
          onChange={(e) => setCropName(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />
        <input
          type="date"
          placeholder="Planting Date"
          value={plantingDate}
          onChange={(e) => setPlantingDate(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />
        <input
          type="date"
          placeholder="Expected Harvest Date"
          value={expectedHarvest}
          onChange={(e) => setExpectedHarvest(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Crop
        </button>
      </form>

      <div className="max-w-2xl mx-auto">
        {crops.length === 0 ? (
          <p className="text-center text-gray-500">No crops added yet.</p>
        ) : (
          <ul className="space-y-3">
            {crops.map((crop) => (
              <li
                key={crop.id}
                className="bg-white shadow-sm rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-green-700">{crop.cropName}</h3>
                  <p className="text-sm text-gray-600">
                    Planted: {crop.plantingDate} | Harvest: {crop.expectedHarvest}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Crops;
