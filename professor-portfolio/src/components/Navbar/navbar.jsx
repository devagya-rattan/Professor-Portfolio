import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPeopleDropdownOpen, setIsPeopleDropdownOpen] = useState(false);
  const [isPublicationsDropdownOpen, setIsPublicationsDropdownOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
    setIsPeopleDropdownOpen(false);
    setIsPublicationsDropdownOpen(false);
  };

  const togglePeopleDropdown = () => {
    setIsPeopleDropdownOpen(!isPeopleDropdownOpen);
    setIsPublicationsDropdownOpen(false);
  };

  const togglePublicationsDropdown = () => {
    setIsPublicationsDropdownOpen(!isPublicationsDropdownOpen);
    setIsPeopleDropdownOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        !event.target.closest(".navbar-container") &&
        !event.target.closest(".mobile-menu")
      ) {
        setIsOpen(false);
        setIsPeopleDropdownOpen(false);
        setIsPublicationsDropdownOpen(false);
      }
    };

    if (isOpen || isPeopleDropdownOpen || isPublicationsDropdownOpen) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, isPeopleDropdownOpen, isPublicationsDropdownOpen]);

  return (
    <>
      <div className="navbar-container w-full px-6 pt-2 md:px-40 flex flex-col relative">
        <div className="flex flex-row h-14 justify-between items-center">
          <div className="flex-col">
            <Link to="/">
              <h5 className="timesnowroman lg:text-5xl md:text-4xl text-2xl font-extrabold">
                Arun Kumar Verma
              </h5>
            </Link>
          </div>
          <div className="hidden xl:flex space-x-3">
            {/* Desktop Links */}
            <Link className="roberto text-base font-bold hover:opacity-40 cursor-pointer" to="/">Home</Link>
            <Link className="roberto text-base pl-2 font-bold hover:opacity-40 cursor-pointer" to="/blog">Blog</Link>
            
            {/* People Dropdown */}
            <div className="relative">
              <button
                onClick={togglePeopleDropdown}
                className="roberto text-base pl-2 font-bold hover:opacity-40"
              >
                People
              </button>
              {isPeopleDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                  {/* Dropdown Items */}
                  <Link className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-gray-100" to="/phd" onClick={togglePeopleDropdown}>
                    PDF
                  </Link>
                  <Link className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-gray-100" to="/intern" onClick={togglePeopleDropdown}>
                    PhD
                  </Link>
                  <Link className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-gray-100" to="/intern" onClick={togglePeopleDropdown}>
                    JRF
                  </Link>
                  <Link className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-gray-100" to="/intern" onClick={togglePeopleDropdown}>
                    SRF
                  </Link>
                  <Link className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-gray-100" to="/phd" onClick={togglePeopleDropdown}>
                    Mtech
                  </Link>
                  <Link className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-gray-100" to="/phd" onClick={togglePeopleDropdown}>
                    Btech
                  </Link>
                </div>
              )}
            </div>

            {/* Publications Dropdown */}
            <div className="relative">
              <button
                onClick={togglePublicationsDropdown}
                className="roberto text-base pl-2 font-bold hover:opacity-40"
              >
                Publications
              </button>
              {isPublicationsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-50">
                  {/* Dropdown Items */}
                  <Link className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-gray-100" to="/phd" onClick={togglePublicationsDropdown}>
                    Journal
                  </Link>
                  <Link className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-gray-100" to="/intern" onClick={togglePublicationsDropdown}>
                    Conference
                  </Link>
                  <Link className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-gray-100" to="/intern" onClick={togglePublicationsDropdown}>
                    Book
                  </Link>
                </div>
              )}
            </div>

            <Link className="roberto text-base pl-2 font-bold hover:opacity-40 cursor-pointer" to="/contact">Contact us</Link>
            <Link className="roberto text-base pl-2 font-bold hover:opacity-40 cursor-pointer" to="/about">About Me</Link>
          </div>

          {/* Hamburger Icon */}
          <GiHamburgerMenu className="xl:hidden block cursor-pointer" onClick={toggle} />
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
            <div className="my-2 h-px bg-black w-full" />
            <Link className="roberto text-base font-bold hover:opacity-40" to="/blog" onClick={toggle}>Blog</Link>
            <div className="my-2 h-px bg-black w-full" />

            {/* People Dropdown */}
            <div className="relative">
              <button
                onClick={togglePeopleDropdown}
                className="roberto text-base font-bold hover:opacity-40 cursor-pointer"
              >
                People
              </button>
              {isPeopleDropdownOpen && (
                <div className="mt-2 roberto w-36 bg-white shadow-lg rounded-md z-50">
                  {/* Dropdown Items */}
                  <Link className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-gray-100" to="/phd" onClick={togglePeopleDropdown}>
                    PDF
                  </Link>
                  <Link className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-gray-100" to="/intern" onClick={togglePeopleDropdown}>
                    PhD
                  </Link>
                  <Link className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-gray-100" to="/intern" onClick={togglePeopleDropdown}>
                    JRF
                  </Link>
                  <Link className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-gray-100" to="/intern" onClick={togglePeopleDropdown}>
                    SRF
                  </Link>
                  <Link className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-gray-100" to="/phd" onClick={togglePeopleDropdown}>
                    Mtech
                  </Link>
                  <Link className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-gray-100" to="/phd" onClick={togglePeopleDropdown}>
                    Btech
                  </Link>
                </div>
              )}
            </div>

            <div className="my-2 h-px bg-black w-full" />

            {/* Publications Dropdown */}
            <div className="relative">
              <button
                onClick={togglePublicationsDropdown}
                className="roberto text-base font-bold hover:opacity-40 cursor-pointer"
              >
                Publications
              </button>
              {isPublicationsDropdownOpen && (
                <div className="mt-2 roberto w-36  bg-white shadow-lg rounded-md z-50">
                  {/* Dropdown Items */}
                  <Link className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-gray-100" to="/phd" onClick={togglePublicationsDropdown}>
                    Journal
                  </Link>
                  <Link className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-gray-100" to="/intern" onClick={togglePublicationsDropdown}>
                    Conference
                  </Link>
                  <Link className="block px-4 font-semibold py-2 text-sm text-gray-700 hover:bg-gray-100" to="/intern" onClick={togglePublicationsDropdown}>
                    Book
                  </Link>
                </div>
              )}
            </div>

            <div className="my-2 h-px bg-black w-full" />

            <Link className="roberto text-base font-bold hover:opacity-40" to="/contact" onClick={toggle}>Contact us</Link>
            <div className="my-2 h-px bg-black w-full" />
            <Link className="roberto text-base font-bold hover:opacity-40" to="/about" onClick={toggle}>About Me</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
