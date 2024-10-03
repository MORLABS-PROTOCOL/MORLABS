// connect-wallet.tsx
import { useState } from 'react';
import "../styles/globals.css";
import Image from 'next/image';

import { FaWallet } from 'react-icons/fa'; // General wallet icon
import { SiMetabase, SiCoinbase, SiTrustpilot } from 'react-icons/si'; // Specific wallet icons
import { FixedPlugin } from "@/components";

interface ModalProps {
  closeModal: () => void;
}

export default function ConnectWalletModal({ closeModal }: ModalProps) {
  const [step, setStep] = useState(1); // Step 1 = Modal, Step 2 = Wallet Connect Screen
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);


  const customPhantomIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z" />
    </svg>
  );

  const wallets = [
    { name: 'MetaMask', recommended: true, icon: <SiMetabase className="text-orange-500 text-3xl" /> },
    { name: 'Coinbase Wallet', recommended: false, icon: <SiCoinbase className="text-blue-500 text-3xl" /> },
    { name: 'Wallet Connect', recommended: false, icon: <FaWallet className="bg-gradient-to-r from-purple-500 to-teal-400 text-3xl" /> },
    { name: 'Trust Wallet', recommended: false, icon: <SiTrustpilot className="text-blue-700 text-3xl" /> },
    { name: 'Zerion Wallet', recommended: false,  icon: <FaWallet className="text-cyan-500 text-3xl" /> },
    { name: 'Rainbow', recommended: false, icon: customPhantomIcon },
    { name: 'Phantom', recommended: false, icon: <FaWallet className="text-cyan-500 text-3xl" /> },
  ];

  const handleGetStarted = () => {
    setStep(2); // Move to wallet connection screen
  };

  return (
    <>
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-[#4b4b57] p-6 rounded-lg w-[800px] relative text-center border border-b-light-green-500 mt-10">
        <button className="absolute top-3 right-3 text-white" onClick={closeModal}>
          &times;
        </button>

        {/* Step 1: Solana Wallet Modal */}
        {step === 1 && (
          <div className="p-20 h-[400px]">
            <p className="text-white text-3xl font-semibold mb-4 p-3">You&apos;ll need a wallet <br /> on Solana to continue</p>
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-purple-500 to-teal-400 p-4 rounded-full">
                {/* Wallet SVG icon */}
                <FaWallet className="text-white text-6xl" />
              </div>
            </div>
            <button className="bg-purple-600 text-white py-2 px-4 rounded-lg w-full font-bold p-3" onClick={handleGetStarted}>
              Get started
            </button>
          </div>
        )}

        {/* Step 2: Wallet Connection Screen */}
        {step === 2 && (
          <div className="flex">
            {/* Sidebar for wallets */}
            <div className="w-1/3">
            <div className="flex items-center space-x-2">
                <FaWallet className="text-white text-2xl" />
                <a href="#" className="text-white text-2xl">Connect a Wallet</a>
            </div>

              <h2 className="text-gray-400 mb-4">Popular</h2>
              <ul className="space-y-4 border-r-2 border-green-200">
                {wallets.map((wallet) => (
                  <li key={wallet.name}
                  className="flex items-center justify-between p-2 cursor-pointer hover:bg-green-800 rounded-md"
                  >
                    <button
                      className="text-left text-white w-full flex items-center space-x-2 rounded-md"
                      onClick={() => setSelectedWallet(wallet.name)}
                    >
                      {wallet.icon && <span className="text-xl">{wallet.icon}</span>}
                      <span className="font-medium">{wallet.name}</span>
                      {wallet.recommended && <span className="text-green-400 text-sm">Recommended</span>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Main content area (QR Code) */}
            <div className="w-2/3 flex justify-center items-center">
              {selectedWallet ? (
                <div className="text-center">
                  <h3 className="text-white text-lg mb-4">Scan to connect your {selectedWallet}</h3>
                  <Image
                //   width={300}
                //   height={300}
                  src="https://via.placeholder.com/150" 
                  alt="QR code" 
                  className="mx-auto w-[300px] h-[300px]"
            
                  />
                </div>
              ) : (
                <p className="text-gray-400">Select a wallet to connect</p>
              )}

              {/* <div className="block">
                <p> Don't have {selectedWallet}? </p>
                <button>Get</button>
              </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
    <FixedPlugin />
    </>
  );
}
