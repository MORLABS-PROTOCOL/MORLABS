"use client";

import React from "react";
import { UserIcon } from "@heroicons/react/24/solid";
import TestimonialCard from "../components/testimonial-card";
import Image from "next/image";
import { FiArrowLeftCircle, FiArrowRightCircle  } from "react-icons/fi";


// const TESTIMONIALS = [
//   {
//     feedback:
//       "It has been a game-changer for my business. Their dedication, expertise, and attention to detail have truly set them apart. I highly recommend their services!",
//     client: "Samuel Bassey",
//     title: "CEO Kextraco.",
//     img: "/image/avatar1.jpg",
//   },
//   {
//     feedback:
//       "It understood my unique needs and delivered a tailored solution promptly. Their customer support is top-notch, and I appreciate their commitment.",
//     client: "John Deo",
//     title: "MARKETING @ APPLE INC.",
//     img: "/image/avatar2.png",
//   },
//   {
//     feedback:
//       "They not only met but exceeded our expectations. Their innovative approach and technical proficiency have been instrumental in our success.",
//     client: "Genzy Bassey",
//     title: "CFO @ APPLE INC..",
//     img: "/image/avatar3.png",
//   },
// ];

export function Testimonials() {
  return (
    <div className="bg-black px-5 text-white py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Why Devs Love Morlabs</h2>
        <div className="flex justify-center items-center">
        <p className="text-lg text-white w-[250px] text-center">Over 100+ Developers use Morlabs for Web3 integration</p>
   
        </div>
         </div>

      {/* Testimonials container */}
      <div className="flex items-center gap-x-6 w-full flex-row mg:flex-row justify-center overflow-scroll">
        {/* First testimonial */}
        <div className="border border-teal-200 hidden md:flex flex-col justify-start items-start rounded-xl py-14 p-8 max-w-[350px] h-[300px] w-full">
          <p className="text-md text-gray-400">
            &quot;Thanks to Morlabs, I was able to significantly accelerate the development of our new NFT marketplace on Solana.&quot;
          </p>
          <p className="font-bold mt-4 text-md">- Faith Igwe</p>
          <p className="text-sm text-gray-400">Project Manager</p>
        </div>

        {/* Highlighted testimonial */}
        <div className="bg-gradient-to-br from-green-200  via-teal-200 to-white text-black p-8 rounded-3xl h-auto max-w-[550px] py-10 w-full mx-auto">
          {/* className="bg-gradient-to-b from-teal-400 to-green-500 text-black rounded-xl p-8 w-[350px]"> */}
          <h3 className="text-2xl font-bold mb-4">Morlabs has been a game-changer!</h3>
          <p className="mb-5 text-xl font-medium">
            &quot;I&apos;ve been struggling to find high-quality APIs for my Solana-based NFT marketplace.
            </p>
            
            <p className="mb-5 text-xl font-medium"> Morlabs has been a game-changer! </p> 
              
              <p className="mb-5 text-xl font-medium">Their API directory is incredibly comprehensive, and the pre-built SDKs have saved me countless hours of development time.&quot;
          </p>
          <p className="mb-5 text-xl font-medium">
            &quot;The testing environment has also been invaluable for ensuring seamless integration.&quot;
          </p>
          <div className="flex items-center space-x-4">
            <Image
              width={50}
              height={50}
              src="/image/avatar1.jpg" // Placeholder image path
              alt="Samuel Basssey"
              className="rounded-full"
            />
            <div>
              <p className="font-bold">Samuel Bassey</p>
              <p className="text-md text-black">Solana DApp Dev, CEO Kextraco</p>
            </div>
          </div>
        </div>

        {/* Third testimonial */}
        <div className="border border-teal-200 h-[300px] hidden md:flex p-8 max-w-[350px] flex-col justify-start items-start rounded-xl py-14 w-full">
          <p className="text-sm text-gray-400">
            &quot;Morlabs has been a fantastic addition to my workflow. The API documentation is clear and concise, making it easy to understand and implement.&quot;
          </p>
          <p className="font-bold mt-4">- Dandy Anonymous</p>
          <p className="text-sm text-gray-400">Lead Dev, Solana Labs</p>
        </div>
      </div>

      {/* Arrows for navigation */}
      <div className="flex justify-center mt-8 space-x-4">
       <FiArrowLeftCircle size={60} className="text-white" />
        <FiArrowRightCircle size={60} className="text-white" />
      </div>
    </div>
  );
}


export default Testimonials;
