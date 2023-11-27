import { cx } from "@/utils"
import Link from "next/link"

interface ConnectDocBtnProps {
  classNames?: string,
}

const ConnectDocBtn = ({...props}: ConnectDocBtnProps) => {
  return (
    <Link href='/connect-specialist' className={cx("flex items-center justify-center w-1/2 px-4 py-1 text-sm rounded-lg sm:text-base sm:w-2/5 bg-green", props.classNames)}>
      <span className="inline-block text-left">Connect with a Health Practitioner</span>
    </Link>
  )
}

export default ConnectDocBtn
