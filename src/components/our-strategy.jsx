import { Variants, motion } from 'framer-motion';
import React from 'react'
import PortableText from "react-portable-text"


function Our_Strategy({ title, subTitle, data }) {
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
                    {subTitle}
                </motion.h3>
                <motion.div
                    variants={fadeInUp}
                    className='sm:text-[36px] text-3xl leading-[50px] font-normal text-center text-black bg-white border border-black max-w-[910px] mx-auto py-2'>
                    <p className='max-w-[750px] mx-auto'>{title}</p>
                </motion.div>
            </motion.div>
            <div className='container mx-auto border-t'></div>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                className='container mx-auto px-4 py-16 content text-center max-w-[800px]'>
                <PortableText
                    // Pass in block content straight from Sanity.io
                    content={data}
                    // Optionally override marks, decorators, blocks, etc. in a flat
                    // structure without doing any gymnastics
                    serializers={{
                        h1: (props) => <h1 {...props} />,
                        li: ({ children }) => <li>{children}</li>,
                    }}
                />
            </motion.div>
        </section>
    )
}

export default Our_Strategy