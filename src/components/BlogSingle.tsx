import { Blog } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import { PortableText } from "@portabletext/react";
import SingleImageSection from "./PortableImage";
interface BlogSinglePropTypes {
  data?: Blog;
}

const BlogSingle = ({ data }: BlogSinglePropTypes) => {
  const searializedComponents = {
    types: {
      image: ({ value }: any) => <SingleImageSection data={value} />,
    },
  };
  return (
    <div>
      {data?.title}
      <Image
        src={data?.mainImage?.asset?.url}
        alt=""
        width={100}
        height={100}
      />

      {data?.author?.name}

      <div>
        <h3 className="text-3xl">Iconify</h3>
        {data?.myIcon && <Icon icon={data?.myIcon?.name as string} />}
      </div>

      <br />
      <div className="border flex flex-col gap-4">
        <h3 className="text-3xl">Author</h3>
        <Image
          src={data?.author?.image?.asset?.url}
          alt=""
          width={100}
          height={100}
        />
        <p>Name: {data?.author?.name}</p>
        <p>Description: {data?.author?.bio}</p>
      </div>

      <div>
        <PortableText value={data?.body} components={searializedComponents} />
      </div>

      {data?.categories?.map((item, index) => {
        return (
          <div key={index}>
            <Link href="/"> {item?.title}</Link>
            <br />
            {item?.description}
          </div>
        );
      })}
      {data?.publishedAt}
    </div>
  );
};

export default BlogSingle;
