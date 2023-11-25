import { healthTips } from '@/utils'
import Image from 'next/image'
import React from 'react'

const HealthTips = () => {
  return (
    <section className='px-5 mx-auto mt-16 md:px-10 max-w-7xl'>
    <h2 className="flex gap-2 mb-4 text-2xl font-bold capitalize">Common Health Tips For You</h2>
    <div className='flex flex-col gap-3 overflow-hidden md:overflow-x-auto md:flex-row'>
      {
        healthTips.map((tip, index) => (
          <div key={index} className='bg-white grid gap-4 grid-cols-12 p-4 items-center justify-start border rounded-xl border-blueLight md:min-w-[500px]'>
            <div className='h-full col-span-4 overflow-hidden rounded-xl'>
              <Image src={tip.image}
                alt={tip.title}
                className='object-cover object-center w-full h-full transition-all duration-200 ease-in-out aspect-square hover:scale-105' />
            </div>
            <div className='col-span-8'>
              <h3 className="mb-2 text-xl font-semibold capitalize">{tip.title}</h3>
              <p className="text-base text-gray-400">{tip.description}</p>
            </div>
          </div>
        ))
      }
    </div>
    </section>
  )
}

export default HealthTips
