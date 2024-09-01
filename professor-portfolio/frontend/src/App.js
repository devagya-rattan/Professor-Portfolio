import React from "react";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";
import Publications from "./components/Publications/Publications";
import Blog from "./components/Blog/blog";
import Contact from "./components/Contact/Contact";
import Intern from "./components/Intern/Intern";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import NotFound from "./components/Notfound/Notfound";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Timeline from "./components/Timeline/timeline";
import Foot from "./components/About/foot";
import Head from "./components/About/head";

function App() {
  const userData = useSelector((state) => state.userState);
  const loginData = useSelector((state) => state.loginState);
  const isUserRegistered = userData.usersData.length > 0;
  const isUserLoggedIn = loginData.loginData.length > 0;
  console.log(userData.usersData.length);
  console.log(loginData.loginData.length);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* Public Routes */}
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/intern" element={<Intern />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/timeline" element={<Timeline />} />

          {/* Conditional Rendering for Registration Route */}
          {!isUserRegistered && (
            <Route path="/registration" element={<Registration />} />
          )}

          {/* Conditional Rendering for Login Route */}
          {isUserRegistered && <Route path="/login" element={<Login />} />}

          {/* Protect Profile Route */}
          <Route
            path="/profile"
            element={isUserLoggedIn ? <Profile /> : <Navigate to="/login" />}
          />

<<<<<<< HEAD
          {/* Catch-all Route for NotFound */}
=======
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/registration" element={<Registration />} /> */}
          <Route path="/publications" element={<Publications />} />
          <Route path="/timeline" element={<Timeline/>} />
        


>>>>>>> 124d8c1b602f9aae2d17f91adeb68a49270d4341
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
