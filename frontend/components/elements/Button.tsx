import { cx } from '@/utils'
import React from 'react'

interface ButtonProps {
  title: string,
  classNames: string,
}

const Button = ({ ...props }: ButtonProps ) => {
  return (
    <button className={cx('px-4 py-2 text-sm font-semibold uppercase rounded-full sm:py-4 sm:px-6 bg-blueDark-200', props.classNames ? props.classNames : '')}>
      {props.title}
    </button>
  )
}

export default Button
