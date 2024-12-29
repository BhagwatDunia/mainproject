import React, { useEffect, useState } from "react";
import Image from "next/image";
import blog1 from "@/assets/images/blog1.svg";
import blog2 from "@/assets/images/blog2.svg";
import blog3 from "@/assets/images/blog3.svg";
import blog4 from "@/assets/images/blog4.svg";
import ForwardArrow from "@/assets/images/forward-red.svg";
import { Desktop, Mobile } from "@/components/Layout/Responsive";
import Link from "next/link";

const Blog = ({ blogs }) => {
  return (
    <>
      <Desktop>
        <div className="flex flex-col px-36 py-20 gap-6 ">
          <p className=" text-5xl font-extrabold border-l-4 border-l-[#D60A3D] ps-9 max-w-3xl leading-[1.3]">
            Blog's
          </p>
          <div className="grid grid-cols-4 gap-5">
            {blogs.map((blog) => (
              <Link
                key={blog.id}
                className="max-w-[272px] bg-white shadow-lg rounded-xl"
                href={`/blogs/${blog.id}`}
              >
                <div className="relative">
                  <Image
                    src={blog.image}
                    alt="Blog Image"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                </div>

                <div className="p-4">
                  <div className="text-gray-500 text-sm font-medium mb-1 flex items-center justify-between">
                    <span className="text-gray-600 rounded px-2 py-1">
                      {blog.category}
                    </span>
                    <span className="text-[#15181C] text-xs font-semibold">
                      {blog.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#15181C] leading-snug mb-4 h-36">
                    {blog.title}
                  </h3>

                  <button className="text-[#D60A3D] border border-[#D60A3D] hover:bg-red-700 hover:text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center">
                    Read Full Coverage{" "}
                    <Image src={ForwardArrow} alt="Right" className="ms-2" />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Desktop>
      <Mobile>
        <div className="flex flex-col gap-6 py-6 px-4 bg-[#15181C]">
          <p className="text-white text-xl font-extrabold border-l-4 border-l-[#D60A3D] ps-3 max-w-3xl leading-[1.3]">
            Blog's
          </p>
          <div className="flex flex-col gap-5">
            {blogs.map((blog) => (
              <div key={blog.id} className=" bg-white shadow-lg rounded-xl">
                <div className="relative">
                  <Image
                    src={blog.image}
                    alt="Blog Image"
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-xl"
                  />
                </div>

                <div className="p-4">
                  <div className="text-gray-500 text-sm font-medium mb-1 flex items-center justify-between">
                    <span className="text-gray-600 rounded px-2 py-1">
                      {blog.category}
                    </span>
                    <span className="text-[#15181C] text-xs font-semibold">
                      {blog.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#15181C] leading-snug mb-4 h-20">
                    {blog.title}
                  </h3>

                  <button className="text-[#D60A3D] border border-[#D60A3D] hover:bg-red-700 hover:text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center">
                    Read Full Coverage
                    <Image src={ForwardArrow} alt="Right" className="ms-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Mobile>
    </>
  );
};

export default Blog;
