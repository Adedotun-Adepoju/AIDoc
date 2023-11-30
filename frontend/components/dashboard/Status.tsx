import React from 'react'
import { BloodIcon, DnaIcon, WeightIcon } from '../icons'

const Status = ({
  userData
}: {
  userData: any
}) => {
  return (
    <div className="w-full px-8 py-16 text-white bg-blueDark-100 lg:w-2/5 rounded-xl">
      <h2 className="mb-4 text-2xl font-bold">
        Your current status
      </h2>
      <div className='grid grid-cols-2 gap-2 lg:gap-2 sm:gap-4'>
        <div className='col-span-1 p-4 bg-white rounded-lg'>
          <p className="mb-3 font-semibold text-black">
            Weight (KG)
          </p>
          <span className='flex items-center justify-between text-5xl uppercase font-extrabold sm:text-6xl text-blueLight'>
          {userData?.patient?.weight ? (
                    userData?.patient?.weight
                  ) : (
                    <span className="text-grayLight">--</span>
                  )}
            <WeightIcon className='h-8 '/>
          </span>
        </div>
        <div className='col-span-1 p-4 bg-white rounded-lg'>
          <p className="mb-3 font-semibold text-black">
            Genotype
          </p>
          <span className='flex items-center justify-between text-5xl uppercase font-extrabold sm:text-6xl text-blueDark-200'>
          {userData?.patient?.genotype ? (
                    userData?.patient?.genotype
                  ) : (
                    <span className="text-grayLight">--</span>
                  )}
            <DnaIcon className='h-12'/>
          </span>
        </div>
        <div className='col-span-1 p-4 bg-white rounded-lg'>
          <p className="mb-3 font-semibold text-black capitalize">
            Blood group
          </p>
          <span className='flex items-center justify-between uppercase text-5xl font-extrabold sm:text-6xl text-red'>
          {userData?.patient?.blood_group ? (
                    userData?.patient?.blood_group
                  ) : (
                    <span className="text-grayLight">--</span>
                  )}
            <BloodIcon className='h-12'/>
          </span>
        </div>
        <div className="gradient_border">
          <div className='flex flex-col justify-around h-full col-span-1 p-4 rounded-lg bg-blueDark-100'>
            <p className="mb-3 text-base font-semibold text-white capitalize sm:text-lg">
              Last Chat with AI-DOC
            </p>
            <span className='flex items-center justify-between text-lg font-bold text-white sm:text-3xl lg:text-xl xl:text-3xl'>
            <span className="text-grayLight text-5xl">--</span>
            </span>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Status
