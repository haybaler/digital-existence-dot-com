import Link from 'next/link'
import React from 'react'

function Grow_Business() {
    return (
        <section>
            <div className='container mx-auto px-4 py-16 bg-zinc-100'>
                <h2 className='text-[36px] leading-[50px] font-normal text-center text-black bg-white border border-black max-w-[788px] mx-auto py-2'>
                    Grow your business.
                </h2>
                <p className='text-xl leading-7 font-normal text-black/50 text-center max-w-[788px] mx-auto mt-5'>
                    Today is the day to build the business of your dreams. Share your mission with the world — and blow your customers away.
                </p>
                <Link href="/contact-us" className='text-sm font-medium uppercase text-white bg-black py-4 px-10 hover:opacity-80 flex w-fit mx-auto mt-10'>
                    CONTACT US
                </Link>
            </div>
        </section>
    )
}

export default Grow_Business