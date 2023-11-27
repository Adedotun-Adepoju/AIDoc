import { cx } from '@/utils'
import { BotIcon } from '../icons'
import Link from 'next/link'

interface ChatWithDocBotBtnProps {
  classNames?: string,
}

const ChatWithDocBotBtn = ({...props}: ChatWithDocBotBtnProps) => {
  return (
    <Link href='/chatbox' className={cx("flex items-center justify-center w-1/2 gap-1 px-2 py-4 text-sm uppercase rounded-lg sm:gap-4 sm:px-6 sm:text-xl sm:w-3/5 bg-blueLight sm:whitespace-nowrap", props.classNames)}>
      <BotIcon className="h-4 sm:h-10"/>
      <span>chat with ai-doc</span>
    </Link>
  )
}

export default ChatWithDocBotBtn
