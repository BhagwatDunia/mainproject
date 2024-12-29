import React from "react";
import Button from "./Button";
import SmilingMan from "@/assets/images/smiling-man.svg";
import Celebrity from "@/assets/data/saint.png";
import Image from "next/image";
import { Desktop, Mobile } from "../Layout/Responsive";
const HeroSection = () => {
  return (
    <>
      <Desktop>
        <div className="flex gap-6 px-36 items-center justify-between h-[85vh]">
          <div className=" flex flex-col gap-2">
            <p>A Place Of Spritual Happiness</p>
            <p className="font-extrabold text-6xl leading-[90px] max-w-xl">
              Transform your life journey with spritual happiness
            </p>
            <p className="text-xl max-w-2xl">
              Unlock the potential of your inner-self and explore the beauty of
              our culture and religion
            </p>

            <div className="mt-2">
              <Button>Get In Touch</Button>
            </div>
          </div>
          <Image src={Celebrity} alt="SmilingMan" />
        </div>
      </Desktop>
      <Mobile>
        <div className="flex flex-col  px-4  items-center justify-between gap-3">
          <div>
            <Image src={Celebrity} alt="SmilingMan" />
          </div>
          <div className="flex flex-col gap-4 pt-3 pb-10">
            <p className="text-xs">A Trusted Performance Marketing Agency</p>
            <p className="text-2xl font-extrabold">
              Transform your Mobile marketing with AI & ML
            </p>
            <p className="text-base max-w-2xl">
              Unlock the potential of your app business with precision-targeted,
              data-driven campaigns powered by advanced AI & Machine Learning.
            </p>

            <div className="mt-2">
              <Button>Get In Touch</Button>
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default HeroSection;
