import React, { useState, useEffect } from "react";
import { PuffLoader } from "react-spinners";
import publicationpng from "../../Images/addpublication.png";
import blogpng from "../../Images/addblog.png";
<<<<<<< HEAD
import internpng from "../../Images/addintern.png";
import "./Profile.css";
import { useSelector } from "react-redux";
=======
import internpng from "../../Images/addintern.png"
import Profilepng from "../../Images/Aunvermaiithomepage.png"
import './Profile.css';

>>>>>>> main
function Profile() {
  const [activeForm, setActiveForm] = useState(null);
  const userData = useSelector((state) => state);
  console.log(userData);
  const handleFormClose = () => {
    setActiveForm(null);
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div className=" flex flex-col justify-center items-center h-screen w-full">
        <PuffLoader color="#000000" size={100} />
      </div>
    );
  return (
    <div className="min-h-screen bg-white flex flex-col sm:flex-row my-1">
      {/* Left side: Profile Information */}
      <div className="w-full sm:w-1/3 bg-white shadow-lg p-6 flex flex-col items-center">
        <img
          src={Profilepng}
          alt="Profile"
          className="w-150 h-150 rounded-full object-cover mt-8 mb-4"
        />
<<<<<<< HEAD
        <h2 className="text-xl font-semibold text-gray-800 texting">
          John Doe
        </h2>
        <p className="text-gray-600 mb-8 texting">john.doe@example.com</p>
=======
        <h2 className="text-4xl font-semibold text-black texting">Arun Kumar Verma</h2>
        <p className="text-black mb-8 texting">arun.verma@iitjammu.ac.in<br/>arunverma59@gmail.com</p>
>>>>>>> main
        <button className="texting bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black hover:ring-2 hover:ring-black transition">
          Change Password
        </button>
      </div>

      {/* Right side: Menu Options and Forms */}
      <div className="w-full sm:w-2/3 bg-black shadow-lg p-10 mt-6 sm:mt-0 ">
        {activeForm === null && (
          <div>
            <h3 className="flex texting items-center justify-center text-4xl font-bold text-white mb-4">
              Menu
            </h3>
            <ul className="flex flex-col items-center justify-center space-y-10">
              <img
                src={publicationpng}
                alt="Publications"
                className="h-36 sm:w-2/4 lg:2/3 bg-white shadow-lg shadow-white rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-white"
                onClick={() => setActiveForm("publications")}
              />

              <img
                src={blogpng}
                alt="Blog"
               className="h-36 sm:w-2/4 lg:2/3 bg-white shadow-lg shadow-white rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-white"
                onClick={() => setActiveForm("blog")}
              />
              <img
                src={internpng}
                alt="Intern"
                 className="h-36 sm:w-2/4 lg:2/3 bg-white shadow-lg shadow-white rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-white"
                onClick={() => setActiveForm("intern")}
              />
            </ul>
          </div>
        )}

        {/* Add Publications Form */}
        {activeForm === "publications" && (
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl texting font-bold text-white mb-4">
                Add Publications
              </h3>
              <button
                className="text-3xl text-white  hover:text-white hover:scale-105 transition"
                onClick={handleFormClose}
              >
                &#10005;
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block pb-4 text-white">Photo</label>
                <input
                  type="file"
                  className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:opacity-40 "
                />
              </div>
              <div className="mb-4">
                <label className="block texting text-white">Title</label>
                <input
                  type="text"
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter the title"
                />
              </div>
              <div className="mb-4">
<<<<<<< HEAD
                <label className="block texting text-gray-700">
                  Short Description
                </label>
=======
                <label className="block texting text-white">Short Description</label>
>>>>>>> main
                <textarea
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter a short description"
                />
              </div>
              <div className="mb-4">
<<<<<<< HEAD
                <label className="block texting text-gray-700">
                  Long Description
                </label>
=======
                <label className="block texting text-white">Long Description</label>
>>>>>>> main
                <textarea
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter a long description"
                  rows="5"
                />
              </div>
              <button
                type="submit"
                className="bg-white texting text-black px-4 py-2 rounded hover:opacity-40 transition"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        {/* Add Blog Form */}
        {activeForm === "blog" && (
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl texting font-bold text-white mb-4">
                Add Blog
              </h3>
              <button
                className="text-gray-500 hover:text-white transition"
                onClick={handleFormClose}
              >
                &#10005;
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-white">Photo</label>
                <input
                  type="file"
<<<<<<< HEAD
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-white hover:file:text-black hover:file:ring-2 hover:file:ring-black"
=======
                   className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:opacity-40 "
>>>>>>> main
                />
              </div>
              <div className="mb-4">
                <label className="block texting text-white">Title</label>
                <input
                  type="text"
                  className="mt-2 p-2 border texting border-gray-300 rounded w-full"
                  placeholder="Enter the title"
                />
              </div>
              <div className="mb-4">
<<<<<<< HEAD
                <label className="block texting text-gray-700">
                  Long Description
                </label>
=======
                <label className="block texting text-white">Long Description</label>
>>>>>>> main
                <textarea
                  className="mt-2 p-2 border texting border-gray-300 rounded w-full"
                  placeholder="Enter a long description"
                  rows="5"
                />
              </div>
              <button
                type="submit"
                 className="bg-white texting text-black px-4 py-2 rounded hover:opacity-40 transition"
              >
                Submit
              </button>
            </form>
          </div>
        )}

        {/* Add Intern Form */}
        {activeForm === "intern" && (
          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Add Intern
              </h3>
              <button
                className="text-gray-500 hover:text-white transition"
                onClick={handleFormClose}
              >
                &#10005;
              </button>
            </div>
            <form>
              <div className="mb-4">
                <label className="block text-white">Photo</label>
                <input
                  type="file"
<<<<<<< HEAD
                  className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-black file:text-white hover:file:bg-white hover:file:text-black hover:file:ring-2 hover:file:ring-black"
=======
                   className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:opacity-40 "
>>>>>>> main
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">Name</label>
                <input
                  type="text"
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter the intern's name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-white">Description</label>
                <textarea
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                  placeholder="Describe the intern"
                  rows="5"
                />
              </div>
              <button
                type="submit"
                 className="bg-white texting text-black px-4 py-2 rounded hover:opacity-40 transition"
              >
                Submit
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;
