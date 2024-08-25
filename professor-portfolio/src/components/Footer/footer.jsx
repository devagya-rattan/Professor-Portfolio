import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4   px-4 lg:px-40 min-h-[20vh] flex flex-col justify-between">
      <div className="lg:flex lg:justify-between">
        {/* Contact Info */}
        <div className="mb-4 pl-4 lg:pl-0 lg:mb-0">
          <h3 className="md:text-3xl font-bold  texting text-xl">Arun Kumar Verma</h3>
          <p className=" texting md:text-base font-medium text-base">Associate Professor</p>
          <p className=" texting md:text-base font-medium text-base">Department of Electrical Engineering</p>
        </div>

        <hr className="border-gray-500 my-4" />

        {/* Social Media Icons */}
        <div className="flex items-center pl-4 lg:pl-0 space-x-12 lg:space-x-10 mt-7 md:mt-7  mb-4 lg:mb-0">
          <a href="">
            <FaLinkedinIn className="h-5 w-5 md:h-7 md:w-6 text-white hover:opacity-40" />
          </a>
          <a href="">
            <BiLogoGmail className="h-5 w-5 md:h-7 md:w-6 hover:opacity-40" />
          </a>
          <a href="">
            <RiFacebookFill className="h-5 w-5 md:h-7 md:w-6 text-white hover:opacity-40" />
          </a>
          <a href="">
            <FaTwitter className="h-5 w-5 md:h-7 md:w-6 text-white hover:opacity-40" />
          </a>
        </div>
      </div>

      <hr className="border-gray-500 mt-4" />
<div className="lg:flex ">
      {/* Navigation Links */}
      <div className="lg:flex pl-4 lg:pl-0 lg:flex-col   lg:w-2/4  mr-2 lg:space-y-2">
        <div className="flex  lg:justify-normal    mb-2 lg:mb-0">
          <Link to="/home" className="lg:pt-10 pr-28 lg:pr-0 pt-3 pb-3 lg:pb-8 lg:pl-10 text-base">
            Home
          </Link>
          <Link to="/blog" className=" lg:pt-10  pt-3 pb-3 pr-24 lg:pr-0 lg:pb-8 lg:pl-24  text-base">
            Blog
          </Link>
          <Link to="/phd" className=" lg:pt-10  pt-3 pb-3 lg:pb-8 lg:pr-0 lg:pl-24 text-base">
            PhD
          </Link>
        </div>
        <div className="flex  lg:justify-normal    mb-2 lg:mb-0">
          <Link to="/publications" className="lg:pb-8 pr-16 mr-3 lg:mr-0 lg:pr-0  pt-3 pb-3 lg:pl-10 texting text-base">
            Publications
          </Link>
          <Link to="/contact" className="lg:pb-8  pt-3 pr-20 lg:pr-0 pb-3 lg:pl-16 lg:ml-1 texting text-base">
            Contact
          </Link>
          <Link to="/about" className="lg:pb-8 lg:pl-20  pt-3 pb-3 lg:pr-0 texting text-base">
            About
          </Link>
        </div>
        <div className="flex lg:justify-normal    mb-2 lg:mb-0">
          <Link to="/google-scholar" className="lg:pb-8 pr-14 lg:pr-0 pt-3 pb-3 lg:pl-10 texting text-base">
            Google Scholar
          </Link>
          <Link to="/about" className="lg:pb-8 lg:pl-12 pr-20 lg:pr-0 lg:mr-0 mr-2 pt-3 pb-3  texting text-base">
            About
          </Link>
          <Link to="/events" className="lg:pb-8 lg:pl-20  pt-3 pb-3 lg:ml-3 texting text-base">
            Events
          </Link>
        </div>
        
      </div>
      
      <hr className="border-gray-500 my-4" />

      {/* Query Form */}
      <div className="lg:flex lg:w-2/4 pl-4 lg:pl-0  lg:justify-between ">
     
      <div className='hidden  lg:block w-px  h-full bg-gray-600'></div>
        <div className="lg:mb-2 lg:pt-4 lg:px-14 lg:w-full lg:mx-4">
          <div>
          <p className="text-start  text-base  mb-2  texting ">
            If You have any Queries feel free to Ask Here
          </p>
          </div>
         <div>
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-1 bg-black  texting   text-white md:text-base text-sm"
            />
              <div className='h-px bg-gray-600'></div>
              </div>
              <div>
            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-1 bg-black  texting   text-white md:text-base text-sm"
            />
             <div className='h-px bg-gray-600'></div>
            </div>
            <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-1 bg-black   text-white md:text-base text-sm"
            />
             <div className='h-px bg-gray-600'></div>
            </div>
            <div>
            <textarea
              placeholder="Enter Your Queries here"
              className="w-full p-1 bg-black  texting h-8   text-white md:text-base text-sm"
            ></textarea>
            <div className='h-px bg-gray-600 md:mb-2 mb-4'></div>
            </div>
            
            <button
              type="submit"
              className=" ml-2 p-2 border-2 border-white  texting  hover:opacity-40  md:text-base text-sm"
            >
              Submit
            </button>
        
        </div>
      </div>
      </div>

      <hr className="border-gray-500 my-4" />

      {/* Footer Credits */}
      <div className="text-center md:text-base text-sm texting ">
        © Trikor Technologia. All rights reserved. | Designed and developed by
        Trikor Technologia.
      </div>
    </footer>
  );
};

export default Footer;