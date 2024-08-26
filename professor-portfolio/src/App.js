import React from "react";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import About from "./components/About/about";
import Publications from "./components/Publications/Publications";
import Blog from "./components/Blog/blog";
import Intern from "./components/Intern/Intern";
import Contact from "./components/Contact/Contact";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Registration from "./components/Registration/Registration";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const userData = useSelector((state) => state);
  console.log(userData.usersData.length);
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/Intern" element={<Intern />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path={userData.usersData.length === 0 ? "/registration" : "/login"}
            element={
              userData.usersData.length > 0 ? <Login /> : <Registration />
            }
          />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/registration" element={<Registration />} /> */}
          <Route path="/publications" element={<Publications />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;