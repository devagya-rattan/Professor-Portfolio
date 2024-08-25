import React from 'react';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Footer from './components/Footer/footer';
import About from './components/About/about';
import Publications from './components/Publications/Publications';
import Blog from './components/Blog/blog';
import Profile from './components/Profile/Profile';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Timeline from './components/Timeline/timeline';
function App() {
  return (
    <>
      <div>
      <Router>
            <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route  path="/about" element={<About/>}/>
                    <Route  path="/blog" element={<Blog/>}/>
                    <Route  path="/login" element={<Login/>}/>
                    <Route  path="/profile" element={<Profile/>}/>
                    <Route  path="/registration" element={<Registration/>}/>
                    <Route  path="/publications" element={<Publications/>}/>
                    {/* for temporary use */}
                    <Route  path="/Timeline" element={<Timeline/>}/>  
                </Routes>
                <Footer />
            </Router>
          
           
      </div>
    </>
  );
}

export default App;
