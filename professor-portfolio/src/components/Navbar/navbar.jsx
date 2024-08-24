import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".navbar-container") && !event.target.closest(".mobile-menu")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <>
      <div className="navbar-container w-full px-6 pt-2 md:px-40 flex flex-col relative">
        <div className="flex flex-row h-14 justify-between items-center">
          <div className="flex-col">
            <h5 className="timesnowroman lg:text-5xl md:text-4xl text-3xl font-extrabold">
              Arun Verma
            </h5>
          </div>
          <div className="hidden xl:flex space-x-3">
            {/* Desktop Links */}
            <Link className="roberto text-base font-bold hover:opacity-40 cursor-pointer" to="/">Home</Link>
            <Link className="roberto text-base pl-2 font-bold hover:opacity-40 cursor-pointer" to="/blog">Blog</Link>
            <Link className="roberto text-base pl-2 font-bold hover:opacity-40 cursor-pointer" to="/blog">Phd/Interns</Link>
            <Link className="roberto text-base pl-2 font-bold hover:opacity-40 cursor-pointer" to="/publications">Publishments</Link>
            <Link className="roberto text-base pl-2 font-bold hover:opacity-40 cursor-pointer" to="/blog">Contact us</Link>
            <Link className="roberto text-base pl-2 font-bold hover:opacity-40 cursor-pointer" to="/about">About Me</Link>
          </div>

          {/* Hamburger Icon */}
          <GiHamburgerMenu className="lg:hidden block cursor-pointer" onClick={toggle} />
        </div>

        {/* Sidebar Mobile Menu */}
        <div
          className={`mobile-menu fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } z-50`}
        >
          <div className="flex flex-col items-start p-6 gap-4">
            {/* Mobile Links */}
            <Link className="roberto text-base font-bold hover:opacity-40" to="/" onClick={toggle}>Home</Link>
            <Link className="roberto text-base font-bold hover:opacity-40" to="/blog" onClick={toggle}>Blog</Link>
            <Link className="roberto text-base font-bold hover:opacity-40" to="/blog" onClick={toggle}>Phd/Interns</Link>
            <Link className="roberto text-base font-bold hover:opacity-40" to="/publications" onClick={toggle}>Publishments</Link>
            <Link className="roberto text-base font-bold hover:opacity-40" to="/blog" onClick={toggle}>Contact us</Link>
            <Link className="roberto text-base font-bold hover:opacity-40" to="/about" onClick={toggle}>About Me</Link>
          </div>
        </div>

        {/* Overlay when menu is open */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={toggle}
          ></div>
        )}

        <div className="flex-col lineend w-full bg-black"></div>
      </div>
    </>
  );
}

export default Navbar;
