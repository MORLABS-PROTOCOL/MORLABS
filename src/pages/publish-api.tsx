import { Button, Typography } from "@material-tailwind/react";
// import "../styles/globals.css";
import { FaArrowRight, FaRegHandPointRight } from 'react-icons/fa';
import { FaDatabase, FaEthereum, FaCube, FaFire, FaServer, FaCloud } from 'react-icons/fa';
import { FaWallet, FaStream } from 'react-icons/fa';
import { GiMoneyStack } from 'react-icons/gi';
import { MdInsights } from 'react-icons/md';
import { RiNftFill } from 'react-icons/ri';
import { SiBlockchaindotcom } from 'react-icons/si';

import Navbar from "../components/navbar";
import Hero from './hero';
import { FixedPlugin, Footer } from "@/components";
import Link from "next/link";

   

const APIPage: React.FC = () => {
  return (
    <>
    <Navbar />

    <div className="flex flex-col items-center justify-center text-center text-white h-screen bg-[radial-gradient(circle_at_top,_#4ade80,_black_60%)] min-h-screen">
      <header className="grid !min-h-[49rem] px-8">
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14">
          <div className="col-span-1">
            <Typography 
            variant="h1" 
            color="white" 
            className="text-5xl font-bold mb-4"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}>
            Your Gateway to Seamless <br />
            Web3 Integration
            </Typography>
            <Typography
              variant="lead"
              className="text-lg mb-8"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
            >
              Accelerate Your Web3 Journey: <br />Explore, Build, and Scale With Our API Directory
            </Typography>
        
            <div className="">
            <Link href="/guide" passHref>
            <button
            type="submit"
            className="p-2 border-t border-l border-r border-white bg-gree-500 text-white rounded hover:bg-green-900"
          >
            {/* className="px-6 py-3 bg-green-800 rounded-full hover:bg-green-600 transition duration-300 text-white"style={{ backgroundColor: "#00FF99" }} */}
            View Docs
          </button>
          </Link>
          </div>
          </div>    
            
        </div>
      </header>
      
    </div>


    {/* <Hero /> */}
    <div className="bg-black min-h-screen text-white px-8 py-12">
      {/* Top Section with Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {/* Card 1 - For Beginners */}
        <div className="bg-dark-800 p-6 rounded-lg">
          <div className="flex justify-between items-center">
            <h4 className="text-green-400">For Beginners</h4>
            <div className="text-green-400 text-2xl">{/* Icon */}</div>
          </div>
          <div className="h-32 bg-gray-700 mt-4 rounded-md flex items-center justify-center">
            <span className="text-gray-400">Image</span>
          </div>
          <p className="mt-4 text-lg">Beginner&apos;s Guide to APIs</p>
          <p className="text-gray-400">Infinite data access, precise filter controls.</p>
          <div className="mt-4 flex justify-end">
            <FaArrowRight className="text-green-400 text-xl" />
          </div>
        </div>

        {/* Card 2 - APIs */}
        <div className="bg-green-700 p-6 rounded-lg">
          <div className="flex justify-between items-center">
            <h4 className="text-green-200">APIs</h4>
            <div className="text-green-200 text-2xl">{/* Icon */}</div>
          </div>
          <div className="h-32 bg-gray-700 mt-4 rounded-md flex items-center justify-center">
            <span className="text-gray-400">Image</span>
          </div>
          <p className="mt-4 text-lg">What is the Solana API?</p>
          <p className="text-gray-200">Infinite data access, precise filter controls.</p>
          <div className="mt-4 flex justify-end items-center space-x-2">
            <FaArrowRight className="text-white text-xl" />
            <FaRegHandPointRight className="text-yellow-400 text-2xl" />
          </div>
        </div>

        {/* Card 3 - SDKs */}
        <div className="bg-dark-800 p-6 rounded-lg">
          <div className="flex justify-between items-center">
            <h4 className="text-green-400">SDKs</h4>
            <div className="text-green-400 text-2xl">{/* Icon */}</div>
          </div>
          <div className="h-32 bg-gray-700 mt-4 rounded-md flex items-center justify-center">
            <span className="text-gray-400">Image</span>
          </div>
          <p className="mt-4 text-lg">What is the Solana SDK?</p>
          <p className="text-gray-400">Infinite data access, precise filter controls.</p>
          <div className="mt-4 flex justify-end">
            <FaArrowRight className="text-green-400 text-xl" />
          </div>
        </div>
      </div>

      {/* Popular APIs Section */}
      {/* <section id="API"> */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Popular APIs</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-dark-800 p-6 rounded-lg">
        <div className="flex items-center">
        <FaWallet className="text-blue-500 text-2xl mr-4" />
          <h3 className="text-xl font-bold mb-2">Wallet API</h3>
          </div>
          <p className="text-gray-400">Get all the balances and transactions for a specific wallet address.</p>
        </div>

        <div className="bg-dark-800 p-6 rounded-lg">
        <div className="flex items-center">
        <RiNftFill className="text-purple-500 text-2xl mr-4" />
          <h3 className="text-xl font-bold mb-2">NFT API</h3>
           </div>
          <p className="text-gray-400">Summon all NFT transfers, prices, and metadata in real time.</p>
        </div>
      

        <div className="bg-dark-800 p-6 rounded-lg">
        <div className="flex items-center">
          <GiMoneyStack className="text-yellow-500 text-2xl mr-4" />
          <h3 className="text-xl font-bold mb-2">Token API</h3>
          </div>
          <p className="text-gray-400">Access all the information you need for any ERC20 tokens.</p>
        </div>

        <div className="bg-dark-800 p-6 rounded-lg">
        <div className="flex items-center">
        <FaStream className="text-blue-400 text-2xl mr-4" />
          <h3 className="text-xl font-bold mb-2">Streams API</h3>
          </div>
          <p className="text-gray-400">Receive blockchain data by listening to real-time on-chain events.</p>
        </div>
        

        <div className="bg-dark-800 p-6 rounded-lg">
        <div className="flex items-center">
          <MdInsights className="text-green-400 text-2xl mr-4" />
          <h3 className="text-xl font-bold">Market Insights API</h3>
          </div>
          <p className="text-gray-400">Explore the latest market trends for ERC20 tokens and NFTs.</p>
        </div>
        

        <div className="bg-dark-800 p-6 rounded-lg">
          <div className="flex items-center">
            <SiBlockchaindotcom className="text-green-400 text-2xl mr-4" />
            <h3 className="text-xl font-bold">Blockchain API</h3>
          </div>
            <p className="text-gray-400 mt-2">Get the Blocks, Transactions, and logs data of a blockchain.</p>
        </div>
      

      </div>


      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-4">
        <button className="px-3 py-1 bg-dark-800 rounded-md">Previous</button>
        <button className="px-3 py-1 bg-green-700 rounded-md">1</button>
        <button className="px-3 py-1 bg-dark-800 rounded-md">2</button>
        <button className="px-3 py-1 bg-dark-800 rounded-md">3</button>
        <button className="px-3 py-1 bg-dark-800 rounded-md">Next</button>
      </div>
    </div>
   


    <div className="bg-black min-h-screen text-white px-8 py-12">
      {/* Explore by Chain Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Explore by Chain</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-dark-800 p-6 rounded-lg">
            <div className="flex items-center">
              <FaCube className="text-blue-500 text-2xl mr-4" />
              <h3 className="text-xl font-bold">Solana API</h3>
              </div>
              <p className="text-gray-400">Fetch user and token from the Solana blockchain.</p>
            </div>
        

          <div className="bg-dark-800 p-6 rounded-lg">
            <div className="flex items-center">
            <FaEthereum className="text-blue-500 text-2xl mr-4" />
              <h3 className="text-xl font-bold">EVM API</h3>
              </div>
              <p className="text-gray-400">Get NFT, token, and transaction data from EVM chains.</p>
            </div>
        

          <div className="bg-dark-800 p-6 rounded-lg">
            <div className="flex items-center">
            <FaDatabase className="text-green-400 text-2xl mr-4" />
              <h3 className="text-xl font-bold">Aptos API</h3>
              </div>
              <p className="text-gray-400">Fetch user and token from the Aptos blockchain.</p>
            </div>
        </div>
      </div>
      

      {/* Integration Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Integration</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-dark-800 p-6 rounded-lg">
            <div className="flex items-center">
               <FaFire className="text-orange-400 text-2xl mr-4" />
              <h3 className="text-xl font-bold">Firebase</h3>
              </div>
              <p className="text-gray-400">Authenticate a user to your Firebase app with an EVM or Solana wallet.</p>
            </div>
          

          <div className="bg-dark-800 p-6 rounded-lg">
            <div className="flex items-center">
            <FaServer className="text-blue-500 text-2xl mr-4" />
              <h3 className="text-xl font-bold">Parse Server</h3>
              </div>
              <p className="text-gray-400">Authenticate a user to your Parse server with MetaMask.</p>
            </div>
          

          <div className="bg-dark-800 p-6 rounded-lg">
            <div className="flex items-center">
            <FaCloud className="text-green-400 text-2xl mr-4" />
              <h3 className="text-xl font-bold">Supabase</h3>
              </div>
              <p className="text-gray-400">Combine Web3 authentication with Supabase authentication.</p>
            </div>
        </div>
      </div>
    </div>
    
    <div className="bg-black">
       <Footer/>
    </div>
    <FixedPlugin />
    </>
  );
};

export default APIPage;
