import React from "react";
import FeatureVideo from "@/assets/data/feature-video.mp4";
import Image from "next/image";
import FeatureLayout from "./FeatureLayout";
import Feature1 from "@/assets/images/feature-1.svg";
import Feature2 from "@/assets/images/feature-2.svg";
import Feature3 from "@/assets/images/feature-3.svg";
import { Desktop, Mobile } from "../Layout/Responsive";

const Feature = ({ featureData }) => {
  return (
    <>
      <Desktop>
        <div className="relative py-20 bg-orange-500">
          <Image />

          <div className="relative flex gap-12 px-36 z-10">
            <div className="flex gap-3.5">
              <FeatureLayout features={featureData} textColor="text-white" />
            </div>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className="relative  bg-black">
          <Image />

          <div className="relative z-10">
            <div className="flex flex-col px-4 py-6 gap-5">
              <FeatureLayout features={featureData} textColor="text-white" />
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default Feature;
