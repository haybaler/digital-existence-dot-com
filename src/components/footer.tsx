import Link from 'next/link'
import React, { useState } from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from 'next/router';

function Footer() {
  const [menu, setMenu] = useState(false)
  const router = useRouter()
  return (
    <footer>
      <div className='py-16'>
        <p className='text-xl font-normal text-center text-black'>
          ©Digital Existence 2022
        </p>
      </div>
      <div className={`py-7 ${router.pathname === '/' ? "block" : "hidden"}`}>
        <div className='container mx-auto px-4 flex flex-row'>
          <div className='w-[45%]'>
            <Link href="/" className='text-[32px] leading-7 font-normal text-black/30 hover:text-black'>
              Digital Existence
            </Link>
          </div>
          <nav className='w-[55%] flex md:justify-between justify-end items-center'>
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
                <Link href="/landing" className='text-xs font-medium uppercase text-black/60 hover:text-black'>
                  Karius
                </Link>
              </li>
            </ul>
            <Link href="/contact-us" className='text-xs font-medium uppercase text-white bg-black py-3 px-10 hover:opacity-80 md:block hidden'>
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer