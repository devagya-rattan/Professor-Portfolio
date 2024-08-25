import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-4 lg:px-24 min-h-[20vh] flex flex-col justify-between">
      <div className="lg:flex lg:justify-between">
        {/* Contact Info */}
        <div className="mb-4 lg:mb-0">
          <h3 className="text-base">Arun Kumar Verma</h3>
          <p className="text-xs">Associate Professor</p>
          <p className="text-xs">Department of Electrical Engineering</p>
        </div>

        <hr className="border-gray-500 my-4" />

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-3 mb-4 lg:mb-0">
          <a href="">
            <FaLinkedinIn className="h-5 w-5 text-white hover:opacity-40" />
          </a>
          <a href="">
            <BiLogoGmail className="h-5 w-5 hover:opacity-40" />
          </a>
          <a href="">
            <RiFacebookFill className="h-5 w-5 text-white hover:opacity-40" />
          </a>
          <a href="">
            <FaTwitter className="h-5 w-5 text-white hover:opacity-40" />
          </a>
        </div>
      </div>

      <hr className="border-gray-500 my-4" />

      {/* Navigation Links */}
      <div className="lg:flex lg:flex-col lg:items-start lg:space-y-2">
        <div className="flex justify-center space-x-6 mb-2 lg:mb-0">
          <Link to="/home" className="text-xs">
            Home
          </Link>
          <Link to="/blog" className="text-xs">
            Blog
          </Link>
          <Link to="/phd" className="text-xs">
            PhD
          </Link>
        </div>
        <div className="flex justify-center space-x-6 mb-2 lg:mb-0">
          <Link to="/publications" className="text-xs">
            Publications
          </Link>
          <Link to="/contact" className="text-xs">
            Contact
          </Link>
          <Link to="/about" className="text-xs">
            About
          </Link>
        </div>
        <div className="flex justify-center space-x-6">
          <Link to="/google-scholar" className="text-xs">
            Google Scholar
          </Link>
          <Link to="/about" className="text-xs">
            About
          </Link>
          <Link to="/events" className="text-xs">
            Events
          </Link>
        </div>
      </div>

      <hr className="border-gray-500 my-4" />

      {/* Query Form */}
      <div className="lg:flex lg:justify-between">
        <div className="mb-2">
          <p className="text-center text-xs mb-2">
            If You have any Queries feel free to Ask Here
          </p>
          <form className="space-y-2">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-1 bg-black border border-white text-white text-xs"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-1 bg-black border border-white text-white text-xs"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-1 bg-black border border-white text-white text-xs"
            />
            <textarea
              placeholder="Enter Your Queries here"
              className="w-full p-1 bg-black border border-white text-white text-xs"
            ></textarea>
            <button
              type="submit"
              className="w-full p-1 border border-white hover:bg-white hover:text-black text-xs"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <hr className="border-gray-500 my-4" />

      {/* Footer Credits */}
      <div className="text-center text-xxs">
        © Trikor Technologia. All rights reserved. | Designed and developed by
        Trikor Technologia.
      </div>
    </footer>
  );
};

export default Footer;