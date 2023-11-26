import { cx } from '@/utils';
import Image from 'next/image';
import profileImg from "@/public/images/profile.png";

interface UserMessageProps {
  content: string;
  speed?: number;
}

const user = {
  name: 'John Doe',
  avatar: 'https://i.pravatar.cc/150?img=68',
};

const UserMessage: React.FC<UserMessageProps> = ({ content }) => {
  return (
    <div className={cx('flex items-center w-full py-2')}>
      <div><Image src={profileImg} alt={user.name} width={42} height={42} className={cx('rounded-full mr-2')} /></div>
      <div className='text-black p-3 rounded-lg flex flex-col'>
        <span className='text-blueLight text-base font-semibold'>{user.name}</span>
        <span className="text-black text-base leading-tight font-medium">
        {content}
        </span>
      </div>
    </div>
  );
}

export default UserMessage
