import React from "react";
import Feature1 from "@/assets/images/feature-1.svg";
import Image from "next/image";
import SingleFeature from "./SingleFeature";

const FeatureLayout = ({ features = [], textColor }) => {
  return (
    <>
      {features.map((feature, index) => (
        <SingleFeature feature={feature} index={index} textColor={textColor} />
      ))}
    </>
  );
};

export default FeatureLayout;
