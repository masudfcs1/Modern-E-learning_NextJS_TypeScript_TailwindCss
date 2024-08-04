"use client"

import { navLinks } from '@/constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'

const Nav = () => {

    const [navBg, setNavBg] = useState(false)

    useEffect(()=>{
        const handle =()=>{
            if(window.scrollY >= 90){
                setNavBg(true);
            }
            if(window.scrollY <90){
                setNavBg(false);
            }
        }

        window.addEventListener("scroll",handle);

        return () => window.removeEventListener("scroll",handle)
    })

    return (
        <div className={`fixed w-full transition-all duration-300 h-[9vh] z-[1000] bg-blue-700 ${navBg ? ' bg-indigo-800': "fixed"} `}>
            <div className=' flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto '>
                <Image src='/images/logo.png' alt='logo' width={120} height={120} />

                <div className=' hidden md:flex items-center space-x-10'>
                    {navLinks.map((link)=>{
                        return(
                            <Link key={link.id} href={link.url}>
                                <p className=' hover:text-yellow-500 font-semibold hover:border-b-2 transition-all duration-300 '>{link.label} </p>
                            </Link>
                        )
                    })}
                </div>

                <div className=' flex items-center space-x-4'>
                    <button className=' px-10 py-2 md:px-10 md:py-2 bg-sky-500 hover:bg-sky-600 md:rounded-sm font-semibold text-base rounded-sm duration-300 transition-all '>Signup</button>
                    <HiBars3BottomRight className=' w-8 h-8 cursor-pointer text-white md:hidden '/>
                </div>

            </div>
        </div>
    )
}

export default Nav