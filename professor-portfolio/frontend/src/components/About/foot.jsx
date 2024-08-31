
import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import imageone from "../../Images/Aunvermaiithomepagestage.jpeg";
import book from "../../Images/book.png";
import arunsir from "../../Images/arunsir.jpeg";
import "./About.css";
import Timeline from '../Timeline/timeline';
import Timelineexp from '../Timeline/timelineexp';
import Head from './head';
const Foot = () => {
    return(
<>
<div className="bg-green-100 mb-5 text-center w-full py-10">
  {/* Section Title */}
  <h1 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold mb-8">
    Book & Patents
  </h1>

  {/* Flex Container for Image and Text */}
  <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-4 md:px-8 lg:px-16 space-y-8 lg:space-y-0 lg:space-x-12">

    {/* Books Section */}
    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:w-2/3">
      {/* Image Container */}
      <div className="flex lg:pt-14 justify-center lg:justify-end lg:w-1/3 mb-4 lg:mb-0">
        <img
          src={book} // Ensure to import or provide the correct image path
          alt="Book Cover"
          className="w-3/4 lg:w-32 max-w-xs rounded-lg shadow-md border border-gray-200"
        />
      </div>

      {/* Book Text Container */}
      <div className="text-left lg:w-2/3 lg:pl-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Books</h2>
        <p className="text-base md:text-lg leading-relaxed">
          1. <strong>"Advanced Concepts and Technologies for Electric Vehicles"</strong> by A.K. Rathore and A.K. Verma, published by CRC Press on August 30, 2023. This book explores the latest advancements in electric vehicle technology, providing a comprehensive guide for researchers and engineers.
          <br /><em>eBook ISBN: 9781003330134</em>
        </p>
      </div>
    </div>

    {/* Patents Section */}
    <div className="lg:w-2/3 text-left">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Patents</h2>
      <ul className="list-disc list-inside text-base md:text-lg leading-relaxed">
        <li>
          <strong>Full-Bridge DC-DC Converter with Voltage Spike Suppression for EV Battery Charging.</strong> Application no.: 202011009519; Filing Date: 05/03/2020. Granted Patent no. 530584.
        </li>
        <li className="mt-2">
          <strong>Single-phase transformer-less Boosting Inverter with Leakage Current Elimination for Photovoltaic Application.</strong> Application No. 202011050918; Filing Date: 23/11/2020. Granted Patent no. 878248.
        </li>
        <li className="mt-2">
          <strong>A Single Stage Bridgeless PFC Converter for Charging an Electric Vehicle.</strong> Indian Patent Application 202211049135, Filed on 29th August 2022.
        </li>
      </ul>
    </div>
  </div>
</div>



</>
    );
}
export default Foot;