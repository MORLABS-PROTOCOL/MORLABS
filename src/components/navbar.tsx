import React, { useState } from "react";
import Link from "next/link";


// Define navItems here, or import them if they are defined in another file.

// const navItems = {
//   APIs: [
//     { name: "NFT API", description: "NFT data access", href: '/docs' },
//     // ... other items
//   ],
//   // ... other sections
// };

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li className="menu-item">
      <Link href={href || "#"}>
        <span className="menu-text">{children}</span>
      </Link>
    </li>
  );
}

const Navbar = () => {
  const [open, setOpen] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  function handleDropdownToggle() {
    setDropdownOpen((cur) => !cur);
  }

  return (
    <div className="max-w-[1200px] flex justify-center items-center container mx-auto fixed top-0 z-50 border-0">
    <div className="navbar  text-white items-center" style={{ background: 'radial-gradient(circle, #4ade80, black)' }}>
    <div className="navbar-start ml-auto">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-96 p-2 shadow">
          <li><a href="/for-dev">
              <button
                className="font-medium flex items-center p-2"
                style={{color: "black" }}
              >
                For Developers
                {/* <ChevronDownIcon className="w-5 h-5 ml-1" /> */}
              </button>
              </a></li>
              <li>
        <details>
        <summary><a href="/publish-api">
              <button
                className="font-medium flex items-center p-2"
                style={{color: "black" }}
              >
                 Publish Your API
              </button>
              </a></summary>
              </details></li>
              <li>
        <details>
        <summary><a href="/signup-form">
              <button
                className="font-medium flex items-center p-2"
                style={{color: "black" }}
              >
                 Community
               
              </button>
              </a></summary>
              </details>
              </li>

              <li>
        <details>
        <summary><a href="/">
              <button
                className="font-medium flex items-center p-2"
                style={{color: "black" }}
              >
                 Company
                
              </button>
              </a></summary>
              </details></li>

              <li>
        <details>
        <summary><a href="/docs">
              <button
                className="font-medium flex items-center p-2"
                style={{color: "black" }}
              >
                 Docs
                
              </button>
              </a></summary>
              </details>
              </li>
              <div className="mt-4 flex items-center gap-2 ml-5 text-green-500">
            
              <i className="fa-brands fa-twitter text-base pl-8 text-green-500" />
           
              <i className="fa-brands fa-facebook text-base pl-8 text-green-500" />
            
              <i className="fa-brands fa-instagram text-base pl-8 text-green-500" />
            
          </div>
        </ul>
        
      </div>
      <a className="btn btn-ghost text-xl ml-5" href="/">
          <span className="text-4xl mr-2" style={{ color: "#00FF99" }}>
            m
          </span>{" "}
          morlabs
          </a>
    </div>
    <div className="navbar-center hidden lg:flex ">
      <ul className="menu menu-horizontal px-1">
        <li>
        <details>
        <summary>
              <button
                className="font-medium flex items-center"
                style={{color: "white" }}
              >
                For Developers
              
              </button>
        {/*

        What's summary and details for?
        its the dropdown
        continue

        Okay, I wanted a situation whereby even if the user clicks on the for devs button, it still brings the dropdown.
        that is the link you remove, so putting it down there is what you want 
        */}
              </summary>
              <ul className="p-2 bg-black text-white">
              <li><a href="/for-dev">Web2-to-Web3</a></li>
            <li><a href="/for-dev">Payment</a></li>
            <li><a href="/for-dev">DeFi</a></li>
            <li><a href="/for-dev">Gaming</a></li>
          </ul>
              </details></li>
      
        <li>
        <details>
        <summary><a href="/publish-api">
              <button
                className="font-medium flex items-center"
                style={{color: "white" }}
              >
                 Publish Your API
              </button>
              </a></summary>
              </details></li>
              <li>
        <details>
        <summary><a href="/signup-form">
              <button
                className="font-medium flex items-center"
                style={{color: "white" }}
              >
                 Community
               
              </button>
              </a></summary>
              </details>
              </li>

              <li>
        <details>
        <summary><a href="/">
              <button
                className="font-medium flex items-center"
                style={{color: "white" }}
              >
                 Company
                
              </button>
              </a></summary>
              </details></li>

              <li>
        <details>
        <summary><a href="/docs">
              <button
                className="font-medium flex items-center"
                style={{color: "white" }}
              >
                 Docs
                
              </button>
              </a></summary>
              </details>
              </li>
      </ul>
      <div className="hidden gap-2 lg:flex lg:items-center ml-12">
      <a href="https://twitter.com/morlabs_"><i className="fa-brands fa-twitter text-2xl not-italic opacity-75 pr-5" /></a>
      <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75 pr-5"></i>
      <i className="fa-brands fa-github text-2xl not-italic opacity-75"></i>
      </div>
    </div>
    <div className="navbar-end">
      <a className="btn text-sm" >Connect wallet</a>
    </div>
  </div>
  </div> 
  );
};

export default Navbar;


/*
Just add the list in the dropdown as normal list items, then when the user clicks on the, it'll take them to the UI that is the same with the dashboard.
 Do you have anything I can draw on??
 i understend with u mean. i guess just clicking the dev botton should take one to the dev page. this...hold on
 you get?

 I do, however a list like this one on the daisyUI site. Then inside that list, we would have DeFi, Gaming, payments and web2-to-web3. When the user clicks on any of the options, it will then take them to the page that looks like the dashboard. Then that's where you'd have the grid of all the API's and then SDKs.

 So all the Api's would be arranged like that. But depending on where I clicked o. If the user clicks on Payments, it would thake them to the payments page with all the API's, then he can switch tabs like in the demo video between API and SDK

 You get??
 okay. its time we are considering, so ones the site is live, i can add that later. right?

 No wahala. Just add the list in the navbar, only for Developers section, then let's fix up the rest of the project first to stop giving that material UI issue

 let do this stop giving that material UI issue first

 No wahala. Let me start generating the code for the rest of the components. I'm using AI to convert the code
Make I no stress you my boss. You don try abeg. 
abeg stress me today is the deadline. if we no submit our work is in vain.

No wahala boss

Make I generate the rest of the code. okay
 */