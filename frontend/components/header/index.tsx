"use client"
import React, { useEffect, useState } from 'react'
import { AiDocLogo } from '../icons'
import Link from 'next/link'
import { cx } from '@/utils'
import MenuBtn from './MenuBtn'

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
    <header className={cx(isSticky ? 'sticky top-0 py-4' : 'py-10','flex justify-between md:px-10 px-5 z-30 items-center bg-white backdrop-blur-sm max-w-7xl mx-auto')}>
      <AiDocLogo className='h-16'/>

      <nav className='absolute hidden gap-6 font-semibold translate-x-1/2 md:flex right-1/2 text-blueDark-200'>
        <Link href='/about'>About us</Link>
        <Link href='/contact'>Contact us</Link>
      </nav>

      <div>
        <MenuBtn />
      </div>
    </header>
  )
}

export default Header
