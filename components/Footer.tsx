import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl lg:w-[45vw] md:ml-36 text-center md:text-start">
          Ready to take <span className="text-purple">your {""}</span>digital
          presence to the next level{" "}
        </h1>
        <p className="txet-white-200 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how i can help you
          acheive your goals
        </p>
        <a href="mailto:ponyogesh342@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center space-y-5">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Ponyogesh
        </p>
        <div className="flex items-center md:gap-3 gap-6 ">
          {socialMedia.map(({ id, img, link }) => (
            <div
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              key={id}
            >
              {" "}
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={img} alt="" width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
