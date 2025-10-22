import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Weather from "./pages/Weather";
import Expenses from "./pages/Expenses";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-green-50">
        <nav className="flex justify-around bg-green-700 text-white py-4">
          <Link to="/" className="font-semibold hover:underline">Dashboard</Link>
          <Link to="/weather" className="font-semibold hover:underline">Weather</Link>
          <Link to="/expenses" className="font-semibold hover:underline">Expenses</Link>
          <Link to="/login" className="font-semibold hover:underline">Login</Link>
        </nav>

        <div className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
