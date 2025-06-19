"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/app/ui/3d-card";
import Image from "next/image";

const corceData = [
  {
    id: "1",
    title: "Beginner Guitar",
    discription:
      "Learn the basics of guitar chords, strumming, and melodies.hands-on techniques.hands-on techniques.",
    path: "/courses/blues.jpg",
  },
  {
    id: "2",
    title: "Piano Essentials",
    discription:
      "Master the foundation of piano playing with hands-on techniques.hands-on techniques.",
    path: "/courses/classical-music.jpg",
  },
  {
    id: "3",
    title: "Vocal Training",
    discription:
      "Improve your pitch, tone, and breathing with expert vocal coaches.",
    path: "/courses/drumming.jpg",
  },
  {
    id: "4",
    title: "Music Theory 101",
    discription:
      "Understand the core structure of music, notes, and scales.hands-on techniques.",
    path: "/courses/edm.jpg",
  },
  {
    id: "5",
    title: "Drum Basics",
    discription:
      "Explore rhythm, timing, and coordination with beginner drum lessons.hands-on techniques.",
    path: "/courses/guitar.jpg",
  },
  {
    id: "6",
    title: "Advanced Guitar Techniques",
    discription:
      "Dive into solos, fingerstyle, and advanced chord progressions.hands-on techniques.",
    path: "/courses/jazz.jpg",
  },
  {
    id: "7",
    title: "Electronic Music Production",
    discription: "Create beats and songs using digital audio workstations.",
    path: "/courses/music-prod.jpg",
  },
  {
    id: "8",
    title: "Violin for Starters",
    discription: "Learn how to hold, bow, and play simple tunes on the violin.",
    path: "/courses/piano.jpg",
  },
  {
    id: "9",
    title: "Songwriting Workshop",
    discription:
      "Write lyrics and compose melodies that connect with listeners.",
    path: "/courses/song-writing.jpg",
  },
  {
    id: "10",
    title: "Band Performance",
    discription:
      "Collaborate with fellow musicians and perform live as a band.hands-on techniques.",
    path: "/courses/vocalist.jpg",
  },
  {
    id: "11",
    title: "Band Performance",
    discription:
      "Collaborate with fellow musicians and perform live as a band.hands-on techniques.",
    path: "/courses/piano.jpg",
  },
];

export default function ThreeDCardDemo() {
  return (
    <>
      <h1 className="text-center font-bold text-5xl my-8 md:text-6xl lg:text-7xl">
        All courses ({corceData.length}){" "}
      </h1>
      <div className=" flex flex-wrap justify-center items-center gap-10 ">
        {corceData.map((items) => (
          <CardContainer className="inter-var cursor-pointer" key={items.id}>
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {items.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                {items.discription}
              </CardItem>
              <CardItem
                translateZ="100"
                rotateX={20}
                rotateZ={-10}
                className="w-full mt-4"
              >
                <Image
                  src={items.path}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  translateX={-40}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  translateX={40}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Sign up
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </>
  );
}
