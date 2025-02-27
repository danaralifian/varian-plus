import React from 'react'
import ProductCard from '@/components/product-card'
import IProduct from '@/models/product'
import IProductImage from '@/models/product-image'

interface IProps {
    products: IProduct[]
    productImages: IProductImage[]
}

export default function ProductList({ products, productImages }: IProps) {
    const productImage = (productId: number) => {
        return productImages.find((image) => image.id.includes(productId.toString()))?.image || '/images/placeholder.webp'
    }

    return (
        <div className='space-y-6 container' id='our-products'>
            <div className='rounded-full w-fit p-2 px-4 bg-lime-100 mx-auto'>
                <h2 className='text-sm md:text-lg font-bold w-fit title-gradient text-center'>Our Products</h2>
            </div>
            <p className='text-xl md:text-3xl font-bold text-center'>
                Lorem ipsum dolor sit amet consectetur. <br />commodi temporibus?
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        image={productImage(product.id)}
                        productName={product.name}
                        productId={product.id}
                    />
                ))}
            </div>
        </div>
    )
}
