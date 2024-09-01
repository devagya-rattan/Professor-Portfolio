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
import Foot from './foot';

function About() {
  // Initialize AOS with adjusted duration for slower animation
  useEffect(() => {
    AOS.init({
      duration: 3000, // Increased duration for a slower fade effect
      offset: 10, // Offset from the original trigger point
      easing: 'ease-out', // Easing function for the animations
      once: false, // Animation should happen only once
    });
  }, []);

  return (
    <>
    
      {/* <div className='pt-px height w-full'> */}
        {/* Section 1: Brief description about Arun Verma */}
        <Head/>

        {/* Section 2: Detailed description about Arun Verma with specific animation */}
      
        <Timeline />
        <Timelineexp />
       <Foot />
      {/* </div> */}
    </>
  );
}

export default About;






// import React from "react";

// const About = () => {
//   const timelineData = [
//     {
//       year: "1975",
//       content: "Started Micro-Soft with Paul Allen in Albuquerque, NM.",
//     },
//     {
//       year: "1976",
//       content: "Changed company name to Microsoft.",
//     },
//     {
//       year: "1985",
//       content: "Windows 1.0 launched.",
//     },
//     {
//       year: "1995",
//       content: "Windows 95 launched.",
//     },
//     {
//       year: "2001",
//       content: "The original Xbox released.",
//     },
//     // Add more events as needed
//   ];

//   return (
//     <div className="container mx-auto my-10">
//     <div className="relative">
//       {/* Vertical Line */}
//       <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-r-2 border-gray-300"></div>

//       {timelineData.map((event, index) => (
//         <div
//           key={index}
//           className={`mb-8 flex justify-between items-center w-full ${
//             index % 2 === 0 ? "flex-row-reverse" : ""
//           }`}
//         >
//           {/* Content Container */}
//           <div className={w-5/12 ${index % 2 === 0 ? "pl-20" : "pr-20"}}>
//             <div className="bg-white p-4 rounded shadow-md">
//               <h3 className="mb-1 font-bold text-lg">{event.year}</h3>
//               <p className="text-sm text-gray-700">{event.content}</p>
//             </div>
//           </div>

//           {/* Horizontal Line Connector */}
//           <div className="w-1/12 flex justify-center items-center">
//             <div
//               className={`border-t-2 border-gray-300 w-full ${
//                 index % 2 === 0 ? "ml-auto" : "mr-auto"
//               }`}
//             ></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
//   );
// };

// export default About;