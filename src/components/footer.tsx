"use client";
import Image from "next/image";
import { Typography, IconButton, Button } from "@material-tailwind/react";

const LINKS = ["Explore APIs", "Documentation", "About Us", "Contact Us", "Careers"];
const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  return (
      <footer className="bg-black text-white py-8 border border-white rounded-t-[46px] max-w-6xl mx-auto px-6">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            {/* Left Side - Logo */}
            <div className="flex items-center space-x-2">
            <Typography
              as="a"
              href="#"
              target="_blank"
              variant="h5"
              color="white"
              className="mb-4"
              placeholder=""
              onPointerEnterCapture={() => {}}
              onPointerLeaveCapture={() => {}}
             >
              <span className="text-4xl mr-2 font-bold" style={{ color: "#00FF99" }}>
                m
              </span>{" "}
              <span className="text-xl">morlabs</span>
              </Typography>
            </div>
  
            {/* Center Content */}
            <div className="flex space-x-12">
              {/* Column 1 */}
              <div>
                <h3 className="font-bold mb-4">For Devs</h3>
                <ul>
                  <li>NFT API</li>
                  <li>Websockets</li>
                  <li>Gas Manager API</li>
                  <li>Token API</li>
                  <li>Supernode</li>
                </ul>
              </div>
              {/* Column 2 */}
              <div>
                <h3 className="font-bold mb-4">Docs</h3>
                <ul>
                  <li>Developer</li>
                  <li>API Interation</li>
                  <li>solana Integration</li>
                  <li>Sandbox</li>
                  
                </ul>
              </div>
              {/* Column 3 */}
              <div>
                <h3 className="font-bold mb-4">Testing</h3>
                <ul>
                  <li>DApp</li>
                  <li>Sandbox</li>
                  
                </ul>
              </div>
            </div>
              
            {/* Right Side - Social Icons */}
            <div className="flex space-x-4 items-center">
              <a href="https://twitter.com/morlabs_">
              <IconButton variant="text" color="white" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                <i className="fa-brands fa-twitter text-2xl not-italic opacity-75"></i>
              </IconButton>
              </a>
              <IconButton variant="text" color="white" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
              </IconButton>
              <IconButton variant="text" color="white" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                 <i className="fa-brands fa-facebook text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                 <i className="fa-brands fa-github text-2xl not-italic opacity-75"></i>
             </IconButton>
             <IconButton variant="text" color="white" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                 <i className="fa-brands fa-dribbble text-2xl not-italic opacity-75"></i>
                </IconButton>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center justify-center gap-y-4 gap-x-8 border-t border-white py-7">
  <Typography
    color="white"
    className="text-center font-normal opacity-75"
    placeholder=""
    onPointerEnterCapture={() => {}}
    onPointerLeaveCapture={() => {}}
  >
    &copy; {" "} 
    <a href="" target="_blank" className="hover:underline">
      Morlabs
    </a>{" "}
    Copyright {new Date().getFullYear()}.
    {" "}
    <a href="#" target="_blank" className="hover:underline">
      Term of Service.
    </a>
    {" "}
    <a href="#" target="_blank" className="hover:underline">
      Privacy Policy.
    </a>
  </Typography>
</div>

      </footer>
    );
  }



export default Footer;
