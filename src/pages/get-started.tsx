"use client";

import React from "react";
import Image from "next/image";
import { PlayIcon } from "@heroicons/react/24/outline";
// import { JoinWaitlist } from './hero';
import Link from "next/link";



export function VideoIntro() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex justify-center flex-col items-center mx-5 py-20 bg-gradient-to-br from-green-900 via-green-500 to-teal-500 rounded-[46px] max-w-5xl p-8">

    
<h1 className="text-white mb-3 text-center text-3xl font-bold w-[90%] lg:w-[50%]">Get Started with Web3 Development in Minutes</h1>
<p className="text-white text-lg font-normal lg:w-5/14 m-4 text-center w-[90%] lg:w-[55%]">
  Join our developer community and start exploring our API directory and SDK library right away. Easily publish your own APIs and connect with other developers..
</p>
<div>
  <Link href="/signup-form" passHref>
    <button
      type="submit"
      className="p-2 border-t border-[2px] border-r border-white bg-gree-500 text-white rounded hover:bg-green-600"
    >
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