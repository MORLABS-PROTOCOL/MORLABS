import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"


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
    <div className=" w-full max-w-full flex container fixed top-0 z-50 border-0">
      <div className="navbar text-white items-center" style={{ background: 'radial-gradient(circle, #4ade80, black)' }}>
        <div className="navbar-start">
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
                  style={{ color: "black" }}
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
                      style={{ color: "black" }}
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
                      style={{ color: "black" }}
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
                      style={{ color: "black" }}
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
                      style={{ color: "black" }}
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
            <Image alt="morlabs_logo" width={150} height={50} src="/logos/morlabs-logo.svg" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">
            <li>
              <details>
                <summary>
                  <button
                    className="font-medium flex items-center"
                    style={{ color: "white" }}
                  >
                    For Developers

                  </button>
                  
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
                    style={{ color: "white" }}
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
                    style={{ color: "white" }}
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
                    style={{ color: "white" }}
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
                    style={{ color: "white" }}
                  >
                    Docs

                  </button>
                </a></summary>
              </details>
            </li>
          </ul>

        </div>
        <div className="navbar-end">
          <a className="btn btn-outline text-white" >Connect wallet</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
