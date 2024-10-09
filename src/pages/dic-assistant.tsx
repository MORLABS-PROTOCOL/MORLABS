import React from 'react';
import { RiSendPlaneFill } from 'react-icons/ri';

const Web3Assistant = () => {
  return (
    <>
    <div className="flex justify-center mt-3">
          {/* <img src="/image/morlab-logo.jpg" alt="Logo" className="h-16 w-16" /> */}
          <span className="text-4xl font-bold" style={{ color: "#00FF99" }}>
            m
          </span>{" "}<a href="#" className="text-xl font-bold text-black">morlabs</a>
        </div>
    <div className="flex justify-center items-center h-screen bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl relative">
        {/* Close Button */}
        <button className="btn btn-sm btn-circle absolute right-2 top-2">
          ✕
        </button>

        {/* Header */}
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl">✨ Web3 AI Assistant</h2>

          {/* Main Greeting */}
          <div className="mt-4">
            <h3 className="text-2xl font-bold">Hello Dandy 👋</h3>
            <p className="text-gray-500 mt-2">
              What would you like to know about Web3, today?
            </p>
          </div>

          {/* Input Field */}
          <div className="form-control mt-4">
            <div className="input-group relative">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="input input-bordered w-full pr-12"
              />
              <button className="btn absolute right-0 top-0 rounded-l-none bg-green-500 border-green-500">
                <RiSendPlaneFill className="h-5 w-5 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Web3Assistant;
