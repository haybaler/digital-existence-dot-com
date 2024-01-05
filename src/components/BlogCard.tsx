import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { Blog } from "@/lib/types";
interface BlogCardProps {
  data: Blog;
}
const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  const date = new Date(data?._createdAt as string);
  const day = date?.getDate();
  const month = date?.toLocaleString("default", { month: "long" });
  const year = date?.getFullYear();
  return (
    <article className="flex flex-col items-start justify-between">
      <div className="relative flex w-full">
        <Image
          src={data?.mainImage?.asset?.url || ""}
          alt=""
          width={399 * 2}
          height={226 * 2}
          className=" w-full h-full rounded-2xl bg-gray-100 object-cover"
        />

        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl">
        <div className="lg:mt-8 md:mt-6 mt-4 flex justify-between items-center gap-x-4 text-xs">
          <time dateTime={data._createdAt} className="text-gray-500">
            {` ${month} ${day}, ${year}`}
          </time>
          {data?.categories?.map((item, index) => {
            return (
              <Link
                key={index}
                href={`/blogs/${data?.slug?.current}`}
                className="relative z-10 capitalize rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
              >
                {item?.title}
              </Link>
            );
          })}
        </div>
        <div className="group relative">
          <h3 className="mt-3 text-lg capitalize font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <Link href={`/blogs/${data?.slug?.current}`}>
              <span className="absolute inset-0 " />
              {data?.title}
            </Link>
          </h3>
          <p className="lg:mt-5 md:mt-3 mt-1 line-clamp-3 text-sm leading-6 text-gray-600">
            {data?.excerpt}
          </p>
        </div>
        <div className="relative lg:mt-8 md:mt-6 mt-3 flex items-center gap-x-4">
          <Image
            src={data?.author?.image?.asset?.url}
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full bg-gray-100"
          />
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">
              <Link href="/">
                <span className="absolute inset-0" />
                {data?.author?.name}
              </Link>
            </p>
            <p className="text-gray-600">{data?.author?.bio}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
