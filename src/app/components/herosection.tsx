import React from "react";
import { Spotlight } from "../ui/Spotlight";
import { Button } from "../ui/moving-border";
function HeroSection() {
  return (
    <main className="z-10 p-4 top-10 md:mt-20 mt-7 pb-20 h-auto md:h-[40rem] w-full rounded-md  ">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="indigo"
      />
      <h1 className=" mt-5 md:mt-0 text-center text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        Master the art of music
      </h1>
      <p className="mt-4 font-normal text-center text-base md:text-lg text-neutral-300 max-w-lg mx-auto px-3 md:px-0">
        Dive into our comprehensive music courses and transform your musical
        journey today. Whether you&apos;re a beginner or looking to refine your
        skills, join us to unlock your true potential.
      </p>
      <div className="text-center mt-4">
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer"
        >
          Explore courses
        </Button>
      </div>
    </main>
  );
}

export default HeroSection;
