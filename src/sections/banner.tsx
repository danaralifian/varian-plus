import Image from 'next/image'
import React from 'react'

export default function Banner() {
    return (
        <section className='relative'>
            <Image src='/images/banner-furniture.webp' alt='banner' className='w-full h-auto brightness-[40%]' width={1920} height={600} />
            <div className='container absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
                <div className=''>
                    <h1 className='text-xl md:text-4xl font-bold mb-4 text-white text-center animate-fadeindown'>Welcome to <span className='text-lime-300 animate-pulse'>VarianPlus</span></h1>
                    <p className='text-sm md:text-xl text-white text-center animate-fadeinup'>
                        We strive to bring variety and convenience to you.
                    </p>
                </div>
            </div>
        </section>
    )
}
