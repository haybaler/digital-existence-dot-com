// pages/index.tsx
import React from "react";
import AllBlogs from "@/components/AllBlogs";
import { Blog } from "@/lib/types";
import { fetchAllBlogs } from "@/lib/api/blog";

interface PageProps {
  blogs: Blog[];
  error: any;
}

const Page: React.FC<PageProps> = ({ blogs, error }) => {
  console.log(blogs, error, "@blogs...!");
  return (
    <>
      <AllBlogs data={blogs} />
    </>
  );
};

export default Page;

export async function getStaticProps() {
  try {
    const blogs = await fetchAllBlogs();
    return {
      props: { blogs, error: null },
    };
  } catch (error) {
    return {
      props: { blogs: null, error: error },
    };
  }
}
