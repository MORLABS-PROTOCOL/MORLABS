"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import React from 'react';

const FixedPlugin = () => { 
  return (
    <a href="/" target="_blank">
      <Button
        color="white"
        size="sm"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
        placeholder=""
        onPointerEnterCapture={() => {}}
        onPointerLeaveCapture={() => {}}
      >

        <Image
          width={128}
          height={128}
          className="w-5 h-5"
          alt="Morlabs"
          src="/favicon.jpg"
        />{" "}
        Morlabs-Chain
      </Button>
    </a>
  );
}
export default FixedPlugin;