import React from 'react';
import { useState } from 'react';
// import "../styles/globals.css";
import { FixedPlugin } from '@/components';
import { FaArrowLeft } from 'react-icons/fa';
// import Navbar from "../components/navbar";

const guide: React.FC = () => {

  const Sidebar = () => {
    return (
      <nav className="w-1/5 bg-gray-100 h-screen p-5">
        <div className="mb-3">
          <span className="text-4xl" style={{ color: "#00FF99" }}>
            m
          </span>{" "}<a href="#" className="text-xl font-bold text-black">morlabs</a>
        </div>

        <div className="flex items-center mb-4">
          <FaArrowLeft className="text-lg text-gray-600" />
          <span className="ml-2 text-sm text-gray-600 font-semibold cursor-pointer">Home</span>
          </div>

        <div className="mb-4">
          <a href="#" className="block text-xl font-bold text-black">Morlabs Packages</a>
        </div>
        <ul className="p-4 space-y-4">
          <li>
            <a href="#Quick" className="block text-sm text-gray-700 hover:text-green-600">Quickstart</a>
          </li>
          <li>
            <a href="#learn" className="block text-sm text-gray-700 hover:text-green-600">Learn Morlabs Packages</a>
          </li>
          <li>
            <a href="#Quick" className="block text-sm text-gray-700 hover:text-green-600">Working with a Morlabs Packages registry</a>
          </li>
          <li>
            <a href="Quick" className="block text-sm text-gray-700 hover:text-green-600">Managing Morlabs packages with workflows</a>
          </li>
          <li>
            <a href="#morlabs" className="block text-sm text-gray-700 hover:text-green-600">
              Morlabs API
            </a>
          </li>
          <li>
            <a href="#api-doc-template" className="block text-sm text-gray-700 hover:text-green-600">
              API Documentation Templates
            </a>
          </li>
          <li>
            <a href="#solana" className="block text-sm text-gray-700 hover:text-green-600">
              Solana Integration
            </a>
          </li>
          <li>
            <a href="#sandbox" className="block text-sm text-gray-700 hover:text-green-600">
              Sandbox/Test Environment
            </a>
          </li>
        </ul>
      </nav>
    );
  };


  const Header = () => {
    return (
      <header className="header bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Morlabs Docs</h1>
        <input
          type="text"
          placeholder="Search Morlabs Docs"
          className="border p-2 rounded-md w-1/3"
        />
        <div className="flex items-center space-x-2">
          <button className="border p-2 rounded-md">Language</button>
        </div>
      </header>
    );
  };

  const Maincontent = () => {
    return (
      <div className="flex-1 p-8 overflow-y-auto h-screen">
        <p className="text-sm text-gray-500 mb-1 pb-4">
                <span className="text-gray-700 font-medium">Morlabs Packages</span> /
              </p>
        <section id="Quick" className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Quickstart for Morlabs Packages</h2>
          <h3 className="text-xl mb-2">Publish to Morlabs Packages</h3>
          <p className="mb-4">
            In this guide, you&apos;ll create a Morlabs Actions workflow to test your code and then publish it to Morlabs Packages.
          </p>
        </section>

        <section id="learn" className="mb-12">

          <h3 className="text-xl mb-2">Publishing your package</h3>
          <p>
            In this guide, you&apos;ll create a Morlabs Actions workflow to test your code and then publish it to Morlabs Packages.
          </p>
        </section>

        <h1 className="text-3xl font-bold mb-4">Developer Documentation</h1>

        {/* Morlabs API Documentation */}
        <section id="morlabs" className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Morlabs API</h2>
          <p className="mb-4">
            Explore the various APIs offered by Morlabs to integrate with your
            application.
          </p>

          {/* Code Example */}
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium">Example Request</h3>
            <pre className="bg-gray-800 text-white p-4 rounded mt-2">
              {`
                    fetch("https://api.morlabs.com/v1/resource", {
                      method: "GET",
                      headers: {
                        "Authorization": "Bearer YOUR_TOKEN",
                      }
                    })
                    .then(response => response.json())
                    .then(data => console.log(data))
                    .catch(error => console.error(error));
                  `}
            </pre>
          </div>
        </section>

        {/* API Documentation Template Section */}
        <section id="api-doc-template" className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">
            API Documentation Templates
          </h2>
          <p className="mb-4">Guidelines for uploading API documentation.</p>

          <ul className="list-disc list-inside">
            <li>
              Ensure your endpoints are clearly documented with request/response
              formats.
            </li>
            <li>Provide example requests and responses in multiple languages.</li>
            <li>Use consistent naming conventions across your documentation.</li>
          </ul>
        </section>

        {/* Solana Integration Section */}
        <section id="solana" className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">Solana Integration</h2>
          <p className="mb-4">
            Special instructions for integrating with Solana&apos;s blockchain.
          </p>

          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-medium">Solana API Request</h3>
            <pre className="bg-gray-800 text-white p-4 rounded mt-2">
              {`
                    import { Connection, clusterApiUrl } from '@solana/web3.js';
      
                    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
      
                    connection.getBalance('<wallet_address>')
                      .then(balance => console.log(balance))
                      .catch(error => console.error(error));
                  `}
            </pre>
          </div>
        </section>

        {/* Sandbox/Test Environment Section */}
        <section id="sandbox" className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">
            Sandbox/Test Environment
          </h2>
          <p className="mb-4">
            You can use our test environment to try out API requests.
          </p>

          <a
            href="/sandbox"
            className="inline-block bg-green-800 text-white py-2 px-4 rounded hover:bg-green-500"
          >
            Access Sandbox Environment
          </a>
        </section>
      </div>
    );
  };

  return (
    <>
      <div>
        {/* <Navbar/> */}

        <div className="flex h-screen">
          <Sidebar />
          <div className="flex flex-col flex-1">
            <Header />
            <Maincontent />
          </div>
        </div>
      </div>
      <FixedPlugin />
    </>
  );
};

export default guide;




