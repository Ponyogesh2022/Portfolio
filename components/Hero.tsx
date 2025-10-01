"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { GridBackgroundDemo } from "./ui/GridBackgroundDemo";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/TextGeneratorEffect";
const Hero = () => {
  return (
    <div className="pb-20 pt-10">
      <div>
        <Spotlight
          className="-top-40 -left-40 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div>
        <GridBackgroundDemo />
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            {/* <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic Web Magic with NEXT JS
            </h2> */}
            <TextGenerateEffect
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
              words="Dynamic Web Magic with NEXT JS"
            />
            <div className="space-y-3">
              <p className="text-center tracking-wide text-base md:text-xl lg:text-2xl font-medium">
                Hi, I'm{" "}
                <span className="font-bold ">Ponyogesh P</span>{" "}
                👋
              </p>
              <p className="text-center tracking-wide text-sm md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                A Software Engineer crafting{" "}
                <span className="font-semibold">fast</span>,
                <span className="font-semibold"> dynamic</span>, and
                <span className="font-semibold"> scalable</span> web
                experiences.
              </p>
            </div>

            <a href="#projects">
              <MagicButton
                title="Show My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
