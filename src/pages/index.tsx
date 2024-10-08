// components
import { Navbar, Footer, APISection } from "@/components";
import { FixedPlugin } from "@/components";
import { FaNetworkWired, FaLock, FaUserShield, FaFileContract, FaRocket, FaListAlt, FaSearch, FaFlask } from "react-icons/fa";
import { FaEthereum, FaBitcoin } from 'react-icons/fa';
import { SiSolana, SiPolkadot, SiChainlink } from 'react-icons/si';

// sections
import { default as Hero } from "./hero";

import VideoIntro from "./get-started";
import Feature from "./feature";
import Testimonials from "./testimonials";
// import Faqs from "./faqs";

// export default function Campaign() {
export default function Home() {
  const providers = [
    { name: 'Ethereum', icon: <FaEthereum />, link: '#ethereum' },
    { name: 'Solana', icon: <SiSolana />, link: '#solana' },
    { name: 'Polkadot', icon: <SiPolkadot />, link: '#polkadot' },
    { name: 'Chainlink', icon: <SiChainlink />, link: '#chainlink' },
    { name: 'Bitcoin', icon: <FaBitcoin />, link: '#bitcoin' },
  ];
  return (
    <>
      <div className="bg-[radial-gradient(circle_at_top,_#4ade80,_black_60%)] min-h-screen">
        <Navbar />
        <Hero />
      </div>
      <div className="bg-gradient-to-b from-black to-black min-h-screen">
        <Feature />



        <div className="flex flex-col items-center py-10">
          <h2 className="text-3xl font-bold mb-6 text-white py-5">Simplifying the integration of APIs into Web3 projects</h2>
          {/* <div className="grid grid-cols-1 md:grid-cols-5 gap-8"> */}


          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            <div className="flex flex-col items-center border border-gray-600 rounded-lg py-6 px-12">
              <span className="text-3xl font-bold text-green-400">1000+</span>
              <span className="text-lg text-gray-400">users per month</span>
            </div>
            <div className="flex flex-col items-center bg-gradient-to-t from-purple-500 to-green-500 rounded-lg py-6 px-12 mb-12">
              <span className="text-3xl font-bold text-white">92%</span>
              <span className="text-lg text-gray-200">
                of users are satisfied with the platform
              </span>
            </div>
            <div className="flex flex-col items-center border border-gray-600 rounded-lg py-6 px-12">
              <span className="text-3xl font-bold text-green-400">5000+</span>
              <span className="text-lg text-gray-400">waiting hours reduced</span>
            </div>
            {/* </div> */}



            {/* {providers.map((provider, index) => (
          <div
            key={index}
            className="bg-green-500 hover:bg-green-900 p-6 rounded-lg text-center transition-colors duration-300 ease-in-out"
          >
            <div className="text-4xl mb-4 text-white flex justify-center">
              {provider.icon}
            </div>
            <p className="text-lg text-white font-bold">+{provider.name}</p>
          </div>
        ))} */}
          </div>
        </div>


        <APISection />
        <VideoIntro />
        <Testimonials />
        <Footer />
        <FixedPlugin />
      </div>

    </>
  );
}
