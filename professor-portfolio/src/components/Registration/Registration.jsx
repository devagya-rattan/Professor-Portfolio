import React, { useState} from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userActions } from "../../Redux/Action";
function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const userData = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(userData);
  const postForm = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8080/api/users/register`, {
        name,
        email,
        password,
      })
      .then((response) => {
        if (response.data.message === "The user already exists") {
          alert("User already registered please login");
        } else {
          dispatch(userActions(name));
          alert("Successful registration!");
          navigate("/login");
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {userData.usersData.length === 1 ? (
        <div> You have already registered</div>
      ) : (
        <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
            Register
          </h2>
          <form onSubmit={postForm}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                id="name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your name"
              />
            </div>
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
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your email"
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
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                placeholder="Enter your password"
              />
            </div>
            <button
              onClick={postForm}
              type="submit"
              className="w-full bg-black text-white py-2 rounded-lg hover:bg-white hover:text-black hover:ring-2 hover:ring-black transition"
            >
              Register
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Registration;
