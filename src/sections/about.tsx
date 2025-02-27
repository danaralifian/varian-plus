import { Layers } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <section className='container space-y-6' id='about-us'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        <Image src='/images/business.webp' alt='about' width={760} height={407} className='w-full rounded-md object-cover' />
        <div className='space-y-4'>
          <div className='rounded-full w-fit p-2 px-4 bg-lime-100 mx-auto lg:mx-0'>
            <h2 className='text-sm md:text-lg font-bold w-fit title-gradient'>About Us</h2>
          </div>
          <p className='text-xl md:text-3xl font-bold'>
            Experience the perfect combination of quality and service
          </p>
          <p className='text-sm text-gray-600'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Integer ut magna nec nisl interdum placerat. Vivamus auctor, orci at sollicitudin bibendum, sapien justo viverra nisi, at fermentum ex orci ut purus. Curabitur posuere, arcu ut varius sodales, quam nulla fermentum nunc, a egestas turpis justo et nunc.
            At VarianPlus, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
          </p>
          <p className='text-sm text-gray-600'>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent nec lorem a magna scelerisque vestibulum. Donec dapibus, justo in vulputate scelerisque, magna nunc luctus lorem, ac vehicula risus lorem nec lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
          </p>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className='space-y-4 border border-lime-300 rounded-md p-4 hover:border-lime-500 shadow-lg shadow-lime-200/20 transition duration-300'>
            <Layers className='mx-auto text-lime-400' size={64} />
            <h4 className='text-base font-semibold text-center'>Lorem Ipsum</h4>
            <p className='text-justify text-sm text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas libero vel culpa maxime labor, itaque reprehenderit cupiditate ullam beatae fugiat soluta. Vitae similique dolores dolor rerum nisi eius? Ipsa, expedita.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
