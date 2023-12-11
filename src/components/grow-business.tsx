import { Variants, motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

function Grow_Business() {
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
        >
            <div className='container mx-auto px-4 py-16 bg-zinc-100'>
                <motion.h2
                    variants={fadeInUp}
                    className='text-[36px] leading-[50px] font-normal text-center text-black bg-white border border-black max-w-[788px] mx-auto py-2'>
                    Grow your business.
                </motion.h2>
                <motion.p
                    variants={fadeInUp}
                    className='text-xl leading-7 font-normal text-black/50 text-center max-w-[788px] mx-auto mt-5'>
                    Today is the day to build the business of your dreams. Share your mission with the world — and blow your customers away.
                </motion.p>
                <motion.span  variants={fadeInUp}>
                    <Link href="/contact-us" className='text-sm font-medium uppercase text-white bg-black py-4 px-10 hover:opacity-80 flex w-fit mx-auto mt-10'>
                        CONTACT US
                    </Link>
                </motion.span>
            </div>
        </motion.section>
    )
}

export default Grow_Business