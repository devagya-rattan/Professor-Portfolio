import React from "react";

function Contact() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6">
      <div className="bg-black text-white font-bold p-4 mb-4 text-center">
        Contact Us
      </div>
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <div className="divide-y divide-black m-2 ml-4 mr-4">
            <h2 className="text-xl sm:text-2xl font-bold text-black text-center">
              Get in Touch
            </h2>
            <p className="text-sm sm:text-base text-gray-700 mt-4 text-center">
              We would love to hear from you! Please fill out the form below and
              we will get in touch with you as soon as possible.
            </p>
          </div>
          <form className="mt-6">
            <div className="mb-4">
              <label className="block texting text-black">Name</label>
              <input
                type="text"
                className="mt-2 p-2 border texting border-gray-300 rounded w-full"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block texting text-black">Email</label>
              <input
                type="email"
                className="mt-2 p-2 border texting border-gray-300 rounded w-full"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block texting text-black">Message</label>
              <textarea
                className="mt-2 p-2 border texting border-gray-300 rounded w-full"
                placeholder="Enter your message"
                rows="5"
              />
            </div>
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="bg-black texting text-white px-6 py-2 rounded-lg hover:bg-white hover:text-black hover:ring-2 hover:ring-black transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
