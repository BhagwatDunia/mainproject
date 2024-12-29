import Link from "next/link";
import React, { useMemo } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "@/assets/images/Logo.png";
import cancelIcon from "@/assets/images/cancelIcon.svg";
import { Desktop, Mobile } from "../Layout/Responsive";
import Button from "./Button";

const NAV_ITEMS = [
  { title: "Home", path: "/" },
  { title: "AL & ML Services", path: "/ai-ml-services" },
  { title: "Advertisers", path: "/advertisers" },
  { title: "Publishers", path: "/publishers" },
  { title: "About Us", path: "/about" },
  { title: "Blogs", path: "/blogs" },
];

const Modal = ({ setOpenModal }) => {
  const router = useRouter();

  const LogoSection = useMemo(
    () => (
      <Link href="/" className="mb-4">
        <div className="flex items-center">
          <Image
            src={Logo}
            alt="MobiSaturn"
            width={150}
            height={40}
            className="cursor-pointer"
          />
        </div>
      </Link>
    ),
    []
  );

  const CloseButton = useMemo(
    () => (
      <div
        className="cursor-pointer py-3"
        onClick={() => setOpenModal(false)}
        role="button"
        aria-label="Close menu"
      >
        <Image src={cancelIcon} alt="Close menu" />
      </div>
    ),
    [setOpenModal]
  );

  const NavLink = ({ title, path }) => {
    const isActive = router.pathname === path;
    return (
      <Link
        href={path}
        className={`text-3xl transition-colors duration-200 hover:text-gray-600 
          ${isActive ? "border-l-4 border-red-500 pl-4" : ""}`}
        onClick={() => setOpenModal(false)}
      >
        {title}
      </Link>
    );
  };

  const ContactSection = () => (
    <>
      <h2 className="text-5xl font-bold mb-4">Ready to Grow?</h2>
      <h3 className="text-5xl font-bold mb-8">Get in Touch</h3>
      <Button>Get In Touch</Button>
    </>
  );

  return (
    <>
      <Desktop>
        <div className="flex justify-between items-start px-36 py-4 z-10">
          <div className="flex flex-col space-y-6 w-64">
            {LogoSection}
            <nav className="py-24 flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.title} {...item} />
              ))}
            </nav>
          </div>

          <div className="fixed top-0 right-0 w-1/2 h-[100vh] bg-[#2A0413] text-white transform transition-transform duration-300 ps-24">
            <div className="absolute right-36">{CloseButton}</div>
            <div className="py-64">
              <ContactSection />
            </div>
          </div>
        </div>
      </Desktop>

      <Mobile>
        <div className="flex flex-col h-[100vh]">
          <div className="flex justify-between items-center px-5 py-3">
            {LogoSection}
            {CloseButton}
          </div>

          <div className="flex flex-col h-[95vh] gap-4 justify-between">
            <nav className="flex flex-col gap-6 px-4 pt-5">
              {NAV_ITEMS.map((item) => (
                <NavLink key={item.title} {...item} />
              ))}
            </nav>

            <div className="bg-[#2A0413] text-white transform transition-transform duration-300 px-4 py-5">
              <ContactSection />
            </div>
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default Modal;
