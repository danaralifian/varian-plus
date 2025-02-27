"use client"
import Image from 'next/image'
import React from 'react'
import dynamic from 'next/dynamic'
import { Button } from '../button'
import { X } from 'lucide-react'

const Modal = dynamic(() => import('../modal'), { ssr: false })

interface IProps {
    image: string
    productName: string
    productId: number
}
export default function ProductCard({ image, productName, productId }: IProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <>
            <div
                className='bg-white rounded-lg border cursor-pointer border-gray-100 hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out'
                onClick={() => setIsOpen(true)}>
                <div className='h-48 overflow-hidden rounded-t-lg'>
                    <Image
                        src={image}
                        alt={productName || 'product image'}
                        width={280}
                        height={200}
                        className='object-cover w-full h-full hover:scale-110 transition-all duration-300 ease-in-out' />
                </div>
                <div className='p-2 px-4'>
                    <span className='text-gray-600 text-xs font-medium'>ID: {productId}</span>
                    <p className='text-sm font-semibold line-clamp-2'>
                        {productName}
                    </p>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}>
                <div className='space-y-6'>
                    <div className='flex items-center justify-between'>
                        <h3 className='text-base font-semibold'>
                            {productName}
                        </h3>
                        <Button variant='transparent' onClick={() => setIsOpen(false)}>
                            <X />
                        </Button>
                    </div>
                    <div className='relative'>
                        <Image
                            src={image}
                            alt={productName || 'product image'}
                            width={768}
                            height={450}
                            className='h-4/5 mx-auto rounded-md object-contain'
                        />
                    </div>
                </div>
            </Modal>
        </>
    )
}
