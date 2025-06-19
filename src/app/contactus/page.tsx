"use client";
import React from "react";
import { BackgroundBeams } from "../ui/background-beams";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-[50rem] w-full rounded-md bg-neutral-950 absolute top-0  flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact Us
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          We&apos;re here to help with any questions about our courses,
          programs, or events. Reach out and let us know how we can assist you
          in your musical journey.
        </p>
        <form>
          <input
            type="text"
            placeholder="hi@manuarora.in"
            className="rounded-lg px-3 py-2 border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700"
          />
          <textarea
            name="name"
            id="name"
            placeholder="Your Text"
            className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-700 px-3 py-2 h-44"
          ></textarea>
          <div className="flex mt-4 ml-3 ">
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 px-7 py-2"
            >
              <span>Send Message</span>
            </HoverBorderGradient>
          </div>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}
