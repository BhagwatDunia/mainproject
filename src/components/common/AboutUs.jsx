import React from "react";
import Image from "next/image";
import about from "@/assets/images/about-us.svg";
import sparkle from "@/assets/images/sparkle.svg";
import backgroundImage from "@/assets/images/backgroundvector.svg";
import { Desktop, Mobile } from "../Layout/Responsive";

const AboutUs = () => {
  const points = [
    "Embark on a Journey of Spiritual Discovery",
    "Immerse in Sacred Teachings, Embrace Transformation",
    "Beyond Words, Into Wisdom",
    "Rooted in Faith, Guided by Purpose",
    "A Holistic Path to Spiritual Growth",
    "From Knowledge to Enlightenment",
    "Awaken Your Soul, Embrace Divine Wisdom",
    "Nurture Your Spirit, Live with Intention",
    "Find Peace, Purpose, and Inner Strength",
  ];

  return (
    <>
      <Desktop>
        <div className="relative overflow-hidden">
          <div className="absolute w-full">
            {" "}
            <Image
              src={backgroundImage}
              alt="Background"
              layout=""
              objectFit="cover"
              className="w-full"
            />
          </div>
          <div className="px-36 py-20 flex flex-col gap-12 z-10">
            <p className="text-5xl font-extrabold  border-l-4 border-l-[#D60A3D] ps-9 max-w-3xl leading-[1.3]">
              Engage & Grow – Start Your Spritual Journey Today
            </p>
            <div className="flex z-10 gap-5">
              <Image src={about} alt="AboutUs" />
              <div className="flex flex-col gap-6">
                {points.map((point) => (
                  <div className="flex gap-2">
                    <Image src={sparkle} alt="AboutUs" />
                    <p className="text-xl text-[#15181C]">{point}</p>
                  </div>
                ))}

                <div className="flex gap-2">
                  <Image src={sparkle} alt="AboutUs" />
                  <p className="text-xl text-[#15181C]">
                    {" "}
                    From Discovery to Conversion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className="relative overflow-hidden px-4 py-6">
          <div className="absolute w-full">
            {" "}
            <Image
              src={backgroundImage}
              alt="Background"
              layout=""
              objectFit="cover"
              className="w-full"
            />
          </div>
          <div className=" flex flex-col gap-12 z-10">
            <p className="text-xl font-extrabold  border-l-4 border-l-[#D60A3D] ps-3 max-w-3xl leading-[1.3]">
              Engage, Convert, Grow – Your Brand’s Mobile Advantage
            </p>
            <div className="flex flex-col">
              <Image src={about} alt="AboutUs" />
              <div className="flex flex-col gap-6">
                {points.map((point) => (
                  <div className="flex gap-2">
                    <Image src={sparkle} alt="AboutUs" />
                    <p className="text-base text-[#15181C]">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default AboutUs;
