"use client"
import React, { useEffect, useState } from 'react'
import { AiDocLogo } from '../icons'
import Link from 'next/link'
import { cx } from '@/utils'

const Header = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header className={cx(isSticky ? 'sticky top-0 py-4' : 'py-10','flex justify-between px-10 py-10 items-center bg-slate-200/80 backdrop-blur-sm')}>
      <AiDocLogo className='h-16'/>

      <nav className='flex gap-6 absolute right-1/2 translate-x-1/2 text-blueDark-200 font-semibold'>
        <Link href='/about'>About us</Link>
        <Link href='/contact'>Contact us</Link>
      </nav>

      <div>
        Christian
      </div>
    </header>
  )
}

export default Header
