import Image from 'next/image';
import profileImg from "@/public/images/profile.png";
import Link from 'next/link';
import { DashboardIcon, ProfileIcon, SpecialistIcon, TypingLoadingIcon } from '../icons';

const SideBar = ({user_data}: {user_data: any}) => {
  return (
    <aside className='flex flex-col justify-center items-center translate-y-1/2 max-w-[270px] mx-auto'>
      <Image src={profileImg} alt="profile" width={150} height={150} className="rounded-full border" />
      <h2 className="text-2xl font-semibold mb-8 mt-6">{user_data?.first_name}</h2>
      <Link href="/" className='flex items-center py-4 px-6 border border-grayLight rounded-lg mt-4 w-full hover:bg-blueLight/10 transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer'>
        <DashboardIcon className="w-5 h-5 mr-2" />
        Dashboard
      </Link>
      <Link href="/profile" className='flex items-center py-4 px-6 border border-grayLight rounded-lg mt-4 w-full hover:bg-blueLight/10 transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer'>
        <ProfileIcon className="w-5 h-5 mr-2" />
        Profile
      </Link>
      <Link href="/connect-specialist" className='flex items-center py-4 px-6 border border-grayLight rounded-lg mt-4 w-full  hover:bg-blueLight/10 transition-all duration-200 ease-in-out hover:scale-105 cursor-pointer'>
        <SpecialistIcon className="w-5 h-5 mr-2" />
        Connect Specialist
      </Link>
    </aside>
  )
}

export default SideBar
