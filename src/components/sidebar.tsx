import React from "react";

const sidebar = () => {
  return (
    <nav className="w-64 bg-gray-800 text-white h-screen">
      <ul className="p-4 space-y-4">
        <li>
          <a href="#morlabs" className="hover:text-blue-400">
            Morlabs API
          </a>
        </li>
        <li>
          <a href="#api-doc-template" className="hover:text-blue-400">
            API Documentation Templates
          </a>
        </li>
        <li>
          <a href="#solana" className="hover:text-blue-400">
            Solana Integration
          </a>
        </li>
        <li>
          <a href="#sandbox" className="hover:text-blue-400">
            Sandbox/Test Environment
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default sidebar;
