import { Variants, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ImageBox({ Classes, title, subTitle, content, link, img_url }: any) {
  const fadeInUp: Variants = {
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
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div
        variants={fadeInUp}
        className={`bg-white border-[3px] border-black flex gap-7 p-3 items-center justify-between ${Classes}`}
      >
        <div className="md:w-1/4 w-full">
          <h3 className="text-xs leading-5 font-medium uppercase text-black/50 mb-3 md:text-start text-center">
            {title}
          </h3>
          <h2 className="text-[36px] leading-[50px] font-normal text-black md:text-start text-center">
            {subTitle}
          </h2>
          <p className="text-xl leading-7 font-normal text-black/50 my-7 md:text-start text-center">
            {content}
          </p>
          <Link
            href={link || "/"}
            className="text-xs font-medium uppercase text-white bg-black py-3 px-10 hover:opacity-80 flex w-fit md:ml-0 mr-auto ml-auto"
          >
            LEARN MORE
          </Link>
        </div>
        <div className="md:w-2/3 w-full">
          <Image
            src={img_url || ""}
            alt="about"
            width={693}
            height={533}
            className="w-full"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ImageBox;
