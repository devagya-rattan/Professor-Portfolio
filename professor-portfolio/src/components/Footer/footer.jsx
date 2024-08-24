import React from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { RiFacebookFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

import "./Footer.css";
function Footer() {
  return (
    <>
      <div className='footer   bg-black w-full  '>
        <div className='w-full sm:w-full  sm:pl-1 sm:pr-1 md:pl-5 md:pr-5 lg:pl-40  pt-2 lg:pr-40  flex flex-col'>

          {/* column 1 */}
          <div className='pb-6 pt-7 md:pl-4 paddding md:pr-4 sm:pl-4 sm:pr-4  flex flex-row  h-32 justify-between items-center text-white'>
            <div className='texting  flex-col fonttt-size'><h3>Arun Kumar Verma <br />Assosiate Professor <br />Department of Electrical Engineering </h3></div>
            <div className='flex flex-row spaceee space-x-7  '>
              <a href=""><FaLinkedinIn className=' hieght-width text-white hover:opacity-40' /></a>
              <a href=""><BiLogoGmail className=' hieght-width hover:opacity-40' /></a>
              <a href=""><RiFacebookFill className='h-24 w-6 hieght-width text-white hover:opacity-40' /></a>
              <a href=""><FaTwitter className='h-24 w-6 hieght-width text-white hover:opacity-40' /></a>
            </div>
          </div>

          {/* column 2   */}
          <div className='linegrey w-full flex-col bg-gray-500'></div>

          {/* column 3 */}
          <div className="flex  flix-400 text-white w-full heightc3 justify-between items-center md:items-start sm:items-start">
            <div className=" heightc3  w-full list-form  flex flex-col justify-start">
              <div className='space-x-containera   '>
                <Link className='roberto fonttt-size font-normal hover:opacity-40 cursor-pointer texting' to='/'>Home</Link>
                <Link className='roberto fonttt-size    font-normal hover:opacity-40 cursor-pointer texting' to='/blog'>Blog</Link>
                <Link className='roberto fonttt-size  font-normal hover:opacity-40 cursor-pointer texting' to='/blog'>Phd</Link>
               
              </div>
              <div className='space-x-containerb   lg:pt-7 md:pt-5  '>
              <Link className='roberto fonttt-size  font-normal hover:opacity-40 cursor-pointer texting' to='/blog'>Publications</Link>
                <Link className='roberto fonttt-size  font-normal hover:opacity-40 cursor-pointer texting' to='/blog'>Contact</Link>
                <Link className='roberto fonttt-size  font-normal hover:opacity-40 cursor-pointer texting' to='/about'>About</Link>
              

              </div>
              <div className='space-x-containerc    lg:pt-7 md:pt-5 '>
              <Link className='roberto fonttt-size padding-c31 font-normal hover:opacity-40 cursor-pointer texting ' to='/blog'>Google Scholor</Link>
              <Link className='roberto fonttt-size padding-c32  font-normal hover:opacity-40 cursor-pointer texting' to='/about'>About</Link>
             
                <Link className='roberto fonttt-size padding-c33 font-normal hover:opacity-40 cursor-pointer texting' to='/blog'>Events</Link>
                
                

              </div>
              <div className='line'></div>

            </div>
          
            {/* when full screen */}
            <div className="lg:h-full lg:border-l lg:border-gray-400"></div>

            {/* when responsive */}
            <div className='block  linegrey w-full flex-col bg-gray-500'></div>

            <div className=" heightc3 w-3/6   query-form flex flex-col justify-start   ">
              <div><p className='texting font-normal fonttt-size pb-4'>If You have any Queries feel free to Ask Here</p></div>
              <div className='flex flex-col pb-2 '><input type='text' placeholder='First Name' className='texting w-full fonttt-size bg-black text-gray-500' />
                <div className='lineone bg-gray-500'></div>
              </div>

              <div className='flex flex-col pb-2'><input type='text' placeholder='Last Name' className='w-full texting fonttt-size bg-black text-gray-500' />
                <div className='lineone bg-gray-500'></div>
              </div>

              <div className='flex flex-col pb-3'><input type="email" placeholder='Email' className='w-full texting fonttt-size bg-black text-gray-500' />
                <div className='lineone bg-gray-500'></div>
              </div>
              <div className='flex flex-col pb-3'><textarea   placeholder='Enter Your Queries here' className='w-full fonttt-size texting h-8 bg-black text-gray-500' />
                <div className='lineone bg-gray-500'></div>
              </div>
              <div>
              <button className='pt-2 pb-2 pl-4 pr-5 fonttt-size border-white border-2 hover:opacity-40 texting text-white'>Submit</button>
              </div>
            </div>


          </div>


          {/* column 4 */}
          <div className='tagg linegrey w-full flex-col bg-gray-500'></div>

          {/* column 5   */}
          <div className='pt-6 h-10  text-center'>
            <p className='text-white texting text-md  '> &copy; Trikor Technologia. All rights reserved. | Designed and developed by Trikor Technologia. </p>
          </div>
        </div>

      </div>
    </>
  );
}

export default Footer;
