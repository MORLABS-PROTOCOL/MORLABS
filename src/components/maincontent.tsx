import React from "react";

const maincontent = () => {
  return (
    <div className="flex-1 p-8 overflow-y-auto h-screen">
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
          Special instructions for integrating with Solana's blockchain.
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
          className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Access Sandbox Environment
        </a>
      </section>
    </div>
  );
};

export default maincontent;
