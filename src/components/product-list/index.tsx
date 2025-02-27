import React from 'react'
import ProductCard from '../product-card'

export default function ProductList() {
    return (
        <div className='space-y-6'>
            <div className='rounded-full w-fit p-2 px-4 bg-lime-100 mx-auto'>
                <h2 className='text-sm md:text-lg font-bold w-fit title-gradient text-center'>Our Products</h2>
            </div>
            <p className='text-xl md:text-3xl font-bold text-center'>
                Lorem ipsum dolor sit amet consectetur. <br />commodi temporibus?
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <ProductCard />
            </div>
        </div>
    )
}
