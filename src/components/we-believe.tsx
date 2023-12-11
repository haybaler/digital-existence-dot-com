import React from 'react'
import ImageBox from './image-box'
import { Variants, motion } from 'framer-motion';

function We_Believe() {
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
        <section>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className='container mx-auto px-4 py-16'>
                <motion.h3
                    variants={fadeInUp}
                    className='text-sm leading-5 font-medium uppercase text-black/50 text-center mb-3'>
                    WHAT WE BELIEVE IN
                </motion.h3>
                <motion.h2
                    variants={fadeInUp}
                    className='sm:text-[36px] text-3xl leading-[50px] font-normal text-center text-black bg-white border border-black max-w-[910px] mx-auto py-2'>
                    Product, Market, Fit, First.<br />
                    We focus on pain-killers, not vitamins.
                </motion.h2>
            </motion.div>
            <div className='container mx-auto border-t'></div>
            <div className='container mx-auto px-4 py-16 grid gap-16'>
                <ImageBox
                    title=" WHY US"
                    subTitle="Who we are"
                    content="10+ years of B2B e-commerce & enterprise sales experience. Emphasis on low-cost, high-quality go-to-market strategies, and revenue generation."
                    link="#"
                    img_url="/images/about.png"
                    Classes="md:flex-row flex-col-reverse"
                />

                <ImageBox
                    title="OUR CUSTOMERS"
                    subTitle="What we do"
                    content="We focus on Pre-Seed, and Series-A organizations to help them with market research, marketing strategy, web design, pitch decks, brand awareness, and marketing tech stack audits, optimizations and discovery. We only focus on products and services that solve a customer's unmet need."
                    link="#"
                    img_url="/images/contact.png"
                    Classes="md:flex-row-reverse flex-col-reverse"
                />
            </div>
        </section>
    )
}

export default We_Believe