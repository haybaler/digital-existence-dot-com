import React from 'react'

function ContactForm() {
    return (
        <section className='py-16'>
            <div className='container mx-auto px-4'>
                <div className='border p-10 max-w-[757px]'>
                    <h2 className='text-4xl font-normal text-black mb-5'>
                        Contact us
                    </h2>
                    <p className='text-xl font-normal text-black/60'>
                        Please reach out for more information.
                    </p>
                    <form className='grid gap-6 mt-10'>
                        <div>
                            <label htmlFor='name' className='text-xs font-normal text-black mb-4 block'>NAME</label>
                            <input
                                name='name'
                                id='name'
                                type='text'
                                placeholder='Enter your name'
                                className='text-sm font-normal text-black placeholder:text-black/60 p-3 w-full border border-black/20 focus:border-black rounded-none appearance-none focus:outline-none' />
                        </div>
                        <div>
                            <label htmlFor='email' className='text-xs font-normal text-black mb-4 block'>EMAIL ADDRESS</label>
                            <input
                                name='email'
                                id='email'
                                type='email'
                                placeholder='Enter your email'
                                className='text-sm font-normal text-black placeholder:text-black/60 p-3 w-full border border-black/20 focus:border-black rounded-none appearance-none focus:outline-none' />
                        </div>
                        <div>
                            <label htmlFor='message' className='text-xs font-normal text-black mb-4 block'>MESSAGE</label>
                            <textarea
                                name='message'
                                id='message'
                                rows={9}
                                placeholder='Hi there, I’m reaching out because I think we can collaborate…'
                                className='text-sm font-normal text-black placeholder:text-black/60 p-3 w-full border border-black/20 focus:border-black rounded-none appearance-none focus:outline-none'></textarea>
                        </div>
                        <button type='submit' className='text-base font-normal text-white uppercase bg-black hover:bg-opacity-80 w-full p-3'>
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactForm