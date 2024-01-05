import BlogSingle from "@/components/BlogSingle";
import { Blog } from "@/lib/types";
import React from "react";
import { client } from "../../../sanity/lib/client";
import { fetchSingleBlog } from "@/lib/api/blog";
import { GetStaticPaths, GetStaticProps } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";

interface PageProps {
  blog: Blog;
}

const Page: React.FC<PageProps> = ({ blog, navMenuData }: any) => {
  console.log(blog, "@blog single");
  return (
    <>
      <Header data={navMenuData} />
      <BlogSingle data={blog} />
      <Footer data={navMenuData} />
    </>
  );
};

export default Page;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: { slug: { current: string } }[] = await client.fetch(
    `*[_type == "blog"]`
  );

  const paths = posts.map((post) => ({
    params: {
      slug: post?.slug?.current,
    },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const blog = await fetchSingleBlog(ctx?.params?.slug as string);
    return {
      props: { blog, error: null },
    };
  } catch (error) {
    return {
      props: { blog: null, error: error, notFound: true },
    };
  }
};
