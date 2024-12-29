import React from "react";
import Image from "next/image";

const SingleFeature = ({ feature, index, textColor }) => {
  return (
    <div
      key={index}
      className="flex flex-col items-start rounded-lg gap-[16px]"
    >
      {/* Image */}
      <Image
        src={feature.imageSrc}
        alt={feature.altText}
        width={56}
        height={56}
        className=" object-contain"
        loading="lazy"
      />

      {/* Title */}
      <h2 className={`text-2xl font-bold ${textColor}`}>{feature.title}</h2>

      {/* Description */}
      <p className={`${textColor} font-normal leading-relaxed max-w-96`}>
        {feature.description}
      </p>
    </div>
  );
};

export default SingleFeature;
