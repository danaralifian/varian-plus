"use client"
import MENUS from '@/constants/menus'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    return (
        <header className='sticky top-0 min-h-[64px] flex items-center bg-white z-10 shadow-md'>
            {/* Navbar */}
            <div className='container flex items-center justify-between'>
                <Image src='/logo.svg' alt='logo varian plus' className='w-auto h-6 md:h-8' width={'100'} height={100} />
                <nav className='hidden md:block'>
                    <ul className='flex space-x-6 items-center list-none'>
                        {MENUS.map((menu, index) => <li key={index}><a href={menu.href} className='font-bold'>{menu.name}</a></li>)}
                    </ul>
                </nav>
                <div className='cursor-pointer block md:hidden' onClick={() => setIsOpen(!isOpen)}>
                    <Menu />
                </div>
            </div>
            {/* Drawer */}
            <div
                className={cn('fixed top-0 right-0 h-full w-full inset-0 bg-black/50 z-10 shadow-lg transition-transform transform', {
                    'translate-x-0': isOpen,
                    'translate-x-full': !isOpen
                })}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className='w-full h-full max-w-xs bg-white right-0 absolute p-4 py-5'>
                    <Image src='/logo.svg' alt='logo varian plus' className='w-auto h-6 md:h-8' width={'100'} height={100} />
                    <ul className='space-y-2 list-none mt-8'>
                        {MENUS.map((menu, index) => <li key={index} className='bg-lime-100 p-2 px-4 rounded-md'><a href={menu.href} className='font-bold'>{menu.name}</a></li>)}
                    </ul>
                </div>
            </div>
        </header>
    )
}
