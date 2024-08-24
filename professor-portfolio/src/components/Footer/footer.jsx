import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 lg:px-24">
      <div className="lg:flex lg:justify-between">
        {/* Contact Info */}
        <div className="mb-8 lg:mb-0">
          <h3 className="text-lg">Arun Kumar Verma</h3>
          <p className="text-sm">Associate Professor</p>
          <p className="text-sm">Department of Electrical Engineering</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-8 lg:mb-0">
          <a href="">
            <FaLinkedinIn className="hieght-width text-white hover:opacity-40" />
          </a>
          <a href="">
            <BiLogoGmail className="hieght-width hover:opacity-40" />
          </a>
          <a href="">
            <RiFacebookFill className="hieght-width text-white hover:opacity-40" />
          </a>
          <a href="">
            <FaTwitter className="hieght-width text-white hover:opacity-40" />
          </a>
        </div>
      </div>

      <hr className="border-gray-500 my-8" />

      {/* Navigation Links */}
      <div className="lg:flex lg:flex-col lg:items-start lg:space-y-4">
        <div className="flex justify-center space-x-8 mb-4 lg:mb-0">
          <a href="/home" className="text-sm">
            Home
          </a>
          <a href="/blog" className="text-sm">
            Blog
          </a>
          <a href="/phd" className="text-sm">
            Phd
          </a>
        </div>
        <div className="flex justify-center space-x-8 mb-4 lg:mb-0">
          <a href="/publications" className="text-sm">
            Publications
          </a>
          <a href="/contact" className="text-sm">
            Contact
          </a>
          <a href="/about" className="text-sm">
            About
          </a>
        </div>
        <div className="flex justify-center space-x-8">
          <a href="/google-scholar" className="text-sm">
            Google Scholar
          </a>
          <a href="/about" className="text-sm">
            About
          </a>
          <a href="/events" className="text-sm">
            Events
          </a>
        </div>
      </div>

      <hr className="border-gray-500 my-8" />

      {/* Query Form */}
      <div className="lg:flex lg:justify-between">
        <div className="mb-4">
          <p className="text-center text-sm mb-4">
            If You have any Queries feel free to Ask Here
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-2 bg-black border border-white text-white"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-2 bg-black border border-white text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 bg-black border border-white text-white"
            />
            <textarea
              placeholder="Enter Your Queries here"
              className="w-full p-2 bg-black border border-white text-white"
            ></textarea>
            <button
              type="submit"
              className="w-full p-2 border border-white hover:bg-white hover:text-black"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <hr className="border-gray-500 my-8" />

      {/* Footer Credits */}
      <div className="text-center text-xs">
        © Trikor Technologia. All rights reserved. | Designed and developed by
        Trikor Technologia.
      </div>
    </footer>
  );
};

export default Footer;