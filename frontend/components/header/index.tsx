import { AiDocLogo } from '../icons'
import Link from 'next/link'
import { cx } from '@/utils'
import MenuBtn from './MenuBtn'

const Header = () => {
  return (
    <header className={cx('sticky top-0 py-4 flex justify-between md:px-10 px-5 z-30 items-center bg-white/80 backdrop-blur-sm max-w-7xl mx-auto')}>
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
