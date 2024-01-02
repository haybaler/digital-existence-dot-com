// components/AllBlogs.tsx
import { Blog } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface AllBlogsProps {
  data: Blog[];
}

const AllBlogs: React.FC<AllBlogsProps> = ({ data }) => {
  return (
    <div className="flex gap-7">
      {data?.map((blog, index) => (
        <div key={index} className="border border-black p-3">
          <Link href={`/blogs/${blog?.slug?.current}`}> {blog?.title}</Link>
          <Image
            src={blog?.mainImage?.asset?.url || ""}
            alt=""
            width={100}
            height={100}
          />
          {/* Render specific properties of the author object */}
          author: {blog.author?.name}
          {blog?.categories?.map((item, index) => {
            return (
              <div key={index}>
                <Link href="/"> {item?.title}</Link>
                <br />
                {item?.description}
              </div>
            );
          })}
        </div>
        // Add other blog properties as needed
      ))}
    </div>
  );
};

export default AllBlogs;
