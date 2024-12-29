import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Desktop, Mobile } from "../Layout/Responsive";
import Logo from "@/assets/images/Logo.png";
const NAV_ITEMS = [
  { path: "/", label: "Home" },
  // { path: "/aboutus", label: "About" },
  { path: "/blogs", label: "Blogs" },
  { path: "/shop", label: "Shop" },
  //   { path: "/contact", label: "Contact Us", isButton: true },
];

const Navbar = ({ type, setOpenModal }) => {
  const router = useRouter();

  const styles = useMemo(
    () => ({
      // backgroundColor: type === "dark" ? "bg-[#15181C]" : "bg-white",
      // textColor: type === "dark" ? "text-white" : "text-[#15181C]",
      // buttonBg: type === "dark" ? "bg-[#24272B]" : "bg-[#14171B]",
      backgroundColor: type === "bg-white",
      textColor: type === "text-[#15181C]",
      buttonBg: type === "bg-[#14171B]",
    }),
    [type]
  );

  const NavLink = ({ path, label, isButton }) => {
    const isActive = router.pathname === path;
    const baseStyles = `${styles.textColor} ${isActive ? "relative" : ""}`;
    const buttonStyles = isButton
      ? `${styles.buttonBg} text-white px-3.5 py-2 rounded-full`
      : baseStyles;

    return (
      <Link href={path} className={`${buttonStyles}`}>
        {label}
        {isActive && (
          <div className="absolute bottom-[-5px] rounded left-0 w-6 h-0.5 bg-orange-500"></div>
        )}
      </Link>
    );
  };

  const LogoFunc = useMemo(
    () => <Image src={""} alt="Company Logo" className=" rounded" />,
    [type]
  );

  const NavIconFunc = useMemo(
    () => (
      <div className="cursor-pointer" onClick={() => setOpenModal(true)}>
        {/* <Image src={NavIcon} alt="Navigation Menu" /> */}
      </div>
    ),
    [setOpenModal]
  );

  return (
    <>
      <Desktop>
        <nav
          className={`flex justify-between items-center lg:px-36 lg:py-2.5 ${styles.backgroundColor}`}
        >
          <div>{LogoFunc}</div>
          <div className="flex gap-5 items-center">
            <ul className="flex gap-5 items-center">
              {NAV_ITEMS.map(({ path, label, isButton }) => (
                <li key={path}>
                  <NavLink path={path} label={label} isButton={isButton} />
                </li>
              ))}
              <li>{NavIconFunc}</li>
            </ul>
          </div>
        </nav>
      </Desktop>

      <Mobile>
        <></>
        <nav
          className={`flex justify-between items-center px-6 py-4 ${styles.backgroundColor}`}
        >
          <div>{LogoFunc}</div>
          <div className="flex gap-5 items-center">
            <ul className="flex gap-5 items-center">
              <li>{NavIconFunc}</li>
            </ul>
          </div>
        </nav>
      </Mobile>
    </>
  );
};

export default Navbar;
