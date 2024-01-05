// pages/blogs/[slug].tsx

import { Blog } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import { PortableText } from "@portabletext/react";

import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";
import SingleImageSection from "./PortableImage";
import { useRouter } from "next/router";

interface BlogSinglePropTypes {
  data?: Blog;
}

const BlogSingle = ({ data }: BlogSinglePropTypes) => {
  const searializedComponents = {
    types: {
      image: ({ value }: any) => <SingleImageSection data={value} />,
    },
  };
  const date = new Date(data?._createdAt as string);
  const day = date?.getDate();
  const month = date?.toLocaleString("default", { month: "long" });
  const year = date?.getFullYear();

  const router = useRouter();

  return (
    <div className="max-w-2xl mx-auto mt-8 px-5">
      <h1 className="lg:text-4xl  text-3xl font-bold mb-4 text-gray-800 capitalize">
        {data?.title}
      </h1>
      <div className="flex items-center justify-between md:flex-nowrap  flex-wrap pr-5">
        <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
          <time dateTime="2023-01-01">{` ${month} ${day}, ${year}`}</time>
          {data?.categories?.map((item, index) => (
            <Link
              key={index}
              href={`/blogs/${data?.slug?.current}`}
              className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
            >
              {item?.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center md:gap-x-4 gap-x-2 mb-4">
          {/* Facebook Share Button */}
          <FacebookShareButton url={router.asPath}>
            <FaFacebook size={28} />
          </FacebookShareButton>
          {/* LinkedIn Share Button */}
          <LinkedinShareButton url={router.asPath} title={data?.title || "#"}>
            <FaLinkedin size={28} />
          </LinkedinShareButton>
          {/* Instagram Share Button */}
          <Link
            href={`https://www.instagram.com/?url=${router.asPath}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={28} />
          </Link>
          {/* WhatsApp Share Button */}
          <WhatsappShareButton url={router.asPath} title={data?.title || "#"}>
            <FaWhatsapp size={28} />
          </WhatsappShareButton>

          {/* Your existing code */}
        </div>
      </div>
      <div className="relative overflow-hidden rounded-2xl">
        <Image
          src={data?.mainImage?.asset?.url}
          alt=""
          width={700}
          height={256}
          className="w-full h-64 object-cover transition-transform transform hover:scale-105"
        />
      </div>
      <div className="mt-8 text-gray-700">
        <div>
          {" "}
          {data?.myIcon && <Icon icon={data?.myIcon?.name as string} />}
        </div>
        <div className="text-lg leading-7 body-text">
          <PortableText value={data?.body} components={searializedComponents} />
        </div>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <Image
          src={data?.author?.image?.asset?.url}
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 rounded-full bg-gray-100"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-800">
            <Link href="/" className="author-link">
              Author Name : {data?.author?.name}
            </Link>
          </p>
          <p className="text-gray-600">{data?.author?.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogSingle;
