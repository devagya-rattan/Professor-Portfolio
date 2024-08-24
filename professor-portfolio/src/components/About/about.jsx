import React from 'react';
import imageone from  "../../Images/Aunvermaiithomepagestage.jpeg";
import arunsir from "../../Images/arunsir.jpeg";
import "./About.css";
function About() {
  return (
    <>
      <div className=' pt-px height w-full'>

        {/* div 1 is about Arun Verma little description  pl-40 pr-40 will be added during texts*/}
       <div className=' w-full flex flex-row pt-5 h-64 lg:h-96 md:h-80 sm:h-72  items-center ' > 
        <div className='justify-center  h-80 w-2/4 pl-3 pt-20  lg:pl-40  md:pl-20 sm:pl-10'>
          <h1 className=' texting text-xl lg:text-6xl md:text-4xl sm:text-3xl font-semibold'>About Arun </h1>
          <p className='w-full texting text-xs lg:text-xl md:text-base sm:text-sm font-medium'>Associate Professor <br />Electrical Engineering <br />Indian Institute of Technology, Jammu </p>
        </div>
        <div className='pl-5 lg:pl-5 md:pl-10  w-2/4'>
          <img src={imageone} alt="About" className='h-40 w-11/12 lg:h-80 md:h-52 sm:h-44 lg:w-4/5 md:w-4/5 sm:w-9/12 rounded-2xl' />
        </div >
       </div>
      {/* div 2 is for text and about Arun Verma */}
      <div className='flex flex-col lg:flex-row w-full justify-center h-auto bg-black items-center px-5 lg:px-40 py-10'>
          <div className='w-full lg:w-2/4 mb-5 lg:mb-0'>
            <p className='texting text-base text-white'>
              Dr. Arun Kumar Verma is a distinguished academic and researcher with profound expertise in power electronics and renewable energy systems. He earned his master’s and Ph.D. degrees from the Indian Institute of Technology (IIT) Delhi, New Delhi, India. Over the years, Dr. Verma has held several prestigious positions across the globe, including serving as a visiting professor at Ontario Tech University, Oshawa, Ontario, Canada, in 2024. He has also been a post-doctoral research fellow at the Energy Research Institute (ERI@N) at Nanyang Technological University (NTU) Singapore from 2015 to 2016, and a visiting graduate researcher at the Smart Grid Energy Research Center (SMERC) at the University of California Los Angeles (UCLA) from 2014 to 2015. Dr. Verma has been recognized with numerous awards for his contributions to solar energy and power systems, including the prestigious BASE fellowship for advanced solar energy research in 2014 and the POSOCO Power System Research Award in 2016. He is also a recipient of the SERB SIRE fellowship. <br />

              Dr. Verma’s research interests are diverse and impactful, focusing on power electronics, converters for renewable energy and electric vehicle (EV) chargers, bi-directional power flow, and electric transportation. In addition to his research, he actively contributes to the academic community as a guest editor for the IET Power Electronics special issue, an assistant editor for the Smart Grid Journal, and a member of the editorial board for the EPE Journal. His extensive experience and dedication to advancing knowledge in energy systems make him a valuable asset to the Department of Electrical Engineering at the Indian Institute of Technology, Jammu, where he currently serves as an Associate Professor.
            </p>
          </div>
          <div className='flex justify-center w-full lg:w-2/4'>
            <img
              src={arunsir}
              alt="Arun Kumar Verma"
              className='h-5/6 w-4/6 rounded-2xl'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;



// {/* <div className="flex items-center">
// {/* Horizontal Dotted Line */}
// <div className="w-[60px] h-1 border-b-2 border-dotted border-black"></div>

// {/* Vertical Dotted Line */}
// <div className="h-[5px] w-1 border-l-2 border-dotted border-black ml-[2px]"></div>
// </div> */}



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
//           <div className={`w-5/12 ${index % 2 === 0 ? "pl-20" : "pr-20"}`}>
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
