import React, { useState } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';

// Define navItems here, or import them if they are defined in another file.

const navItems = {
  // APIs: [
  //   { name: "NFT API", description: "NFT data access", href: '/docs' },
  //   { name: "Token API", description: "Token info", href: '/docs' },
  //   { name: "Transfers API", description: "Asset transfers", href: '/docs' },
  //   { name: "Gas Manager API", description: "Gas optimization", href: '/docs' },
  //   { name: "Smart Websockets", description: "Real-time events", href: '/docs' },
  //   { name: "Supernode", description: "The web3 engine", href: '/docs' },
  // ],
  // BlockChains: [
  //   { name: "Ethereum", description: "Smart contracts", href: '/docs' },
  //   { name: "Solana", description: "Scalable blockchain", href: '/docs' },
  // ],
  // SDKs: [
  //   { name: "Javascript SDK", description: "Web3 with JS", href: '/docs' },
  //   { name: "Python SDK", description: "Web3 with Python", href: '/docs' },
  // ],
  // Tools: [
  //   { name: "Sandbox", description: "Test environment", href: '/doc' },
  //   { name: "Create Web3 Dapp", description: "Build Dapps", href: '/docs' },
  // ],
  publish: [
    { name: "Submit API", description: "Publish", href: '/signup-form' },
    { name: "API Guidelines", description: "Get Guided", href: '/signup-form' },
  ],
  forum: [
    { name: "DAO Voting", description: "Participate", href: '/signup-form' }, 
    { name: "Discussion Forum", description: "Engage", href: '/sign-form' }, 
    { name: "Contribute", description: "Join Us", href: '/sign-form' }, 
  ],
  morlabs: [
    { name: "About", description: "Learn More", href: '/guide' }, 
    { name: "Contact", description: "Get in Touch", href: '/guide' }, 
    { name: "Careers", description: "Join Our Team", href: '/guide' }, 
  ],
  // docs: [
  //   { name: "Developer Docs", description: "Explore Guides", href: '/docs'}, 
  //   { name: "API Doc Templates", description: "Use Templates", href: '/docs' }, 
  //   { name: "Solana Integration", description: "Integrate Easily", href: '/docs' }, 
  //   { name: "Sandbox/Test Environment", description: "Test Safely", href: '/docs' }, 
  // ],

     
};

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="small"
        className="font-medium"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >
        {children}
      </Typography>
    </li>
  );
}

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  // const [isScrolling, setIsScrolling] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [nestedDropdown, setNestedDropdown] = useState<string | null>(null);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  function handleMouseOver(dropdownName: string) {
    setActiveDropdown(dropdownName);
  }

  function handleMouseLeave() {
    setActiveDropdown(null);
    setNestedDropdown(null); // Close nested dropdowns when leaving the parent
  }

  function handleDropdownClick(dropdownName: string) {
    setNestedDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color="transparent"
      className="fixed top-0 z-50 border-0"
      // bg-gradient-to-b from-black to-green-300"
      style={{ background: 'radial-gradient(circle, #4ade80, black)' }}
      // style={{ background: 'linear-gradient(90deg, #002c23, #002c23 50%, #001611)' }}
      placeholder=""
      onPointerEnterCapture={() => {}}
      onPointerLeaveCapture={() => {}}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Typography
          // as="a"
          // href=""
          // target="_blank"
          variant="h6"
          color="white"
          className="flex items-center"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          <Link href="/" passHref>
          <span className="text-4xl mr-2" style={{ color: "#00FF99" }}>
            m
          </span>{" "}
          morlabs
          </Link>
        </Typography>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            "white"
          }`}
        >{/* For Developers Dropdown */}
          <li
              className="relative"
              onMouseOver={() => handleMouseOver("developers")}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/for-dev" passHref>
              <button
                className="font-medium flex items-center"
                style={{color: "white" }}
              >
                For Developers
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>
              </Link>
              {/* {activeDropdown === "developers" && (
                
                <div className="absolute left-0 mt-2 w-[80%] sm:w-[800px] md:w-[900px] lg:w-[1000px] bg-black border border-green-500 rounded-lg shadow-lg z-10">
                  <div className="p-4 grid grid-cols-4 gap-4"> */}
                    {/* API Section */}
                    {/* <div>
                      <h4 className="font-semibold text-sm text-white">APIs</h4>
                      {navItems.APIs.map((item) => (
                        <MenuItem key={item.name} className="flex items-center justify-between text-white" placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}>
                          <span><a href={item.href} className="font-medium text-sm">{item.name}</a></span>
                          <span><a href={item.href} className="text-xs text-gray-500">{item.description}</a></span>
                        </MenuItem>
                      ))}
                    </div> */}
                    {/* Chains Section */}
                    {/* <div>
                      <h4 className="font-semibold text-sm text-white">Chains</h4>
                      {navItems.BlockChains.map((item) => (
                        <MenuItem key={item.name} className="flex items-center justify-between text-white" placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}>
                          <span><a href={item.href} className="font-medium text-sm">{item.name}</a></span>
                          <span><a href={item.href} className="text-xs text-gray-500">{item.description}</a></span>
                        </MenuItem>
                      ))}
                    </div> */}
                    {/* SDKs Section */}
                    {/* <div>
                      <h4 className="font-semibold text-sm text-white">SDKs</h4>
                      {navItems.SDKs.map((item) => (
                        <MenuItem key={item.name} className="flex items-center justify-between text-white" placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}>
                          <span><a href={item.href} className="font-medium text-sm">{item.name}</a></span>
                          <span><a href={item.href} className="text-xs text-gray-500">{item.description}</a></span>
                        </MenuItem>
                      ))}
                    </div> */}
                    {/* Tools Section */}
                    {/* <div>
                      <h4 className="font-semibold text-sm text-white">Tools</h4>
                      {navItems.Tools.map((item) => (
                        <MenuItem key={item.name} className="flex items-center justify-between text-white" placeholder=""
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}>
                          <span><a href={item.href} className="font-medium text-sm">{item.name}</a></span>
                          <span><a href={item.href} className="text-xs text-gray-500">{item.description}</a></span>
                        </MenuItem>
                      ))}
                    </div> */}
                  {/* </div>
                </div>
              )} */}
            </li>
            {/* Publish Your API Dropdown */}

          <li
              className="relative"
              onMouseOver={() => handleMouseOver("publish")}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/publish-api" passHref>
              <button
                className="font-medium flex items-center"
                // style={{ color: isScrolling ? "gray" : "white" }}
              >
                Publish Your API
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>
              </Link>
              {/* {activeDropdown === "publish" && (
                <div className="absolute left-0 mt-2 w-64 bg-black border border-green-500 rounded-lg shadow-lg z-10"> */}
                  {/* Publish Section */}
                  {/* <div className="p-4 space-y-2">
                    
                    <h4 className="font-semibold text-sm  text-white">
                      Add
                    </h4>
                    {navItems.publish.map((item) => (
                      <MenuItem key={item.name} className="flex items-center justify-between  text-white" placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}>
                        <span><a href={item.href} className="font-medium text-sm">{item.name}</a></span>
                        <span><a href={item.href} className="text-xs text-gray-500">{item.description}</a></span>
                      </MenuItem>
                    ))}
                  </div> */}
{/*                   
                </div>
              )} */}
            </li>
            {/* Community Dropdown */}

          <li
              className="relative"
              onMouseOver={() => handleMouseOver("community")}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/signup-form" passHref>
              <button
                className="font-medium flex items-center"
                // style={{ color: isScrolling ? "gray" : "white" }}
              >
                Community
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>
              </Link>
              {/* {activeDropdown === "community" && (
                <div className="absolute left-0 mt-2 w-64 bg-black border border-green-500 rounded-lg shadow-lg z-10"> */}
                  {/* community Section */}
                  {/* <div className="p-4 space-y-2">
                    
                    <h4 className="font-semibold text-sm  text-white">
                      Forum
                    </h4>
                    {navItems.forum.map((item) => (
                      <MenuItem key={item.name} className="flex items-center justify-between  text-white" placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}>
                        <span><a href={item.href} className="font-medium text-sm">{item.name}</a></span>
                        <span><a href={item.href} className="text-xs text-gray-500">{item.description}</a></span>
                      </MenuItem>
                    ))}
                  </div> */}
                  
                {/* </div>
              )} */}
            </li>
            {/* Company Dropdown */}

          <li
              className="relative"
              onMouseOver={() => handleMouseOver("company")}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/" passHref>
              <button
                className="font-medium flex items-center"
                // style={{ color: isScrolling ? "gray" : "white" }}
              >
                Company
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>
              </Link>
              {/* {activeDropdown === "company" && (
                <div className="absolute left-0 mt-2 w-64 bg-black border border-green-500 rounded-lg shadow-lg z-10"> */}
                  {/* company Section */}
                  {/* <div className="p-4 space-y-2">
                    
                    <h4 className="font-semibold text-sm  text-white">
                      Morlabs
                    </h4>
                    {navItems.morlabs.map((item) => (
                      <MenuItem key={item.name} className="flex items-center justify-between  text-white"placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}>
                        <span><a href={item.href} className="font-medium text-sm">{item.name}</a></span>
                        <span><a href={item.href} className="text-xs text-gray-500">{item.description}</a></span>
                      </MenuItem>
                    ))}
                  </div> */}
                  
                {/* </div>
              )} */}
            </li>
            {/* Docs Dropdown */}

          <li
              className="relative"
              onMouseOver={() => handleMouseOver("docs")}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/guide" passHref>
              <button
                className="font-medium flex items-center"
                style={{ color: "white" }}
              >
                Docs
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>
              </Link>
              {/* {activeDropdown === "docs" && (
                <div className="absolute left-0 mt-2 w-80 bg-black border border-green-500 rounded-lg shadow-lg z-10"> */}
                  {/* Docs Section */}
                  {/* <div className="p-4 space-y-2">
                    
                    <h4 className="font-semibold text-sm  text-white">
                      Guides
                    </h4>
                    {navItems.docs.map((item) => (
                      <MenuItem key={item.name} className="flex items-center justify-between  text-white"placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}>
                        <span><a href={item.href} className="font-medium text-sm">{item.name}</a></span>
                        <span><a href={item.href} className="text-xs text-gray-500">{item.description}</a></span>
                      </MenuItem>
                    ))}
                  </div> */}
                  
                {/* </div>
              )} */}
            </li>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <a href="https://twitter.com/morlabs_">
          <IconButton
            variant="text"
            color="white"
            size="sm"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
           <i className="fa-brands fa-twitter text-base" /> 
          </IconButton>
          </a>
          <IconButton
            variant="text"
            color="white"
            size="sm"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <i className="fa-brands fa-facebook text-base" />
          </IconButton>
          <IconButton
            variant="text"
            color="white"
            size="sm"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          >
            <i className="fa-brands fa-instagram text-base" />
          </IconButton>
          <Link href="/connect-wallet" passHref>
            <Button 
            color="white" 
            size="sm"placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}>
              Connect Wallet
            </Button>
          </Link>
        </div>
        {/* mobile Toggle */}
        <IconButton
          variant="text"
          color="white"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
          size="sm"
          placeholder=""
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            {/* For Developers Dropdown */}
          <li
              className="relative"
              onMouseOver={() => handleMouseOver("developers")}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/for-dev" passHref>
              <button
                className="font-medium flex items-center"
                // style={ color: "white"}
              >
                For Developers
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>
              </Link>
              {/* {activeDropdown === "developers" && (
                <div className="absolute left-0 mt-2 w-64 bg-black border border-green-500 rounded-lg shadow-lg z-10"> */}
                  {/* API Section */}
                  {/* <div className="p-4 space-y-2">
                    <h4 className="font-semibold text-sm text-white">APIs</h4>
                    {navItems.APIs.map((item) => (
                      <MenuItem key={item.name} className="flex items-center justify-between text-white" placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}>
                        <span className="font-medium text-sm">{item.name}</span>
                        <span className="text-xs text-gray-500">{item.description}</span>
                      </MenuItem>
                    ))}
                  </div> */}
                  {/* Chains Section */}
                  {/* <div className="p-4 space-y-2">
                    <h4 className="font-semibold text-sm text-white">Chains</h4>
                    {navItems.BlockChains.map((item) => (
                      <MenuItem key={item.name} className="flex items-center justify-between text-white" placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}>
                        <span className="font-medium text-sm">{item.name}</span>
                        <span className="text-xs text-gray-500">{item.description}</span>
                      </MenuItem>
                    ))}
                  </div> */}
                {/* </div>
              )} */}
            </li>
            {/* Publish Your API Dropdown */}

          <li
              className="relative"
              onMouseOver={() => handleMouseOver("publish")}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/publish-api" passHref>
              <button
                className="font-medium flex items-center"
                // style={{ color: isScrolling ? "gray" : "white" }}
              >
                Publish Your API
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>
              </Link>
              {/* {activeDropdown === "publish" && (
                <div className="absolute left-0 mt-2 w-64 bg-black border border-green-500 rounded-lg shadow-lg z-10"> */}
                  {/* Publish Section */}
                  {/* <div className="p-4 space-y-2">
                    
                    <h4 className="font-semibold text-sm text-white">
                      Add
                    </h4>
                    {navItems.publish.map((item) => (
                      <MenuItem key={item.name} className="flex items-center justify-between text-white" placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}>
                        <span className="font-medium text-sm">{item.name}</span>
                        <span className="text-xs text-gray-500">{item.description}</span>
                      </MenuItem>
                    ))}
                  </div> */}
                  
                {/* </div>
              )} */}
            </li>
            {/* Community Dropdown */}

          <li
              className="relative"
              onMouseOver={() => handleMouseOver("community")}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/signup-form" passHref>
              <button
                className="font-medium flex items-center"
                // style={{ color: isScrolling ? "gray" : "white" }}
              >
                Community
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>
              </Link>
              {/* {activeDropdown === "community" && (
                <div className="absolute left-0 mt-2 w-64 bg-black border border-green-500 rounded-lg shadow-lg z-10"> */}
                  {/* community Section */}
                  {/* <div className="p-4 space-y-2">
                    
                    <h4 className="font-semibold text-sm text-white">
                      Forum
                    </h4>
                    {navItems.publish.map((item) => (
                      <MenuItem key={item.name} className="flex items-center justify-between text-white" placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}>
                        <span className="font-medium text-sm">{item.name}</span>
                        <span className="text-xs text-gray-500">{item.description}</span>
                      </MenuItem>
                    ))}
                  </div> */}
                  
                {/* </div>
              )} */}
            </li>
            {/* Company Dropdown */}

          <li
              className="relative"
              onMouseOver={() => handleMouseOver("company")}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/" passHref>
              <button
                className="font-medium flex items-center"
                // style={{ color: isScrolling ? "gray" : "white" }}
              >
                Company
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>
              </Link>
              {/* {activeDropdown === "company" && (
                <div className="absolute left-0 mt-2 w-64 bg-black border border-green-500 rounded-lg shadow-lg z-10"> */}
                  {/* company Section */}
                  {/* <div className="p-4 space-y-2">
                    
                    <h4 className="font-semibold text-sm text-white">
                      Morlabs
                    </h4>
                    {navItems.morlabs.map((item) => (
                      <MenuItem key={item.name} className="flex items-center justify-between text-white" placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}>
                        <span className="font-medium text-sm">{item.name}</span>
                        <span className="text-xs text-gray-500">{item.description}</span>
                      </MenuItem>
                    ))}
                  </div> */}
                  
                {/* </div>
              )} */}
            </li>
            {/* Docs Dropdown */}

          <li
              className="relative"
              onMouseOver={() => handleMouseOver("docs")}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/docs" passHref>
              <button
                className="font-medium flex items-center"
                // style={{ color: "white" }}
              >
                Docs
                <ChevronDownIcon className="w-5 h-5 ml-1" />
              </button>
              </Link>
              {/* {activeDropdown === "docs" && (
                <div className="absolute left-0 mt-2 w-64 bg-black border border-green-500 rounded-lg shadow-lg z-10"> */}
                  {/* Docs Section */}
                  {/* <div className="p-4 space-y-2">
                    
                    <h4 className="font-semibold text-sm text-white">
                      Guides
                    </h4>
                    {navItems.docs.map((item) => (
                      <MenuItem key={item.name} className="flex items-center justify-between text-white" placeholder=""
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}>
                        <span className="font-medium text-sm">{item.name}</span>
                        <span className="text-xs text-gray-500">{item.description}</span>
                      </MenuItem>
                    ))}
                  </div> */}
                  
                {/* </div>
              )} */}
            </li> 
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <a href="https://twitter.com/morlabs_">
            <IconButton variant="text" color="gray" size="sm" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            </a>
            <IconButton variant="text" color="gray" size="sm" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton variant="text" color="gray" size="sm" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
            <Link href="/connect-wallet" passHref>
              <Button color="gray" size="sm" className="ml-auto" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
                Connect Wallet
              </Button>
            </Link>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;
