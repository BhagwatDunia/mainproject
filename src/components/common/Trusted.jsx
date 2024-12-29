import React, { useState } from "react";
import Pagination from "./Pagenation";
import { Desktop, Mobile } from "../Layout/Responsive";

const Trusted = ({ testimonials }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 3;

  const totalPages = Math.ceil(testimonials.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleTestimonials = testimonials.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      <Desktop>
        <div className="flex flex-col px-36 py-20 gap-6 bg-[#F4F5F8]">
          <p className="text-5xl font-extrabold border-l-4 border-l-orange-500 ps-9 max-w-3xl leading-[1.3]">
            People Who Trust Us
          </p>
          <div className="flex gap-3">
            {visibleTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-lg max-w-sm text-gray-600 hover:bg-orange-500 hover:text-white cursor-pointer"
              >
                <div className="">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
                      <p className=" mb-4">{item.role}</p>
                    </div>
                  </div>
                  <p className="">{item.testimonial}</p>
                </div>
              </div>
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            type={"dark"}
          />
        </div>
      </Desktop>
      <Mobile>
        <div className="flex flex-col  py-6 px-4 gap-6 bg-[#F4F5F8]">
          <p className="text-xl font-extrabold border-l-4 border-l-[#D60A3D] ps-3 max-w-3xl leading-[1.3]">
            Trusted By The Best
          </p>
          <div className="flex flex-col gap-3">
            {visibleTestimonials.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg max-w-sm ">
                <div className="hover:bg-[#D60A3D] hover:text-white">
                  <div className="flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-full mr-4"
                    />
                    <div>
                      <h2 className="text-lg font-bold">{item.name}</h2>
                      <p className="text-gray-600 text-sm mb-4">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{item.testimonial}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default Trusted;
