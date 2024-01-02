import { Variants, motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

function Services({feature}:any) {
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
        <motion.section className='py-16'>
            <div className='container mx-auto px-4 grid md:grid-cols-3 grid-cols-1 md:gap-10 gap-7'>
                {feature?.map((item: any, idx: number) => {
                    return <motion.div
                        variants={fadeInUp}
                        key={idx}>
                        <Image src={item?.icon?.asset?.url} alt='service/1' width={50} height={50} />
                        <h3 className='text-xl font-normal text-black my-5'>
                            {item.title}
                        </h3>
                        <p className='text-xl font-normal text-black/60'>
                            {item.info}
                        </p>
                    </motion.div>
                })}

            </div>
        </motion.section>
    )
}

export default Services

const Service_Date = [
    {
        title: "Search Engine Marketing (SEM)",
        content: "From strategy, keyword research, implementation, to optimization. Note, every organization should have a brand campaign. Not sure what that is? Reach out",
        img: "/images/service/1.png",
    },
    {
        title: "Search Engine Optimization (SEO)",
        content: "Keyword research is a large part of SEO, but so is a content strategy plan. Words are only a portion of SEO, another important factor is 'technical SEO'.",
        img: "/images/service/2.png",
    },
    {
        title: "Technical SEO",
        content: "Technical SEO blends development with UX and design. One part user stories, another part HTML/CSS.",
        img: "/images/service/3.png",
    },
    {
        title: "Market Research/Competitor Analysis",
        content: "An important factor in marketing is marketing research and a competitor analysis. We use a few tools to research the market, see what is working and not working with competitors in the space. Finding your competitors is typically the first step.",
        img: "/images/service/4.png",
    },
    {
        title: "Marketing Technology Stack",
        content: "Marketing tech stack audits should be periodically done to ensure you are getting value out of your investment. If you do not have a marketing tech stack, doing a full infrastructure plan should be done. How is the customer journey tracked digitally, and how do you report metrics?",
        img: "/images/service/5.png",
    },
    {
        title: "Website Design & Platform Discovery",
        content: "Sometimes your website needs to be redesigned, or maybe a landing page needs to be created. The first step is picking a platform, or making sure you are using the right one. Web design is easy now. You don't need to be a developer.",
        img: "/images/service/6.png",
    },
]