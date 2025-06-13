"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Collaborative Jamming",
    description:
      "Jam together with artists, producers, and engineers in real time. Share vibes, exchange ideas, and build tracks as a team—whether you're in the studio or remote. Perfect harmony, zero delay.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Live Session Monitoring",
    description:
      "Hear every beat drop as it happens. Our real-time monitoring tools let you track every take, tweak, and transition instantly. No more waiting—experience music in motion, live and unfiltered.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="/scroll1.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Track Version History",
    description:
      "Never lose your creative flow. With automatic track versioning, you can revisit past takes, restore changes, and experiment fearlessly. Keep your workflow tight and your creativity loose.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Endless Creative Flow",
    description:
      "Don’t let ideas slip away. Our platform is designed to keep your creative momentum alive with continuous recording, real-time collaboration, and seamless project transitions.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full py-8 mt-10">
      <StickyScroll content={content} />
    </div>
  );
}
