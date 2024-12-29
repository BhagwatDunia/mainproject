import React from "react";
import Partner1 from "@/assets/images/partner-1.svg";
import Partner2 from "@/assets/images/partner-2.svg";
import Partner3 from "@/assets/images/partner-3.svg";
import Partner4 from "@/assets/images/partner-4.svg";
import Image from "next/image";
import { Desktop, Mobile } from "../Layout/Responsive";

const Partner = () => {
  return (
    <>
      <Desktop>
        <div className="flex flex-col px-2 py-20 gap-6 items-center">
          <div className="flex gap-5 items-center">
            <hr
              className="w-[120px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(21, 24, 28, 0.25) 0%, rgba(21, 24, 28, 0) 100%)",
              }}
            />
            <p className="text-[#15181C80] text-center">Our MMP Partners</p>
            <hr
              className="w-[120px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(21, 24, 28, 0.25) 0%, rgba(21, 24, 28, 0) 100%)",
              }}
            />
          </div>

          <div className="relative overflow-hidden max-w-5xl mx-auto">
            <div className="flex animate-scroll whitespace-nowrap">
              {/* First set of images */}
              <div className="flex gap-5 min-w-full justify-center">
                <Image src={Partner1} alt="Partner1" />
                <Image src={Partner2} alt="Partner2" />
                <Image src={Partner3} alt="Partner3" />
                <Image src={Partner4} alt="Partner4" />
              </div>
              {/* Duplicate set for seamless scrolling */}
              <div className="flex gap-5 min-w-full justify-center">
                <Image src={Partner1} alt="Partner1" />
                <Image src={Partner2} alt="Partner2" />
                <Image src={Partner3} alt="Partner3" />
                <Image src={Partner4} alt="Partner4" />
              </div>
            </div>
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className="flex flex-col py-6  gap-5 items-center">
          <div className="flex gap-5 items-center">
            <hr
              className="w-[80px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(21, 24, 28, 0.25) 0%, rgba(21, 24, 28, 0) 100%)",
              }}
            />
            <p className="text-[#15181C80] text-center">Our MMP Partners</p>
            <hr
              className="w-[80px]"
              style={{
                background:
                  "linear-gradient(90deg, rgba(21, 24, 28, 0.25) 0%, rgba(21, 24, 28, 0) 100%)",
              }}
            />
          </div>

          <div className="relative overflow-hidden  mx-auto">
            <div className="flex animate-scroll whitespace-nowrap">
              {/* First set of images */}
              <div className="flex gap-10 min-w-full justify-center">
                <Image src={Partner1} alt="Partner1" />
                <Image src={Partner2} alt="Partner2" />
                <Image src={Partner3} alt="Partner3" />
                <Image src={Partner4} alt="Partner4" />
              </div>
              {/* Duplicate set for seamless scrolling */}
              {/* <div className="flex gap-0 min-w-full justify-center">
                <Image src={Partner1} alt="Partner1" />
                <Image src={Partner2} alt="Partner2" />
                <Image src={Partner3} alt="Partner3" />
                <Image src={Partner4} alt="Partner4" />
              </div> */}
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default Partner;
