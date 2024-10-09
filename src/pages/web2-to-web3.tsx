import { FaArrowLeft, FaSearch, FaBook } from 'react-icons/fa';


export default function Web2ToWeb3() {
  return (
    <>
        <div className=" bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Morlabs Docs</h1> 
          <div className="relative">
           <input
            type="text"
            placeholder="Search Morlabs Docs"
            className="border border-gray-300 rounded-lg p-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 w-96"
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
        </div>

          <div className="flex items-center space-x-2">
           <a href="/dic-assistant"> <button className="border p-2 rounded-md"><FaBook className="text-gray-500 text-2xl" /></button>
           </a>
          </div>
        </div>


    <div className="min-h-screen bg-gray-100 text-gray-800">

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white p-4 shadow ">
          <nav>
            <ul>
            <div className="flex items-center mb-4">
          <FaArrowLeft className="text-lg text-gray-600" />
          <span className="ml-2 text-sm text-gray-600 font-semibold cursor-pointer">Back</span>
          </div>
          <li className="mb-2">
          <p className="text-lg font-semibold">Web2-to-Web3</p>
          </li>
              <li className="mb-2">
              <a href="#" className="flex items-center text-gray-800 font-semibold">
                    <div className="w-1 h-4 bg-green-500 mr-2"></div>
                    Web2-to-Web3
                  </a>
                
              </li>
            </ul>
          </nav>
        </aside>

        {/* Content */}
        <main className="w-2/4 bg-white p-8 overflow-y-auto">
        <p className="text-sm text-gray-500 mb-1 pb-4">
                <span className="text-gray-700 font-medium">Morlabs Packages</span> /
              </p>
          <h1 className="text-3xl font-semibold mb-4">Quickstart for Web2-to-Web3</h1>
          <h2 className="text-lg text-gray-700 mb-4">Get Started in Web3</h2>
          
          <section>
            <h3 className="text-xl font-semibold mb-2">Introduction</h3>
            <p className="text-gray-700 mb-4">
              The advent of Web3 has ushered in a new era of decentralized applications (dApps) that promise to revolutionize how we interact with the internet...
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">Understanding the Fundamentals of Web3</h3>
            <ul className="list-disc ml-8">
              <li className="mb-2"><strong>Decentralization:</strong> Unlike Web2, where centralized authorities control data and platforms...</li>
              <li className="mb-2"><strong>Blockchain:</strong> A blockchain is a distributed ledger...</li>
              <li className="mb-2"><strong>Smart Contracts:</strong> These are self-executing contracts...</li>
              <li className="mb-2"><strong>Tokens:</strong> Tokens represent digital assets...</li>
            </ul>
          </section>
        </main>

        {/* Sidebar with Article Navigation */}
        <aside className="w-1/4 bg-white p-4 shadow">
          <h3 className="text-xl font-semibold mb-4">In this article</h3>
          <ul className="list-none">
            <li className="mb-2"><a href="#" className="text-indigo-600">Introduction</a></li>
            <li className="mb-2"><a href="#" className="text-indigo-600">Understanding Web3</a></li>
            <li className="mb-2"><a href="#" className="text-indigo-600">Essential Tools</a></li>
            <li className="mb-2"><a href="#" className="text-indigo-600">Monetization Strategies</a></li>
            <li className="mb-2"><a href="#" className="text-indigo-600">Conclusion</a></li>
          </ul>
        </aside>
      </div>
    </div>
    </>
  );
}
