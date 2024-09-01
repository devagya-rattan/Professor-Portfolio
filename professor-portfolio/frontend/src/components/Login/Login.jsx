import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../../Redux/Action";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userData = useSelector((state) => state.loginState);
  const dispatch = useDispatch();
  console.log(userData);
  
  const loginForm = (e) => {
    e.preventDefault();
    try {
      axios
        .post(`http://localhost:8080/api/login/loginusers`, { email, password })
        .then((response) => {
          alert("login successful!");
          // dispatch(userActions(userData));
          navigate("/profile");
          dispatch(loginActions(email));
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>
        <form onSubmit={loginForm}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="form-checkbox h-4 w-4 text-blue-600"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 text-gray-700 text-sm"
              >
                Remember Me
              </label>
            </div>
            {/* <a
              href="#"
              className="text-sm text-black hover:underline focus:outline-none focus:ring-2 focus:ring-blue-600"
            >
              Forgot Password?
            </a> */}
          </div>

          <button
            onClick={loginForm}
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-white hover:text-black hover:ring-2 hover:ring-black transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
