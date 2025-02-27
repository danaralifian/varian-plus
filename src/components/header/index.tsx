import Image from 'next/image'
import React from 'react'

export default function Header() {
    return (
        <header className='py-3 px-4 sticky top-0 min-h-[64px] flex items-center bg-white z-10 shadow-md'>
            <div className='container flex items-center justify-between'>
                <Image src='/logo.svg' alt='logo varian plus' className='w-auto h-8' width={'100'} height={100} />
                <nav>
                    <ul className='flex space-x-6 items-center list-none'>
                        <li><a href='#' className='font-bold'>About</a></li>
                        <li><a href='#' className='font-bold'>Our Products</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
