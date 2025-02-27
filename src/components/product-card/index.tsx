import Image from 'next/image'
import React from 'react'

interface IProps {
    src: string
    alt: string
    productName: string
    productId: number
}
export default function ProductCard({ src, alt, productName, productId }: IProps) {
    return (
        <div className='bg-white rounded-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition duration-300 ease-in-out'>
            <div className='h-48 cursor-pointer'>
                <Image
                    src={src}
                    alt={alt || 'product image'}
                    width={768}
                    height={450}
                    className='object-cover w-full h-full rounded-t-lg' />
            </div>
            <div className='p-2'>
                <p className='text-gray-600 text-base'>ID: {productId}</p>
                <h3 className='text-lg font-semibold line-clamp-2'>
                    {productName}
                </h3>
            </div>
        </div>
    )
}
