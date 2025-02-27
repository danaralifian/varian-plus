import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 container items-center' id='about-us'>
      <Image src='/images/business.webp' alt='about' width={500} height={500} className='w-full rounded-md object-cover animate-fadeinup' />
      <div className='space-y-4 animate-fadeinup'>
        <div className='rounded-full w-fit p-2 px-4 bg-lime-100'>
          <h2 className='text-sm md:text-lg font-bold w-fit title-gradient'>About Us</h2>
        </div>
        <p className='text-xl md:text-3xl font-bold'>
          Experience the perfect combination of quality and service
        </p>
        <p className='text-sm'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Suspendisse potenti. Integer ut magna nec nisl interdum placerat. Vivamus auctor, orci at sollicitudin bibendum, sapien justo viverra nisi, at fermentum ex orci ut purus. Curabitur posuere, arcu ut varius sodales, quam nulla fermentum nunc, a egestas turpis justo et nunc.
          At VarianPlus, lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.
        </p>
        <p className='text-sm'>
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Praesent nec lorem a magna scelerisque vestibulum. Donec dapibus, justo in vulputate scelerisque, magna nunc luctus lorem, ac vehicula risus lorem nec lacus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
        </p>
      </div>
    </div>
  )
}
