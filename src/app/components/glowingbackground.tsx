"use client";
import React from "react";
import { Vortex } from "../ui/vortex";
import { AnimatedTooltip } from "../ui/animated-tooltip";


export function VortexDemoSecond() {
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center">
          Meet Our Instructors
        </h2>
        <p className="text-white text-sm md:text-lg  mt-6 text-center">
          Discover the talented professionals who will guide your musical
          journey
        </p>
       <div className="flex flex-row items-center justify-center  my-4 w-full">
      <AnimatedTooltip items={people} />
              </div>
              <h2 className='text-center'>Hello World</h2>
      </Vortex>
    </div>
  );
}


const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "/dev1.avif",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "/dev2.avif",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "/dev2.avif",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "/dev3.avif",
  },
];