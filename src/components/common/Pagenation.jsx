// components/Pagination.js
import React from "react";
import Image from "next/image";
import LightIcon from "@/assets/images/right.svg";
import DarkIcon from "@/assets/images/right-icon.svg";

const Pagination = ({ currentPage, totalPages, onPageChange, type }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className={`p-2 rounded-full border ${
          type == "dark" ? "border-black" : "border-white"
        } py-3 px-6`}
      >
        <Image
          src={type == "dark" ? DarkIcon : LightIcon}
          className="rotate-180"
          alt="Previous"
        />
      </button>

      <div className={`${type == "dark" ? "text-black" : "text-white"}`}>
        {currentPage} / {totalPages}
      </div>

      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-full border ${
          type == "dark" ? "border-black" : "border-white"
        } py-3 px-6`}
      >
        <Image src={type == "dark" ? DarkIcon : LightIcon} alt="Next" />
      </button>
    </div>
  );
};

export default Pagination;
