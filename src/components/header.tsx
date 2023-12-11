import Link from 'next/link'
import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";

function Header() {
    const [menu, setMenu] = useState(false)
    return (
        <header className='py-7'>
            <div className='container mx-auto px-4 flex flex-row'>
                <div className='w-[45%]'>
                    <Link href="/" className='text-[32px] leading-7 font-normal text-black/30 hover:text-black'>
                        Digital Existence
                    </Link>
                </div>
                <nav className='w-[55%] flex sm:justify-between justify-end items-center'>
                    <button className='sm:hidden block text-2xl' onClick={() => setMenu(!menu)}>
                        {menu ? <AiOutlineClose /> : <FaBarsStaggered />}
                    </button>
                    <ul className={`sm:flex sm:flex-row flex-col sm:gap-10 gap-5 sm:static sm:bg-transparent ${menu ? "bg-white absolute top-24 left-0 right-0 p-4" : "hidden"} `}>
                        <li>
                            <Link href="/about-us" className='text-xs font-medium uppercase text-black/60 hover:text-black'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-us" className='text-xs font-medium uppercase text-black/60 hover:text-black'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                    <Link href="/contact-us" className='text-xs font-medium uppercase text-white bg-black py-3 px-10 hover:opacity-80 sm:block hidden'>
                        Contact Us
                    </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header