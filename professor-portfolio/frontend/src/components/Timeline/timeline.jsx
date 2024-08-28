import React from "react";
import "./Timeline.css";

const Timeline = () => {
    return (
        <>
            <div className="hscreen  w-full  texting ">

            <div className="xl:h-80 lg:h-80 h-80 mb-4 bg-teal-100  text-center w-full">
                    <h1 className="lg:text-7xl md:text-6xl sm:text-5xl text-4xl font-extrabold  texting sm:pt-5 pt-2 ">Education</h1>
                    <p className=" xl:pt-8 lg:pt-6 md:pt-5 pt-2  texting text-base sm:text-xl  xl:px-80 lg:px-60 md:px-30 sm:px-20 px-8">Dr. Arun Kumar Verma holds a Ph.D. in Electrical Engineering from IIT Delhi, completed in May 2015. He also earned his Master of Technology (MTech) in Energy Studies from IIT Delhi, and a Bachelor of Engineering (B.E.) in Electrical Engineering from DCRUST Murthal.</p>
                    <p></p>
                </div>
               
                <div className="flex     mt-2 w-full hieet h-2/4">
                    <div className="w-2/4   flex flex-col ">
                        <div className="flex  xl:mt-6 lg:mt-5 md:mt-4 mt-2 flex-row">
                            <div className="flex w-11/12     flex-col text-end ">
                               
                                <div className="lg:text-xl sm:text-base text-xs text-end">Bachelor of Engineering</div>
                                <div className="lg:text-xl sm:text-base text-xs text-end">Electrical Engineering </div>
                                <div className="lg:text-xl sm:text-base text-xs text-end">DCRUST Murthal</div>
                            </div>
                            <div className="w-1/12 flex items-center "> <div className="sm:w-full w-20   h-1 border-b-2 border-dotted border-black"></div>
                                <div className="bg-black h-2  w-2 rounded-sm"></div></div>
                        </div>


                       
                       
                        <div className="flex  mt-36 flex-row">
                            <div className="flex w-11/12     flex-col text-end ">
                           
                                <div className="lg:text-xl sm:text-base text-xs  text-end ">Ph.D. Electrical Engineering  </div>
                                <div className="lg:text-xl sm:text-base text-xs text-end">Indian Institute of Technology Delhi</div>
                              
                               
                                
                            </div>
                            <div className="w-1/12 flex items-center "> <div className="sm:w-full w-20   h-1 border-b-2 border-dotted border-black"></div>
                                <div className="bg-black h-2  w-2 rounded-sm"></div></div>
                        </div>
                        
                    </div>
                    <div className='block w-0.5 h-full bg-black'></div>

                    {/* 2nd col */}
                    <div className="w-2/4  flex flex-col">
                        <div className="flex mt-32  flex-row">
                            <div className="w-1/12 flex items-center ">
                                <div className="bg-black h-2  w-2 rounded-sm"></div>
                                <div className="sm:w-full w-20   h-1 border-b-2 border-dotted border-black"></div>
                            </div>
                            <div className="flex w-11/12     flex-col text-start ">
                                
                                <div className="lg:text-xl sm:text-base text-xs text-start">Master of Technology</div>
                                <div className="lg:text-xl sm:text-base text-xs text-start">Energy Studies</div>
                                <div className="lg:text-xl sm:text-base text-xs text-start">Indian Institute of Technology Delhi </div>
                            </div>

                        </div>

                       

                  
                       

                    </div>
                </div>

            </div>
        </>
    );
};
export default Timeline;




// {/* <div className="flex items-center">
// {/* Horizontal Dotted Line */}
// <div className="w-[60px] h-1 border-b-2 border-dotted border-black"></div>

// {/* Vertical Dotted Line */}
// <div className="h-[5px] w-1 border-l-2 border-dotted border-black ml-[2px]"></div>
// </div> */}