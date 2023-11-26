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
import BackBtn from "@/components/elements/BackBtn";

const ProfilePage = () => {
  return (
    <main className="px-5 mx-auto max-w-7xl md:px-10 relative">
      <BackBtn />
      <section className="max-w-5xl mx-auto mt-8">
        <h2 className="w-full mb-12 text-2xl font-semibold capitalize lg:absolute lg:top-20">
          My profile
        </h2>
        <div className="flex flex-col md:flex-row">
        <div className="flex flex-col flex-1 justify-end relative">
          <div className="flex lg:flex-row flex-col gap-8 mb-16">
            <Image
              src={profileImg}
              alt="profile"
              className="w-full md:w-72 md:h-72 border rounded-lg"
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
          <div className="flex max-w-lg gap-4 font-bold text-white mr-4">
            <ChatWithDocBotBtn classNames="md:w-7/12 lg:w-3/5"/>
            <ConnectDocBtn classNames="md:w-5/12 lg:w-2/5" />
          </div>
        </div>

        {/* STATUS  */}
        <div className="sm:w-4/12 ">
          <div className="grid grid-cols-1 grid-rows-3 gap-2 lg:gap-2 sm:gap-4 bg-blueDark-100 min-w-[208px] px-8 py-6 rounded-lg ">
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
            <div className="gradient_border">
              <div className="flex flex-col justify-around h-full col-span-1 p-4 rounded-lg bg-blueDark-100">
                <p className="mb-3 text-base font-semibold text-white capitalize sm:text-lg">
                  Last Chat with AI-DOC
                </p>
                <span className="flex items-center justify-between text-lg font-bold text-white sm:text-3xl lg:text-xl xl:text-3xl">
                  4days ago
                </span>
              </div>
            </div>
            <div>
              <Button
              title="Update Data"
              classNames="bg-blueLight mt-6 text-white sm:px-2 sm:py-2 w-10/12"
            />
            </div>
          </div>
        </div>
        </div>
      </section>
    </main>
  );
};

export default ProfilePage;
