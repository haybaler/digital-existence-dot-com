import Link from 'next/link'
import React, { useRef } from 'react'
import { Variants, motion, useInView } from "framer-motion"

function Banner({ title, content, link, bg }: any) {
   
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
                duration: 0.5
            }
        }
    };

    return (
        <motion.section
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className=''>
            <div className='container mx-auto min-h-[480px] flex items-center !bg-center !bg-cover !bg-no-repeat py-[7.5rem] border border-black md:px-0 px-10'
            style={{
                background: `url(${bg ? bg : '/images/main-bg.jpg'})`,
              }}
            >
                <div className='w-full'>
                    <motion.h1
                        variants={fadeInUp}
                        className='sm:text-[64px] sm:leading-[80px] text-4xl font-normal text-center text-black bg-white border-[3px] border-black max-w-[719px] mx-auto py-2'>
                        {title}
                    </motion.h1>
                    {content && <motion.p
                        variants={fadeInUp}
                        className='sm:text-[20px] sm:leading-[34px] text-base font-normal text-center text-black bg-white border-[3px] border-black max-w-[719px] mx-auto py-2 my-3'>
                        {content}
                    </motion.p>}
                    {link && <motion.span variants={fadeInUp}>
                        <Link href={`${link}`} className='text-sm font-normal uppercase text-black bg-white hover:bg-neutral-200 py-4 px-9 border-[3px] border-black flex w-fit mx-auto mt-10'>
                            Learn More
                        </Link>
                    </motion.span>}
                </div>
            </div>
        </motion.section>
    )
}

export default Banner