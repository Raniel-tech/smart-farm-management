import { useState, useEffect } from "react";

function Weather() {
const [city, setCity] = useState("Machakos");
const [weather, setWeather] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const apiKey = "2f700f6d603657a7dd5aaada7ab453ca";

useEffect(() => {
const getWeather = async () => {
try {
setLoading(true);
const res = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
);
if (!res.ok) throw new Error("City not found");
const data = await res.json();
setWeather(data);
setError("");
} catch (err) {
setError(err.message);
} finally {
setLoading(false);
}
};

getWeather();
}, [city]);

return ( <div className="flex flex-col items-center min-h-screen bg-green-50 p-8"> <h2 className="text-2xl font-bold text-green-700 mb-6">Weather App</h2>

  <input
    type="text"
    placeholder="Enter city name"
    value={city}
    onChange={(e) => setCity(e.target.value)}
    className="border border-green-400 rounded-lg px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-400"
  />

  {loading && <p className="text-gray-600">Loading...</p>}
  {error && <p className="text-red-500">{error}</p>}

  {weather && (
    <div className="bg-white p-6 rounded-xl shadow-md w-80 text-center border-t-4 border-green-500">
      <h3 className="text-xl font-semibold mb-2">{weather.name}</h3>
      <p className="text-4xl font-bold text-green-700 mb-2">
        {weather.main.temp}°C
      </p>
      <p className="capitalize text-gray-600 mb-2">
        {weather.weather[0].description}
      </p>
      <div className="flex justify-between text-sm text-gray-600">
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} m/s</p>
      </div>
    </div>
  )}
</div>

);
}

export default Weather;
