"use client"
import MENUS from '@/constants/menus'
import { cn, scrollTo, scrollToTop } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from '../button'

export default function Header() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    useEffect(() => {
        scrollTo()
    }, []);

    const handleClickMenu = (href: string) => {
        history.pushState(null, '', href)
        scrollTo(href)
        setIsOpen(false)
    }

    const handleToTop = () => {
        history.pushState(null, '', '/')
        scrollToTop()
        setIsOpen(false)
    }

    return (
        <header className='sticky top-0 min-h-[64px] flex items-center bg-white z-10 shadow-md'>
            {/* Navbar */}
            <div className='container flex items-center justify-between'>
                <Image src='/logo.svg' alt='logo varian plus' className='w-auto h-6 md:h-8 cursor-pointer' width={'100'} height={100} onClick={handleToTop} />
                <nav className='hidden md:block'>
                    <ul className='flex space-x-6 items-center list-none'>
                        {MENUS.map((menu, index) => <li key={index} className='font-bold cursor-pointer' onClick={() => handleClickMenu(menu.href)}>{menu.name}</li>)}
                    </ul>
                </nav>
                <div className='cursor-pointer block md:hidden' onClick={() => setIsOpen(true)}>
                    <Menu />
                </div>
            </div>
            {/* Drawer */}
            <div
                className={cn('fixed top-0 right-0 h-full w-full inset-0 bg-black/50 z-10 shadow-lg opacity-0 pointer-events-none duration-300', {
                    'opacity-100 pointer-events-auto': isOpen
                })}
                onClick={() => setIsOpen(false)}
            >
                <div
                    className={cn('w-full h-full max-w-xs bg-white right-0 absolute p-4 py-5 transition-transform transform duration-300 ease-in-out', {
                        'translate-x-0': isOpen,
                        'translate-x-full': !isOpen
                    })}
                    onClick={(e) => e.stopPropagation()}>
                    <div className='space-y-4'>
                        <div className='flex items-center justify-between'>
                            <Image src='/logo.svg' alt='logo varian plus' className='w-auto h-6 md:h-8' width={'100'} height={100} onClick={handleToTop} />
                            <Button variant={'transparent'} onClick={() => setIsOpen(false)} size={'2xs'}>
                                <X />
                            </Button>
                        </div>
                        <hr />
                        <ul className='space-y-2 list-none mt-8'>
                            {MENUS.map((menu, index) => <li key={index} className='p-2 rounded-md cursor-pointer font-bold' onClick={() => handleClickMenu(menu.href)}>{menu.name}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}
