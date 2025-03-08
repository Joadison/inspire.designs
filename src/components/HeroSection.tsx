"use client";

import type React from "react";
import Image from "next/image";

export default function HeroSection() {
 
  return (
    <div className="relative w-full flex flex-col justify-center items-center min-h-screen">
      <div className="relative z-10">
        <Image
          src="/InspireDesigns.png"
          alt="InspireDesigns"
          width={450}
          height={460}
          className="rounded-md select-none"
        />
      </div>
    </div>
  );
}
