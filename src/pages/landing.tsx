import Grow_Business from '@/components/grow-business'
import Image from 'next/image'
import React from 'react'

export default function Landing() {
    return (
        <main>
            <section>
                <div className='container mx-auto px-4'>
                    <div className='bg-[url("/images/about.png")] bg-center bg-cover bg-no-repeat py-[7.5rem] md:px-0 px-10 h-[620px] grid items-center justify-center'>
                        <h1 className='sm:text-[64px] sm:leading-[80px] text-4xl font-normal text-center text-black bg-white border-[3px] border-black max-w-[900px] mx-auto py-2 px-5'>
                            Karius Test Landing Page
                        </h1>
                    </div>
                </div>
            </section>
            <section>
                <div className='container mx-auto px-4 py-16 flex md:flex-row flex-col gap-7 p-3 justify-between'>
                    <div className='md:w-1/4 w-full grid gap-5'>
                        <div>
                            <h3 className='text-xs leading-5 font-medium uppercase text-black mb-3 md:text-start text-center'>
                                DESCRIPTION
                            </h3>
                            <p className='text-xl leading-7 font-normal text-black/50 md:text-start text-center'>
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.
                            </p>
                        </div>
                        <div>
                            <h3 className='text-xs leading-5 font-medium uppercase text-black mb-3 md:text-start text-center'>
                                WHEN
                            </h3>
                            <p className='text-xl leading-7 font-normal text-black/50 md:text-start text-center'>
                                January 2017
                            </p>
                        </div>
                        <div>
                            <h3 className='text-xs leading-5 font-medium uppercase text-black mb-3 md:text-start text-center'>
                                WHO
                            </h3>
                            <p className='text-xl leading-7 font-normal text-black/50 md:text-start text-center'>
                                Jason Davis, John Anderson, Mirco Cattabriga, Aaron Jones, Amanda Johnson, Steve McQueen
                            </p>
                        </div>
                    </div>
                    <div className='md:w-2/3 w-full grid gap-5'>
                        <p className='text-xl leading-7 font-normal text-black/50 md:text-start text-center'>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </p>
                        <p className='text-xl leading-7 font-normal text-black/50 md:text-start text-center'>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                        </p>
                        <p className='text-xl leading-7 font-normal text-black/50 md:text-start text-center'>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                        </p>
                    </div>
                </div>
            </section>
            <section>
                <div className='container mx-auto px-4 py-16 grid gap-10'>
                    <Image src="/images/landing-img.png" alt='landing-img' width={1140} height={700} className='mx-auto border border-black' />
                    <Image src="/images/portfolio1.svg" alt='portfolio1' width={1140} height={700} className='mx-auto border border-black' />
                    <Image src="/images/portfolio.svg" alt='portfolio' width={1140} height={700} className='mx-auto border border-black' />
                </div>
            </section>
            <Grow_Business />
        </main>
    )
}
