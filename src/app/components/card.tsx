"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import { CardData } from "@/lib/data";
import Image from "next/image";

export default function Card() {
  return (
    <div className="bg-black">
      <h4 className=" capitalize py-3 text-center text-lg font-semibold text-purple-500">
        FEATURED COURSES
      </h4>
      <h2 className="text-center pb-10 font-semibold text-3xl md:text-4xl ">
        Learn With the Best
      </h2>
      <div
        
        className="grid grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3   justify-center items-center "
      >
      {CardData.map((items, index) => (
          <div className="max-w-sm p-4  justify-center items-center flex flex-col mx-auto " key={index}>
            <BackgroundGradient className="rounded-[22px]  max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
              <Image
                src={items.path}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
               {items.title}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
               {items.disc}
              </p>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>
          </div>
      ))}
      </div>
    </div>
  );
}
