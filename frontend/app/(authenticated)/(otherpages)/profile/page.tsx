import {
  BackIcon,
  BloodIcon,
  DnaIcon,
  MailIcon,
  PassWordIcon,
  PhoneIcon,
  WeightIcon,
} from "@/components/icons";
import Image from "next/image";
import profileImg from "@/public/images/profile.png";
import ConnectDocBtn from "@/components/elements/ConnectDocBtn";
import ChatWithDocBotBtn from "@/components/elements/ChatWithDocBotBtn";
import Button from "@/components/elements/Button";
import Link from "next/link";

const ProfilePage = () => {
  return (
    <main className="px-5 mx-auto max-w-7xl md:px-10 relative">
      <Link href='/' className="sticky top-24 left-0 flex w-max items-center rounded-xl bg-blueLight/10 gap-2 text-base font-semibold text-blueDark-200 py-2 px-3  hover:bg-blueLight/20 transition-all duration-200 ease-in-out hover:scale-105">
        <BackIcon className="w-5 h-5" />
        Back
      </Link>
      <section className="grid max-w-5xl grid-cols-12 mx-auto mt-8">
        
        <div className="flex flex-col justify-end col-span-9">
          <h2 className="w-full mb-12 text-2xl font-semibold capitalize self-start">
            My profile
          </h2>
          <div className="flex gap-8 mb-16">
            <Image
              src={profileImg}
              alt="profile"
              className="w-64 h-64 border rounded-lg"
            />
            <div className="flex flex-col justify-end">
              <h2 className="mb-6 text-3xl font-bold xs:text-4xl">
                Christian Onoh
              </h2>
              <p className="flex items-center gap-2 mb-4">
                <MailIcon className="w-5 h-5" />
                chibyk5000@mail.com
              </p>
              <p className="flex items-center gap-2 mb-4">
                <PhoneIcon className="w-5 h-5" />
                08012345678
              </p>
              <div className="flex gap-4 my-4 text-sm text-white">
                <button className="flex items-center gap-2 px-4 py-2 capitalize bg-blueLight">
                  <PassWordIcon className="w-5 h-5" />
                  Edit profile
                </button>
                <button className="flex items-center gap-2 px-4 py-2 capitalize bg-blueDark-200 items">
                  <PassWordIcon className="w-5 h-5" />
                  Change Password
                </button>
              </div>
            </div>
          </div>
          <div className="flex max-w-lg gap-4 font-bold text-white">
            <ChatWithDocBotBtn />
            <ConnectDocBtn />
          </div>
        </div>

        {/* STATUS  */}
        <div className="col-span-3 px-8 py-6 rounded-lg bg-blueDark-100">
          <div className="grid grid-cols-1 grid-rows-3 gap-2 lg:gap-2 sm:gap-4">
            <div className="col-span-1 p-4 bg-white rounded-lg">
              <p className="mb-3 font-semibold text-black">Weight (KG)</p>
              <span className="flex items-center justify-between text-5xl font-extrabold sm:text-6xl text-blueLight">
                59
                <WeightIcon className="h-8 " />
              </span>
            </div>
            <div className="col-span-1 p-4 bg-white rounded-lg">
              <p className="mb-3 font-semibold text-black">Genotype</p>
              <span className="flex items-center justify-between text-5xl font-extrabold sm:text-6xl text-blueDark-200">
                AA
                <DnaIcon className="h-12" />
              </span>
            </div>
            <div className="col-span-1 p-4 bg-white rounded-lg">
              <p className="mb-3 font-semibold text-black capitalize">
                Blood group
              </p>
              <span className="flex items-center justify-between text-5xl font-extrabold sm:text-6xl text-red">
                O+
                <BloodIcon className="h-12" />
              </span>
            </div>
            <Button title='Update Data' classNames="bg-blueLight mt-6 text-white sm:px-4 sm:py-2 w-10/12" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
