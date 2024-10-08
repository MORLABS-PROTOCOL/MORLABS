"use client";

import React from "react";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/outline";
// import { JoinWaitlist } from './hero';
import Link from "next/link";



export function VideoIntro() {
  return (
    <div className="flex justify-center items-center py-10 bg-gradient-to-br from-green-900 via-green-300 to-teal-200 text-black rounded-[46px] max-w-5xl mx-auto p-8">

      <div className="flex flex-col items-center justify-center py-10 mx-8 sm:mx-6 -mt-24 rounded-xl  p-5 md:p-14 shadow-md w-[768px] h-[450px]">
        <h2 className="text-white mb-3 text-center">Get Started with Web3 Development in Minutes</h2>
        <p className="text-white font-normal lg:w-5/14 m-4 text-center">
          Join our developer community and start exploring our API directory and SDK library right away. Easily publish your own APIs and connect with other developers..
        </p>
        <div>
          <Link href="/signup-form" passHref>
            <button
              type="submit"
              className="p-2 border-t border-l border-r border-white bg-gree-500 text-white rounded hover:bg-green-900"
            >
              {/* className="px-6 py-3 bg-green-800 rounded-full hover:bg-green-600 transition duration-300 text-white"style={{ backgroundColor: "#00FF99" }} */}
              JoinWaitlist
            </button>
          </Link>

          {/* <JoinWaitlist/> */}
        </div>

      </div>
    </div>


  );
}

export default VideoIntro;