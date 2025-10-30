import React, { useState } from "react";
import { db } from "../../firebase";
import {collection, addDoc, getDocs} from "firebase/firestore";

function Livestock() {
  const [livestock, setLivestock] = useState([]);
  const [animalType, setAnimalType] = useState("");
  const [quantity, setQuantity] = useState("");
  const [healthStatus, setHealthStatus] = useState("");

 useEffect(() => {
    const storedAnimals = JSON.parse(localStorage.getItem("livestock")) || [];
    setLivestock(storedAnimals);
  }, []);

  useEffect(() => {
    localStorage.setItem("livestock", JSON.stringify(livestock));
  }, [livestock]);

  const handleAddLivestock = (e) => {
    e.preventDefault();
    if (!animalType || !quantity || !healthStatus) return;

    const newAnimal = { id: Date.now(), animalType, quantity, healthStatus };
    setLivestock([...livestock, newAnimal]);
    setAnimalType("");
    setQuantity("");
    setHealthStatus("");
  };


  return (
    <div className="min-h-screen bg-green-50 p-6">
      <h1 className="text-3xl font-bold text-green-700 mb-8 text-center">
        Livestock Management
      </h1>

      <form
        onSubmit={handleAddLivestock}
        className="bg-white shadow-md rounded-lg p-6 max-w-md mx-auto mb-8"
      >
        <h2 className="text-xl font-semibold mb-4 text-green-600">Add New Livestock</h2>

        <input
          type="text"
          placeholder="Animal Type (e.g. Cattle, Goats)"
          value={animalType}
          onChange={(e) => setAnimalType(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />

        <input
          type="text"
          placeholder="Health Status (e.g. Healthy, Sick)"
          value={healthStatus}
          onChange={(e) => setHealthStatus(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />

        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Add Livestock
        </button>
      </form>

      <div className="max-w-2xl mx-auto">
        {livestock.length === 0 ? (
          <p className="text-center text-gray-500">No livestock records yet.</p>
        ) : (
          <ul className="space-y-3">
            {livestock.map((animal) => (
              <li
                key={animal.id}
                className="bg-white shadow-sm rounded-lg p-4 flex justify-between items-center"
              >
                <div>
                  <h3 className="font-semibold text-green-700">{animal.animalType}</h3>
                  <p className="text-sm text-gray-600">
                    Quantity: {animal.quantity} | Health: {animal.healthStatus}
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

export default Livestock;
