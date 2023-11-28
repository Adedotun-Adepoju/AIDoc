import { cx } from '@/utils';
import Image from 'next/image';
import profileImg from "@/public/images/profile.png";

interface UserMessageProps {
  content: string;
  speed?: number;
  user_name: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ content, user_name }) => {
  return (
    <div className={cx('flex items-center w-full py-2')}>
      <div><Image src={profileImg} alt={user_name} width={42} height={42} className={cx('rounded-full mr-2')} /></div>
      <div className='text-black p-3 rounded-lg flex flex-col'>
        <span className='text-blueLight text-base font-semibold'>{user_name}</span>
        <span className="text-black text-base leading-tight font-medium">
        {content}
        </span>
      </div>
    </div>
  );
}

export default UserMessage
