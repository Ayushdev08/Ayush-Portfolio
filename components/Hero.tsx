"use client";

import React from "react";
import { Spotlight } from "./ui/Spotlight"; // ✅ direct import
import { TextGenerateEffect } from "./ui/TextGenerateEffect"; // ✅ direct import
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Spotlight className="top-0 left-0" fill="white" />
      </div>
      <div className="flex justify-center relative z-10">
        <TextGenerateEffect
          words="Crafting pixel-perfect, blazing fast experiences for the web."
          className="text-center text-[40px] md:text-5xl lg:text-6xl font-bold"
        />
      </div>
      <p className="text-center mt-10 text-lg text-neutral-300 max-w-3xl mx-auto">
        I’m Ayush, a full-stack web developer building modern and performance-first websites using Next.js, Tailwind CSS, and MongoDB.
      </p>
      <div className="flex justify-center mt-10">
        <a href="#projects">
          <MagicButton
            title="View Projects"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
