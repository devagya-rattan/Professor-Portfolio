import React, { useState } from "react";
import Profilepng from "../../Images/Aunvermaiithomepage.png";
import './Profile.css';

function Profile() {
  const [activeForm, setActiveForm] = useState(null);

  const handleFormClose = () => {
    setActiveForm(null);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col sm:flex-row my-1">
      {/* Left side: Profile Information */}
      <div className="w-full sm:w-1/3 bg-white shadow-lg p-6 flex flex-col items-center">
        <img
          src={Profilepng}
          alt="Profile"
          className="w-150 h-150 rounded-full object-cover mt-8 mb-4"
        />
        <h2 className="text-4xl font-semibold text-black texting">Arun Kumar Verma</h2>
        <p className="text-black mb-8 texting">arun.verma@iitjammu.ac.in<br />arunverma59@gmail.com</p>
        <button className="texting bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black hover:ring-2 hover:ring-black transition">
          Change Password
        </button>
      </div>

      {/* Right side: Menu Options and Forms */}
      <div className="w-full sm:w-2/3 bg-black shadow-lg p-10 mt-6 sm:mt-0">
        {activeForm === null && (
          <div>
            <h3 className="flex texting items-center justify-center text-4xl font-bold text-white mb-4">
              Menu
            </h3>
            <ul className="flex flex-col items-center justify-center space-y-10">
              <button
                className="h-36 sm:w-2/4 lg:w-2/3 bg-white shadow-lg shadow-white rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-white"
                onClick={() => setActiveForm("publications")}
              >
                <span className="text-2xl text-black font-bold">Add Publication</span>
              </button>

              <button
                className="h-36 sm:w-2/4 lg:w-2/3 bg-white shadow-lg shadow-white rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-white"
                onClick={() => setActiveForm("blog")}
              >
                <span className="text-2xl text-black font-bold">Add Blog</span>
              </button>

              <button
                className="h-36 sm:w-2/4 lg:w-2/3 bg-white shadow-lg shadow-white rounded-lg cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-white"
                onClick={() => setActiveForm("intern")}
              >
                <span className="text-2xl text-black font-bold">Add Intern</span>
              </button>
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
                className="text-3xl text-white hover:text-white hover:scale-105 transition"
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
                  className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:opacity-40"
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
              {/* Category and Publication Date on the Same Line */}
              <div className="mb-4 flex flex-col lg:flex-row gap-4">
                <div className="flex-grow">
                  <label className="block texting text-white">Category</label>
                  <select
                    className="mt-2 p-2 border border-gray-300 rounded w-full"
                  >
                    <option value="">Select a category</option>
                    <option value="Research">Research</option>
                    <option value="Review">Review</option>
                    <option value="Case Study">Case Study</option>
                    <option value="Others">Others</option>
                  </select>
                </div>
                <div className="flex-grow">
                  <label className="block texting text-white">Publication Date</label>
                  <input
                    type="date"
                    className="mt-2 p-2 border border-gray-300 rounded w-full"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block texting text-white">Short Description</label>
                <textarea
                  className="mt-2 p-2 border border-gray-300 rounded w-full"
                  placeholder="Enter a short description"
                />
              </div>
              <div className="mb-4">
                <label className="block texting text-white">Long Description</label>
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
                  className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:opacity-40"
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
                <label className="block texting text-white">Long Description</label>
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
                  className="block w-full text-sm text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white file:text-black hover:file:opacity-40"
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
                  placeholder="Enter a description"
                  rows="5"
                />
              </div>
              <button
                type="submit"
                className="bg-white text-black px-4 py-2 rounded hover:opacity-40 transition"
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
