import { cx } from '@/utils'
import Link from 'next/link'
import React from 'react'

interface ButtonProps {
  title: string,
  classNames?: string,
  href: string
}

const Button = ({ ...props }: ButtonProps ) => {
  return (
    <Link href={props.href} className={cx('px-4 py-2 text-sm font-semibold uppercase rounded-full sm:py-4 sm:px-6 bg-blueDark-200 ', props.classNames)}>
      {props.title}
    </Link>
  )
}

export default Button
