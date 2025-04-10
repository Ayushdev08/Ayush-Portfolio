"use client";

import React from "react";
import dynamic from "next/dynamic";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

// ✅ Dynamically import Spotlight with `ssr: false` and proper typing
const Spotlight = dynamic(() => import("./ui/Spotlight").then((mod) => mod.Spotlight), {
  ssr: false,
});

const Hero = () => {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      {/* Spotlights for background effect */}
      <div aria-hidden className="absolute inset-0 z-0">
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] text-center flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-blue-100 max-w-80 mb-4">
            Dynamic Web Magic with Next.js
          </h2>

          <TextGenerateEffect
            className="text-[40px] md:text-5xl lg:text-6xl mb-6"
            words="Transforming concepts into seamless user experiences"
          />

          <p className="text-sm md:text-lg lg:text-2xl mb-6 text-white/80">
            Hi, I&apos;m Ayush Varma, a full-stack Web3 developer based in India.
          </p>

          <a href="#projects" aria-label="Scroll to Projects">
            <MagicButton
              title="Share my Work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
