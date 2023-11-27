import Header from '@/components/header'
import { BackIcon } from '@/components/icons'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <Header />
    <main className="px-5 mx-auto max-w-7xl md:px-10 relative heightd">
      <Link href='/' className="sticky top-24 left-0 flex w-max items-center rounded-xl bg-blueLight/10 gap-2 text-base font-semibold text-blueDark-200 py-2 px-3  hover:bg-blueLight/20 transition-all duration-200 ease-in-out hover:scale-105">
        <BackIcon className="w-5 h-5" />
        Back
      </Link>
      <section className="translate-y-1/2 text-5xl text-center text-blueLight mt-48 font-extrabold">
        Under Construction
      </section>
    </main>
    </>
  )
}

export default page
