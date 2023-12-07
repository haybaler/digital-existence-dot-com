import Link from 'next/link'
import React from 'react'

function Banner() {
    return (
        <section>
            <div className='container mx-auto px-4'>
                <div className='bg-[url("/images/main-bg.jpg")] bg-center bg-cover bg-no-repeat py-[7.5rem] border border-black md:px-0 px-10'>
                    <h1 className='sm:text-[64px] sm:leading-[80px] text-4xl font-normal text-center text-black bg-white border-[3px] border-black max-w-[719px] mx-auto py-2'>
                        Growth Marketing for Startups
                    </h1>
                    <p className='sm:text-[20px] sm:leading-[34px] text-base font-normal text-center text-black bg-white border-[3px] border-black max-w-[719px] mx-auto py-2 my-3'>
                        Strategy - Launch - Market Research - Optimization - Corporate Website Design & Development
                    </p>
                    <Link href="#" className='text-sm font-normal uppercase text-black bg-white hover:bg-neutral-200 py-4 px-9 border-[3px] border-black flex w-fit mx-auto mt-10'>
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Banner