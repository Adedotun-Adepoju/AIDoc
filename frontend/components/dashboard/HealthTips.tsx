import { healthTips } from '@/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HealthTips = () => {
  return (
    <section className='px-5 mx-auto mt-16 md:px-10 max-w-7xl'>
      <div className='flex justify-between text-blueDark-200 sm:text-2xl text-lg font-bold capitalize'>
      <h2 className="flex gap-2 mb-8 ">Common Health Tips For You</h2>
      <Link href='/health-tips' className="flex items-center gap-2 text-base font-semibold">
        View All
      </Link></div>
    <div className=' flex flex-col lg:gap-6 gap-3 overflow-hidden md:flex-row'>
      {
        healthTips.slice(0,3).map((tip, index) => (
          <div key={index} className='bg-white shadow-md md:animate-marquee flex flex-col xs:grid overflow-x-auto gap-4 grid-cols-12 p-4 items-center justify-start border rounded-xl border-blueLight md:min-w-[500px]'>
            <div className='h-full w-full col-span-4 overflow-hidden rounded-xl'>
              <Image src={tip.image}
                alt={tip.title}
                className='object-cover object-center w-full h-full transition-all duration-200 ease-in-out aspect-square hover:scale-105' />
            </div>
            <div className='col-span-8'>
              <h3 className="sm:mb-2 text-base sm:text-xl font-semibold capitalize">{tip.title}</h3>
              <p className="text-sm leading-tight sm:text-base text-gray-400">{tip.description}</p>
            </div>
          </div>
        ))
      }
    </div>
    </section>
  )
}

export default HealthTips
