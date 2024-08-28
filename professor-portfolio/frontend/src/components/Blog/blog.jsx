import React, { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";

function Blog() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <PuffLoader color="#000000" size={100} />
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="bg-black text-white font-bold p-4 mb-4">
        Latest Blog Posts
      </div>
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="divide-y divide-black m-2 ml-4 mr-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black text-center">
              {/* Replace with the blog title */}
              Sample Blog Title
            </h2>
            <p className="text-xs sm:text-sm text-gray-600 mt-2 sm:mt-4 text-center">
              {/* Replace with the blog author */}
              Arun Kumar Verma
            </p>
          </div>
          <div className="mt-4 rounded-lg overflow-hidden">
            <img
              src="https://via.placeholder.com/600x300"
              alt="Blog related visual"
              className="w-full h-32 sm:h-48 md:h-64 object-cover"
            />
          </div>
          <p className="text-sm sm:text-base text-gray-700 mt-4 leading-relaxed">
            {/* Replace with the blog content */}
            This is a sample blog post description. Replace this text with the
            content of the blog. The description can be as detailed as you want
            it to be.
          </p>
          <div className="mt-6 flex justify-center">
            <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black hover:ring-2 hover:ring-black transition">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
