import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import imageone from "../../Images/Aunvermaiithomepagestage.jpeg";

import arunsir from "../../Images/arunsir.jpeg";
import "./About.css";

const Head = () => {
    // Initialize AOS with adjusted duration for slower animation
  useEffect(() => {
    AOS.init({
      duration: 3000, // Increased duration for a slower fade effect
      offset: 10, // Offset from the original trigger point
      easing: 'ease-out', // Easing function for the animations
      once: false, // Animation should happen only once
    });
  }, []);

    return(
<>
<div className='w-full flex flex-row pt-5 h-64 lg:h-96 md:h-80 sm:h-72 items-center'>
          <div className='justify-center h-80 w-2/4 pl-3 pt-20 lg:pl-40 md:pl-20 sm:pl-10'>
            <h1 className='texting text-xl lg:text-6xl md:text-4xl sm:text-3xl font-semibold'>About Arun</h1>
            <p className='w-full texting text-xs lg:text-xl md:text-base sm:text-sm font-medium'>
              Associate Professor <br />Electrical Engineering <br />Indian Institute of Technology, Jammu
            </p>
          </div>
          <div className='pl-5 lg:pl-5 md:pl-10 w-2/4'>
            <img
              src={imageone}
              alt="About"
              className='h-40 w-11/12 lg:h-80 md:h-52 sm:h-44 lg:w-4/5 md:w-4/5 sm:w-9/12 rounded-2xl'
            />
          </div>
        </div>
        <div className='flex flex-col lg:flex-row w-full justify-center h-auto bg-black items-center px-5 lg:px-40 py-10 mb-1'>
          <div className='w-full lg:w-2/4 mb-5 lg:mb-0' data-aos="fade-left">
            <p className='texting text-base text-white'>
              Dr. Arun Kumar Verma is a distinguished academic and researcher with profound expertise in power electronics and renewable energy systems. He earned his master’s and Ph.D. degrees from the Indian Institute of Technology (IIT) Delhi, New Delhi, India. Over the years, Dr. Verma has held several prestigious positions across the globe, including serving as a visiting professor at Ontario Tech University, Oshawa, Ontario, Canada, in 2024. He has also been a post-doctoral research fellow at the Energy Research Institute (ERI@N) at Nanyang Technological University (NTU) Singapore from 2015 to 2016, and a visiting graduate researcher at the Smart Grid Energy Research Center (SMERC) at the University of California Los Angeles (UCLA) from 2014 to 2015. Dr. Verma has been recognized with numerous awards for his contributions to solar energy and power systems, including the prestigious BASE fellowship for advanced solar energy research in 2014 and the POSOCO Power System Research Award in 2016. He is also a recipient of the SERB SIRE fellowship.
              <br /><br />
              Dr. Verma’s research interests are diverse and impactful, focusing on power electronics, converters for renewable energy and electric vehicle (EV) chargers, bi-directional power flow, and electric transportation. In addition to his research, he actively contributes to the academic community as a guest editor for the IET Power Electronics special issue, an assistant editor for the Smart Grid Journal, and a member of the editorial board for the EPE Journal. His extensive experience and dedication to advancing knowledge in energy systems make him a valuable asset to the Department of Electrical Engineering at the Indian Institute of Technology, Jammu, where he currently serves as an Associate Professor.
            </p>
          </div>
          <div
            className='flex lg:pl-9 justify-center w-full lg:w-2/4'
            data-aos="fade-right"
            data-aos-duration="3000"
            data-aos-easing="ease-out"
          >
            <img
              src={arunsir}
              alt="Arun Kumar Verma"
              className='h-5/6 w-4/6 rounded-2xl'
            />
          </div>
        </div>
</>
    );
}
export default Head;