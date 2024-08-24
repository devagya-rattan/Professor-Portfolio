import React from "react";

function Publications() {
  return (
    <>
    <div></div>
      <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
        <div className="bg-black text-white font-bold p-4 mb-4">Recent activities</div>
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <div className="divide-y divide-black m-2 ml-4 mr-4">
              <h2 className="text-xl sm:text-2xl font-bold text-black text-center">
                Rhodium(II)-Catalyzed Alkynyl Carbene Insertion into N–H Bonds
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-4 text-center">
                Akashdeep Sharma, Himani Vaid, Riya Kotwal, Zuhaib N. Mughal,
                and Ramani Gurubrahamam*
              </p>
            </div>
            <div className="mt-4 rounded-lg overflow-hidden">
              <img
                src="https://i.imgur.com/6Q8x6Q8.jpg"
                alt="Chemical reaction diagram"
                className="w-full h-32 sm:h-48 md:h-64 object-cover"
              />
            </div>
            <p className="text-sm sm:text-base text-gray-700 mt-4 leading-relaxed">
              The first insertion of an alkynyl carbene into N–H bonds under
              Rh-catalysis is developed. Alkynyl hydrazone carboxylates are used
              as donor–acceptor carbene precursors and are exquisitely inserted
              into the N–H bonds of various amines, amides, and 1,2-diamines. A
              wide variety of 3-alkynyl 3,4-dihydroquinoxalin-2(1H)-ones and
              densely functionalized α-alkynyl α-amino esters are obtained in
              good to excellent yields. Further, chemoselective N–H insertion
              reactions, mechanistic studies, and various synthetic
              transformations for obtaining valuable heterocycles are
              demonstrated.
            </p>
            <div className="mt-6 flex justify-center">
              <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black hover:ring-2 hover:ring-black transition">
                Read the Paper
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Publications;
