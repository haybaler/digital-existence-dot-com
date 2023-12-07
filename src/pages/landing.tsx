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
                <div className='container mx-auto px-4 py-16'>
                    <div className='md:w-1/4 w-full'>
                        <h3 className='text-xs leading-5 font-medium uppercase text-black mb-3 md:text-start text-center'>
                            DESCRIPTION
                        </h3>
                        <p className='text-xl leading-7 font-normal text-black/50 md:text-start text-center'>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
