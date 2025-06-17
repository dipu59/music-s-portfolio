"use client";
import { HoverEffect } from "../ui/card-hover-effect";

function HoverEffrct() {
  return (
    <main className=" h-auto py-20 w-full mx-auto flex flex-col justify-center items-center bg-gray-950 ">
      {/* Div 01 */}
      <div className="mb-10">
        <h3 className=" text-center font-semibold text-purple-500 text-lg pb-3 ">
          FEATURED WEBINARS
        </h3>
        <h1 className=" text-center text-3xl md:text-5xl text-gray-900 dark:text-gray-200 font-semibold ">
          Enhance Your Musical Journey
        </h1>
      </div>

      <div className="max-w-7xl h-auto mx-auto px-8">
        <HoverEffect items={projects} />
      </div>

      <div>
        <button className="p-[3px] relative cursor-pointer transition-all duration-300 hover:-translate-y-1 active:scale-95">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            View All webinars
          </div>
        </button>
      </div>
    </main>
  );
}

export default HoverEffrct;

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
