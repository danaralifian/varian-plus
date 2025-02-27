import Image from 'next/image'
import React from 'react'

export default function ProductCard() {
    return (
        <div className='bg-white rounded-lg shadow-md'>
            <div className='h-48 cursor-pointer'>
                <Image
                    src={'https://static7.depositphotos.com/1050070/691/i/950/depositphotos_6910790-stock-photo-mother-and-child-walking-on.jpg'}
                    alt={''}
                    width={768}
                    height={450}
                    // sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='object-cover w-full h-full rounded-t-lg' />
            </div>
            <div className='p-2'>
                <h3 className='text-xl font-semibold'>
                    product name
                </h3>
                <p className='text-gray-600 text-base'>ID: 01</p>
            </div>
        </div>
    )
}
