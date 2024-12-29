import React from "react";
import Smartphone from "@/assets/data/krishna.mp4";
import { Desktop, Mobile } from "../Layout/Responsive";

const Media = () => {
  return (
    <>
      <Desktop>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="px-60 py-20 bg-[#F4F5F8]"
        >
          <source src={Smartphone} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Desktop>
      <Mobile>
        <video
          autoPlay
          loop
          muted
          playsInline
          className=" bg-[#F4F5F8] py-4 px-6"
        >
          <source src={Smartphone} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Mobile>
    </>
  );
};

export default Media;
