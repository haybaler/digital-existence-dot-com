"use client";
import Grow_Business from "@/components/grow-business";
import SeoMeta from "@/components/seo";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { client } from "../../sanity/lib/client";
import { Portfolio } from "../../sanity/lib/query";
import PortableText from "react-portable-text";

export default function Landing({ portfolio , slug }) {
  const fadeInUp = {
    offscreen: {
      transform: "translateY(15%)",
      opacity: 0,
    },
    onscreen: {
      transform: "translateY(0)",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };
  return (
 
    <main>
      <SeoMeta
        title=   {portfolio?.title}
        description=  {portfolio?.description}
        url={`https://digital-existence.com/${slug}`}
      />
      <motion.section
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className=' bg-center bg-cover bg-no-repeat py-[7.5rem] md:px-0 px-10 h-[620px] grid items-center justify-center'
          style={{
            background: `url(${portfolio?.image?.asset?.url ? portfolio?.image?.asset?.url : '/images/main-bg.jpg'})`,
          }}
          >
            <motion.h1
              variants={fadeInUp}
              className="sm:text-[64px] sm:leading-[80px] text-4xl font-normal text-center text-black bg-white border-[3px] border-black max-w-[900px] mx-auto py-2 px-5"
            >
              {portfolio?.title}
            </motion.h1>
          </div>
        </div>
      </motion.section>
      <section>
        <div className="container mx-auto px-4 py-16 flex md:flex-row flex-col gap-7 p-3 justify-between">
          <div className="md:w-1/4 w-full grid gap-5">
            <div>
              <h3 className="text-xs leading-5 font-medium uppercase text-black mb-3 md:text-start text-center">
                DESCRIPTION
              </h3>
              <p className="text-xl leading-7 font-normal text-black/50 md:text-start text-center">
                {portfolio?.description}
              </p>
            </div>
            <div>
              <h3 className="text-xs leading-5 font-medium uppercase text-black mb-3 md:text-start text-center">
                WHEN
              </h3>
              <p className="text-xl leading-7 font-normal text-black/50 md:text-start text-center">
                {portfolio?.when}
              </p>
            </div>
            <div>
              <h3 className="text-xs leading-5 font-medium uppercase text-black mb-3 md:text-start text-center">
                WHO
              </h3>
              <p className="text-xl leading-7 font-normal text-black/50 md:text-start text-center">
                {portfolio?.who}
              </p>
            </div>
          </div>
          <div className="md:w-2/3 w-full grid gap-5 content">
            <PortableText
              // Pass in block content straight from Sanity.io
              content={portfolio?.content}
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={{
                h1: (props) => <h1 {...props} />,
                li: ({ children }) => <li>{children}</li>,
              }}
            />
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 py-16 grid gap-10">
          {portfolio?.images?.map((img, idx) => (
            <Image
              key={idx}
              src={img?.asset?.url}
              alt="landing-img"
              width={1140}
              height={700}
              className="mx-auto border border-black"
            />
          ))}
        </div>
      </section>
      <Grow_Business />
    </main>
  );
}

export async function getServerSideProps(pageContext) {
  const slug = pageContext.query.slug;
  const portfolio = await client.fetch(Portfolio, { slug });
  if (portfolio?.length < 1) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      slug,
      portfolio,
      preview: true,
    },
  };
}
