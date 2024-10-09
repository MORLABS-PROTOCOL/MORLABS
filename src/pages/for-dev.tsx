import React, { useState } from 'react';
// import "../styles/globals.css";

import { FaCoins } from "react-icons/fa";  // icon for Coinflow
import { SiSolana } from "react-icons/si"; // icon for Solana
import { FaWallet } from 'react-icons/fa'; // For generic wallet icon
import { SiWebauthn, SiCoinbase, SiSolidity } from 'react-icons/si'; // Specific icons
import { BsShieldLock } from 'react-icons/bs'; // For security-related icons
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaCircle } from 'react-icons/fa';
import { FaPaperPlane, FaBtc, FaHandshake, FaShieldAlt } from 'react-icons/fa';
import { SiChainlink } from 'react-icons/si';


import { Footer } from '@/components';
import Navbar from "../components/navbar";
import { FixedPlugin } from "@/components";


const ForDev = () => {
  // State for main navigation
  const [activeTab, setActiveTab] = useState('API');
  // State for sub-categories under APIs
  const [activeSubTab, setActiveSubTab] = useState('Payments');
  // State for specific API contents under Payments
  const [activePaymentContent, setActivePaymentContent] = useState('CryptoPaymentGateways');

  // Function to handle tab click
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setActiveSubTab('Payments'); // Set default sub-tab on switching main tab
    setActivePaymentContent('CryptoPaymentGateways'); // Set default content
  };

  // Function to handle sub-tab click
  const handleSubTabClick = (subTab: string) => {
    setActiveSubTab(subTab);
    setActivePaymentContent(''); // Reset content when switching sub-tab
  };

  // Function to handle content click under Payments
  const handlePaymentContentClick = (content: string) => {
    setActivePaymentContent(content);
  };

  return (
    <>
    <div className=" flex justify-center bg-black">
    <Navbar />
    <div className="bg-gradient-to-b from-[#1b3a3a] to-[#001f19] min-h-screen p-6 mt-20 border border-black rounded-t-[26px] w-[1150px]">
        {/* Search Bar */}
        <div className="flex justify-center mb-4">
        <div className="flex items-center bg-[#0d1f26] rounded-full px-4 py-2 border border-transparent focus-within:border-gray-600 w-96">
    <span className="text-white">
      <i className="fas fa-search"></i> {/* Font Awesome search icon */}
    </span>
    <input
      type="text"
      placeholder="Search"
      className="bg-[#0d1f26] ml-2 text-sm text-white outline-none placeholder-white"
    />
  </div>
  </div>
     

      {/* Sub-Tabs for APIs */}
      {activeTab === 'API' && (
        <div className="flex items-center justify-between w-full">
        <div className="flex space-x-4 mb-4">
        <button
            className={`px-4 py-2 rounded-lg ${
              activeSubTab === 'Web2-to-Web3' ? 'bg-green-500 text-white' : 'bg-gradient-to-b from-[#1b3a3a] to-[#001f19] text-gray-300'
            }`}
            onClick={() => handleSubTabClick('Web2-to-Web3')}
          >
            Web2-to-Web3
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeSubTab === 'DeFi' ? 'bg-green-500 text-white' : 'bg-gradient-to-b from-[#1b3a3a] to-[#001f19] text-gray-300'
            }`}
            onClick={() => handleSubTabClick('DeFi')}
          >
            DeFi
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeSubTab === 'Games' ? 'bg-green-500 text-white' : 'bg-gradient-to-b from-[#1b3a3a] to-[#001f19] text-gray-300'
            }`}
            onClick={() => handleSubTabClick('Games')}
          >
            Games
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${
              activeSubTab === 'Payments' ? 'bg-green-500 text-white' : 'bg-gradient-to-b from-[#1b3a3a] to-[#001f19] text-gray-300'
            }`}
            onClick={() => handleSubTabClick('Payments')}
          >
            Payments
          </button>
          </div>

          {/* Recency Dropdown */}
        <div className="flex items-center space-x-2 flex-grow justify-center">
          <span className="text-gray-400 bg-gradient-to-b from-[#1b3a3a] to-[#001f19] px-4 text-semibold">Recency:</span>
          <select className="bg-gradient-to-b from-[#1b3a3a] to-[#001f19] text-gray-400 rounded-lg py-1 px-2">
            <option>All</option>
            {/* Add more options here */}
          </select>
        </div>

        {/* Blockchain Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-gray-400">Blockchain:</span>
          <select className="bg-gradient-to-b from-[#1b3a3a] to-[#001f19] text-gray-400 rounded-lg py-1 px-2">
            <option> Solana</option>
            {/* Add more options here */}
          </select>
        </div>
        </div>
      )}

      {/* Horizontal Rule */}
      <hr className="border-white mx-8 mb-6" />

       {/* Main Tabs */}

      <div className="flex mb-6 items-center justify-between w-full">
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 text-lg rounded-lg ${
            activeTab === 'API' ? 'bg-green-400 text-black' : 'bg-gradient-to-b from-[#1b3a3a] to-[#001f19] text-gray-300'
          }`}
          onClick={() => handleTabClick('API')}
        >
          APIs
        </button>
        <button
          className={`px-4 py-2 text-lg rounded-lg ${
            activeTab === 'SDKs' ? 'bg-green-400 text-black' : 'bg-gradient-to-b from-[#1b3a3a] to-[#001f19] text-gray-300'
          }`}
          onClick={() => handleTabClick('SDKs')}
        >
          SDKs
        </button>
        <button
          className={`px-4 py-2 text-lg rounded-lg ${
            activeTab === 'Chains' ? 'bg-green-400 text-black' : 'bg-gradient-to-b from-[#1b3a3a] to-[#001f19] text-gray-300'
          }`}
          onClick={() => handleTabClick('Chains')}
        >
          Chains
        </button>
        <button
          className={`px-4 py-2 text-lg rounded-lg ${
            activeTab === 'Tools' ? 'bg-green-400 text-black' : 'bg-gradient-to-b from-[#1b3a3a] to-[#001f19] text-gray-300'
          }`}
          onClick={() => handleTabClick('Tools')}
        >
          Tools
        </button>
        </div>
        </div>

      {/* Sub-Categories under Web2-Web3 */}
      {activeSubTab === 'Web2-to-Web3' && (
        <div className="h-[400px] gap-4 mb-6 bg-gradient-to-b from-[#1b3a3a] to-[#001f19] rounded-[26px] w-[500px]">
          <button
            className= "p-6 rounded-lg"
            //   ${
            //   activePaymentContent === 'CryptoPaymentGateways' ? 'ring-4 ring-green-400' : ''
            // }`}
            // onClick={() => handlePaymentContentClick('CryptoPaymentGateways')}
          >
            <h3 className="text-lg font-semibold text-white">Quickstart for Web2-to-Web3</h3>
            <p className="text-gray-400 font-semibold">This comprehensive guide aims to bridge the gap between the two worlds, providing a detailed roadmap for developers to successfully navigate the intricacies of Web3 development.</p>
          </button>
          <a href="/web2-to-web3"><button className="px-4 py-2 text-lg rounded-lg bg-green-500 mt-6 ml-6">
            Read More
          </button>
          </a>
          </div>
      )}

      {/* Sub-Categories under Payments */}
      {activeSubTab === 'Payments' && (
        <div className="grid grid-cols-2 gap-4 mb-6 bg-gradient-to-b from-[#1b3a3a] to-[#001f19]">
          <button
            className={`p-8 rounded-lg ${
              activePaymentContent === 'CryptoPaymentGateways' ? 'ring-4 ring-green-400' : ''
            }`}
            onClick={() => handlePaymentContentClick('CryptoPaymentGateways')}
          >
            <h3 className="text-lg font-semibold text-white">Crypto Payment Gateways</h3>
            <p className="text-gray-400 text-sm">APIs for accepting cryptocurrencies.</p>
          </button>
          <button
            className={`p-8 rounded-lg ${
              activePaymentContent === 'WalletIntegrations' ? 'ring-4 ring-green-400' : ''
            }`}
            onClick={() => handlePaymentContentClick('WalletIntegrations')}
          >
            <h3 className="text-lg font-semibold text-white">Wallet Integrations</h3>
            <p className="text-gray-400 text-sm">SDKs for connecting with Web3 wallets.</p>
          </button>
          <button
            className={`p-8 rounded-lg ${
              activePaymentContent === 'StablecoinTransactions' ? 'ring-4 ring-green-400' : ''
            }`}
            onClick={() => handlePaymentContentClick('StablecoinTransactions')}
          >
            <h3 className="text-lg font-semibold text-white">Stablecoin Transactions</h3>
            <p className="text-gray-400 text-sm">SDKs for connecting with Web3 wallets.</p>
          </button>
          <button
            className={`p-8 rounded-lg ${
              activePaymentContent === 'CrossBorderPayments' ? 'ring-4 ring-green-400' : ''
            }`}
            onClick={() => handlePaymentContentClick('CrossBorderPayments')}
          >
            <h3 className="text-lg font-semibold text-white">Cross-border Payments</h3>
            <p className="text-gray-400 text-sm">Tools for handling international crypto payments.</p>
          </button>
          <button
            className={`p-8 rounded-lg ${
              activePaymentContent === 'Micropayments' ? 'ring-4 ring-green-400' : ''
            }`}
            onClick={() => handlePaymentContentClick('Micropayments')}
          >
            <h3 className="text-lg font-semibold text-white">Micropayments</h3>
            <p className="text-gray-400 text-sm">APIs for tipping, micropayments, and pay-per-use models.</p>
          </button>
          <button
            className={`p-8 rounded-lg ${
              activePaymentContent === 'EscrowServices' ? 'ring-4 ring-green-400' : ''
            }`}
            onClick={() => handlePaymentContentClick('EscrowServices')}
          >
            <h3 className="text-lg font-semibold text-white">Escrow Services</h3>
            <p className="text-gray-400 text-sm">APIs for enabling escrow-based payments.</p>
          </button>
        </div>
      )}

      {/* Contents Rendering Based on Selections */}
      <div className="p-6 bg-[#141414] rounded-lg">
        {activePaymentContent === 'CryptoPaymentGateways' && (
          <div>
            <div className="px-8 py-4">
            <button className="text-gray-400 hover:text-green-200">&larr; Crypto Payment Gateways</button>
          </div>
            <h3 className="text-xl font-bold text-green-400">Crypto Payment Gateways</h3>
            
             {/* API Cards */}
      <div className="px-8 flex space-x-6">
        {/* Solana Pay Card */}
        <div className="flex space-x-4 items-start">
          <div className="flex-shrink-0">
            <div className="bg-gray-500 rounded-lg p-3">
              <SiSolana className="w-6 h-6" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Solana Pay</h3>
            <p className="text-gray-400 text-sm">
              A lending protocol that allows users to borrow and lend crypto assets.
            </p>
          </div>
        </div>

        {/* Coinflow Card */}
        <div className="flex space-x-4 items-start">
          <div className="flex-shrink-0">
            <div className="bg-gray-700 rounded-lg p-3">
              <FaCoins className="w-6 h-6" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Coinflow</h3>
            <p className="text-gray-400 text-sm">
              Simplifying payments for businesses by enabling global card acceptance and instant customer payouts.
            </p>
          </div>
        </div>
      </div>
          </div>
        )}
        {activePaymentContent === 'WalletIntegrations' && (
          <div>
            <div className="px-8 py-4">
               <button className="text-gray-400 hover:text-green-200">&larr; Wallet Integrations</button>
            </div>
            <h3 className="text-xl font-bold text-green-400">Wallet Integrations</h3>
            {/* Wallet Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 py-6">
        {/* Web3Auth Card */}
        <div className="flex space-x-4 items-start">
          <div className="flex-shrink-0">
            <div className="bg-blue-600 rounded-lg p-3">
              <SiWebauthn className="text-white w-6 h-6" /> {/* Web3Auth Icon */}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Web3Auth</h3>
            <p className="text-gray-400 text-sm">
              Revolutionizes the concept of wallet-as-a-service infrastructure by offering a self-custodial solution that harnesses the power of multi-party computation.
            </p>
          </div>
        </div>

        {/* Coinbase Wallet SDK Card */}
        <div className="flex space-x-4 items-start">
          <div className="flex-shrink-0">
            <div className="bg-blue-500 rounded-lg p-3">
              <SiCoinbase className="text-white w-6 h-6" /> {/* Coinbase Icon */}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Coinbase Wallet SDK</h3>
            <p className="text-gray-400 text-sm">
              Simplifies the process for users to delve into your decentralized application (dapp), enhancing their exploration experience.
            </p>
          </div>
        </div>

        {/* Phantom Wallet Card */}
        <div className="flex space-x-4 items-start">
          <div className="flex-shrink-0">
            <div className="bg-purple-500 rounded-lg p-3">
              <FaWallet className="text-white w-6 h-6" /> {/* Phantom Wallet Icon (generic wallet icon) */}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Phantom Wallet</h3>
            <p className="text-gray-400 text-sm">
              Phantom stands as a prominent crypto wallet, supporting multiple chains including Solana.
            </p>
          </div>
        </div>

        {/* Blocto Card */}
        <div className="flex space-x-4 items-start">
          <div className="flex-shrink-0">
            <div className="bg-blue-400 rounded-lg p-3">
              <SiSolidity className="text-white w-6 h-6" /> {/* Blocto Icon */}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Blocto</h3>
            <p className="text-gray-400 text-sm">
              Blocto is an account abstraction wallet designed with a user-friendly approach, making it an ideal choice for beginners in the crypto space.
            </p>
          </div>
        </div>

        {/* Dfns Card */}
        <div className="flex space-x-4 items-start">
          <div className="flex-shrink-0">
            <div className="bg-yellow-500 rounded-lg p-3">
              <BsShieldLock className="text-black w-6 h-6" /> {/* Dfns Icon */}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Dfns</h3>
            <p className="text-gray-400 text-sm">
              Utilizes a decentralized, MPC-driven key management network, fortified with robust recovery mechanisms.
            </p>
          </div>
        </div>
      </div>
          </div>
        )}
        {activePaymentContent === 'StablecoinTransactions' && (
          <div>
            <div className="px-8 py-4">
               <button className="text-gray-400 hover:text-green-200">&larr; Stablecoin Transactions</button>
            </div>
            <h3 className="text-xl font-bold text-green-400">Stablecoin Transactions</h3>
            <div className="flex space-x-16">
        {/* Circle */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
          <div className="bg-gray-700 rounded-lg p-3">
          <FaCircle className="w-6 h-6 text-green-500" /> {/* Circle icon */}
          </div>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold">Circle</h3>
            <p className="text-gray-200">This is the official API for the USDC stablecoin, issued by Circle.</p>
          </div>
        </div>

        {/* Tether */}
        <div className="flex items-start space-x-4">
           <div className="flex-shrink-0">
                <div className="bg-gray-700 rounded-lg p-3">
                   <FaCoins className="w-6 h-6 text-teal-400" /> {/* Tether icon */}
                </div>
            </div>
            <div>
                <h3 className="text-white text-xl font-bold">Tether</h3>
                <p className="text-gray-200">This is the official API for the USDT stablecoin, issued by Tether.</p>
            </div>
        </div>
        </div>
        </div>
        
        )}
        {activePaymentContent === 'CrossBorderPayments' && (
          <div>
            <div className="px-8 py-4">
               <button className="text-gray-400 hover:text-green-200">&larr; Cross-border Payments</button>
            </div>
            <h3 className="text-xl font-bold text-green-400">Cross-border Payments</h3>
            <div className="flex space-x-16">
        {/* Multisender */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
          <div className="bg-gray-700 rounded-lg p-3">
          <FaPaperPlane className="w-6 h-6 text-green-500" /> {/* Multisender icon */}
          </div>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold">Multisender</h3>
            <p className="text-gray-200">A powerful dapp that streamlines the process of sending tokens to multiple addresses.</p>
          </div>
        </div>

        {/* Binance */}
        <div className="flex items-start space-x-4">
           <div className="flex-shrink-0">
                <div className="bg-gray-700 rounded-lg p-3">
                   <FaBtc className="w-6 h-6 text-teal-400" /> {/* Binance icon */}
                </div>
            </div>
            <div>
                <h3 className="text-white text-xl font-bold">Binance</h3>
                <p className="text-gray-200">This project stands as the unrivaled titan of the crypto realm, reigning supreme as the foremost cryptocurrency exchange globally.</p>
            </div>
        </div>
        </div>
        </div>
        )}
        {activePaymentContent === 'Micropayments' && (
          <div>
            <div className="px-8 py-4">
               <button className="text-gray-400 hover:text-green-200">&larr; Micropayments</button>
            </div>
            <h3 className="text-xl font-bold text-green-400">Micropayments</h3>
            <div className="flex space-x-16">
        {/* Solana Pay */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
          <div className="bg-gray-700 rounded-lg p-3">
          <FaWallet className="w-6 h-6 text-green-500" /> {/* Solana Pay icon */}
          </div>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold">Solana Pay</h3>
            <p className="text-gray-200">A lending protocol that allows users to borrow and lend crypto assets.</p>
          </div>
        </div>

        {/* Phantom Walllet */}
        <div className="flex items-start space-x-4">
           <div className="flex-shrink-0">
                <div className="bg-gray-700 rounded-lg p-3">
                   <FaHandshake className="w-6 h-6 text-teal-400" /> {/* Phantom Walllet icon */}
                </div>
            </div>
            <div>
                <h3 className="text-white text-xl font-bold">Phantom Walllet</h3>
                <p className="text-gray-200">Phantom stands as a prominent crypto wallet, supporting multiple chains including Solana.</p>
            </div>
        </div>
        </div>
        </div>
        )}
        {activePaymentContent === 'EscrowServices' && (
          <div>
            <div className="px-8 py-4">
               <button className="text-gray-400 hover:text-green-200">&larr; Escrow Services</button>
            </div>
            <h3 className="text-xl font-bold text-green-400">Escrow Services</h3>
            <div className="flex space-x-16">
        {/* Trustap */}
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0">
          <div className="bg-gray-700 rounded-lg p-3">
          <FaShieldAlt className="w-6 h-6 text-green-500" /> {/* Trustap icon */}
          </div>
          </div>
          <div>
            <h3 className="text-white text-xl font-bold">Trustap</h3>
            <p className="text-gray-200">Provides a secure and transparent way to hold funds in escrow until certain conditions are met.</p>
          </div>
        </div>

        {/* Chainlink */}
        <div className="flex items-start space-x-4">
           <div className="flex-shrink-0">
                <div className="bg-gray-700 rounded-lg p-3">
                   <SiChainlink className="w-6 h-6 text-teal-400" /> {/* Chainlink icon */}
                </div>
            </div>
            <div>
                <h3 className="text-white text-xl font-bold">Chainlink</h3>
                <p className="text-gray-200">A decentralized oracle network that can be used to obtain external data for escrow contracts.</p>
            </div>
        </div>
        </div>
        </div>
        )}
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

export default ForDev;
