import React from 'react'
import ImageBox from './image-box'
import { Variants, motion } from 'framer-motion';

function We_Believe({ title, subTitle, data }: any) {
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
                    {subTitle}
                </motion.h3>
                <motion.div
                    variants={fadeInUp}
                    className='sm:text-[36px] text-3xl leading-[50px] font-normal text-center text-black bg-white border border-black max-w-[910px] mx-auto py-2'>
                    <p className='max-w-[550px] mx-auto'>{title}</p>
                </motion.div>
            </motion.div>
            <div className='container mx-auto border-t'></div>
            <div className='container mx-auto px-4 py-16 grid gap-16'>
                {
                    data?.map((item: any, idx: number) => (
                        <ImageBox
                            key={idx}
                            title={item?.title}
                            subTitle={item?.sub_title}
                            content={item?.info}
                            link={item?.button_link}
                            img_url={item?.image?.asset?.url}
                            Classes={idx%2 === 0 ? "md:flex-row flex-col-reverse" : "md:flex-row-reverse flex-col-reverse"}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default We_Believe