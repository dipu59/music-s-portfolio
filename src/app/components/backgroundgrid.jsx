"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { cn } from "@/lib/utils";

export default function GridBackground() {
  return (
    <div className="relative overflow-hidden flex flex-col h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <h1 className="text-center text-3xl md:text-4xl relative font-semibold py-10">
        Hear our Harmony: Voices of success
      </h1>
      <div className="h-auto rounded-md flex flex-col antialiased bg-transparent      dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "This studio isn’t just four walls and a mic — it’s where my sound came alive. Every beat, every mix felt like magic.",
    name: "Jayden Cross",
    title: "Indie Artist & Vocalist",
  },
  {
    quote:
      "From recording my first hook to mastering my album, the experience was flawless. Real-time feedback made the difference.",
    name: "Lana Vee",
    title: "Pop Artist & Songwriter",
  },
  {
    quote:
      "I’ve worked in dozens of studios, but here? The vibe, the gear, the people — unmatched. I found my creative home.",
    name: "Zayno",
    title: "Music Producer & Beatmaker",
  },
  {
    quote:
      "As a sound engineer, workflow is everything. This setup gave me the speed and precision I need to craft every sonic detail.",
    name: "Mira Sound",
    title: "Mix Engineer",
  },
  {
    quote:
      "I came in with just an idea. I left with a whole track that changed my career. That’s the power of this studio.",
    name: "Kairo Dusk",
    title: "R&B Artist",
  },
];
