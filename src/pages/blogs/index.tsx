// pages/index.tsx
import React from "react";
import AllBlogs from "@/components/AllBlogs";
import { Blog } from "@/lib/types";
import { fetchAllBlogs } from "@/lib/api/blog";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface PageProps {
  blogs: Blog[];
  error: any;
}

const Page: React.FC<PageProps> = ({ blogs, error, navMenuData }: any) => {
  console.log(blogs, error, "@blogs...!");
  return (
    <>
      <Header data={navMenuData} />
      <AllBlogs data={blogs} />
      <Footer data={navMenuData} />
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
