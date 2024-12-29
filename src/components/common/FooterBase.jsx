import React from "react";
import Logo from "@/assets/images/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { Desktop, Mobile } from "../Layout/Responsive";

const FooterBase = () => {
  const footerLinks = [
    { title: "© BhagwatDunia 2025", path: "" },
    // { title: "Careers", path: "/career" },
    // { title: "About Us", path: "/ai-ml-services" },
    // { title: "Contact Us", path: "/advertisers" },
    // { title: "Privacy Policy", path: "/publishers" },
  ];

  return (
    <>
      <Desktop>
        <footer className="flex justify-between items-center px-36 py-2.5 bg-[#15181C]">
          <div>{/* <Image src={Logo} alt="Company Logo" /> */}</div>
          <div className="flex gap-5 items-center">
            <ul className="flex gap-5 items-center">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="text-white">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </Desktop>

      <Mobile>
        <footer className="flex flex-col justify-between gap-3 px-6 py-4 bg-[#15181C]">
          <div>
            <Image src={Logo} alt="Company Logo" />
          </div>
          <div className="gap-5 items-center">
            <ul className="flex flex-col gap-5">
              {footerLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <li className="flex justify-between">
                    <Link href={link.path} className="text-white">
                      {link.title}
                    </Link>
                    <Image src={Logo} alt="Right" className="me-3" />
                  </li>
                  {index < footerLinks.length - 1 && <hr />}
                </React.Fragment>
              ))}
              <hr />
              <li className="text-white m-auto">MobiSaturn © 2024</li>
            </ul>
          </div>
        </footer>
      </Mobile>
    </>
  );
};

export default FooterBase;
