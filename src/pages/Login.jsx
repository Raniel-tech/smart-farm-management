import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../firebase"
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLogin, setIsLogin] = useState(true)
  const [error, setError] = useState("")
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password)
        alert("Login successful!")
      } else {
        await createUserWithEmailAndPassword(auth, email, password)
        alert("Registration successful!")
      }

      navigate("/")
      setError("")
    } catch (err) {
      console.log("Error:", err)
      setError(isLogin ? "Login failed!" : "Registration failed!")
    }

    setEmail("")
    setPassword("")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-[350px]">
        <h2 className="text-center text-2xl font-bold mb-5 text-green-700">
          {isLogin ? "Login" : "Register"}
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="border w-full px-3 py-2 rounded focus:ring-2 focus:ring-green-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="password"
              placeholder="Password"
              className="border w-full px-3 py-2 rounded focus:ring-2 focus:ring-green-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm text-center mb-3">{error}</p>}

          <button
            type="submit"
            className="bg-green-600 w-full text-white py-2 rounded hover:bg-green-700"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-green-700 font-semibold hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  )
}

export default Login
