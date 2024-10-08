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
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
          <li><a href="/for-dev">
              <button
                className="font-medium flex items-center"
                style={{color: "white" }}
              >
                For Developers
                {/* <ChevronDownIcon className="w-5 h-5 ml-1" /> */}
              </button>
              </a></li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl ml-5" href="/for-dev">
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
        <summary><a href="/for-dev">
              <button
                className="font-medium flex items-center"
                style={{color: "white" }}
              >
                For Developers
              
              </button>
              </a></summary>
              </details></li>
        {/* <li>
          <details>
            <summary>Parent</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li> */}
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