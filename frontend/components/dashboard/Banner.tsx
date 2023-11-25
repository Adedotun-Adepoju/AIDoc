import Image from 'next/image'
import doctor from '/public/images/medical-practitioner.png'

const Banner = () => {
  return (
    <section className='px-5 mx-auto mt-16 md:px-10 max-w-7xl'>
    <div className='relative flex flex-col items-start justify-between px-8 py-6 overflow-hidden text-white md:items-center md:flex-row bg-gradient-to-r from-blueDark-200 to-blueLight bg-full rounded-xl '>
      <Image src={doctor} alt="doctor" className='absolute bottom-0 w-auto h-full xs:-right-5 -right-10 md:hidden' />
      <div className="flex flex-col mb-6">
        <h2 className="flex gap-2 mb-2 text-2xl font-bold">Are you a Health <br className='sm:hidden'/> Practitioner?</h2>
        <p className="max-w-xl text-sm font-medium sm:text-base">Join our Health Professional <br className='sm:hidden'/> Team today!</p>
      </div>
      <button className='px-4 py-2 text-sm font-semibold uppercase rounded-full sm:py-4 sm:px-6 bg-blueDark-200'>
        Register now
      </button>
    </div>
    </section>
  )
}

export default Banner
