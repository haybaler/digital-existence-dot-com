// components/AllBlogs.tsx

import { Blog } from "@/lib/types";
import Image from "next/legacy/image";
import Link from "next/link";
import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { MdNavigateNext, MdArrowBackIosNew } from "react-icons/md";
interface AllBlogsProps {
  data: Blog[];
}

const PAGE_SIZE = 6;

const AllBlogs: React.FC<AllBlogsProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalBlogs = data.length;
  const totalPages = Math.ceil(totalBlogs / PAGE_SIZE);

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const currentBlogs = data.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="bg-white lg:py-24 md:py-16 py-12 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the blog
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 lg:gap-y-20 md:gap-y-12 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {currentBlogs.map((blog, index) => (
              <BlogCard data={blog} key={index} />
            ))}
          </div>
          {totalPages > 1 && (
            <div className="md:mt-24 mt-12 flex justify-center items-center">
              <button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className="px-4 py-2 mr-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-md disabled:opacity-50"
              >
                <MdArrowBackIosNew className="text-xl" />
              </button>
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageClick(index + 1)}
                  className={`px-4 py-2 mx-1 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-md ${
                    currentPage === index + 1 ? "bg-gray-800 text-white" : ""
                  }`}
                >
                  {index + 1}
                </button>
              ))}
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className="px-4 py-2 ml-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-md disabled:opacity-50"
              >
                <MdNavigateNext className="text-xl" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
