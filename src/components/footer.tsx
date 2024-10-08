import React from 'react';
import { Donegal_One } from 'next/font/google';

const aS = ['Explore APIs', 'Documentation', 'About Us', 'Contact Us', 'Careers'];
const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 border border-white rounded-t-[46px] max-w-6xl mx-auto px-6">
      <div className="container mx-auto px-4">
        <div className="md:flex md:justify-between items-center">
          {/* Left Side - Logo */}
          <div className="flex items-center space-x-2 p-3 md:p-1">
            <a href="#">
              <span className="text-4xl mr-2 font-bold text-green-500">
                m
              </span>
              <span className="text-xl">morlabs</span>
            </a>
          </div>

          {/* Center Content */}
          <div className="grid md:grid-cols-3 gap-4 p-3 md:p-1">
            {/* Column 1 */}
            <div className='p-3 md:p-1'>
              <h3 className="font-bold mb-4">For Devs</h3>
              <ul className="list-none space-y-2">
                <li>Web2-to-Web3</li>
                <li>Payments</li>
                <li>DeFi</li>
                <li>Gaming</li>
                
              </ul>
            </div>
            {/* Column 2 */}
            <div className='p-3 md:p-1'>
              <h3 className="font-bold mb-4">Docs</h3>
              <ul className="list-none space-y-2">
                <li>Developer</li>
                <li>API Interation</li>
                <li>Solana Integration</li>
                <li>Sandbox</li>
              </ul>
            </div>
            {/* Column 3 */}
            <div className='p-3 md:p-1'>
              <h3 className="font-bold mb-4">Testing</h3>
              <ul className="list-none space-y-2">
                <li>DApp</li>
                <li>Sandbox</li>
              </ul>
            </div>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex space-x-4 items-center">
            <a href="https://twitter.com/morlabs_">
              <p className="text-white opacity-75 hover:opacity-100">
                <i className="fa-brands fa-twitter text-2xl not-italic"></i>
              </p>
            </a>
            <a href="#">
              <p className="text-white opacity-75 hover:opacity-100">
                <i className="fa-brands fa-aedin text-2xl not-italic"></i>
              </p>
            </a>
            <a href="#">
              <p className="text-white opacity-75 hover:opacity-100">
                <i className="fa-brands fa-facebook text-2xl not-italic"></i>
              </p>
            </a>
            <a href="#">
              <p className="text-white opacity-75 hover:opacity-100">
                <i className="fa-brands fa-github text-2xl not-italic"></i>
              </p>
            </a>
            <a href="#">
              <p className="text-white opacity-75 hover:opacity-100">
                <i className="fa-brands fa-dribbble text-2xl not-italic"></i>
              </p>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-16 flex flex-col items-center justify-center gap-y-4 gap-x-8 border-t border-white py-7">
        <div className="text-center text-white font-normal opacity-75">
            <p className=" text-white">&copy; Copyright Morlabs {CURRENT_YEAR}</p>
          
        
            <p className="text-white"><a href="" className='hover:underline'>Terms of Service</a> & <a href="" className='hover:underline'>Privacy Policy</a></p>
            
            
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;

