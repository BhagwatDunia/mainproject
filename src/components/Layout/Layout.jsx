import React, { useState } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { useRouter } from "next/router";
import Modal from "../common/Modal";
import FooterBase from "../common/FooterBase";

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      {openModal ? (
        <>
          <Modal setOpenModal={setOpenModal} />
        </>
      ) : (
        <>
          <Navbar
            type={pathname === "/" ? "light" : "dark"}
            setOpenModal={setOpenModal}
          />
          {children}
          <FooterBase />
        </>
      )}
    </>
  );
};

export default Layout;
