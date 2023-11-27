import Link from "next/link";
import { BackIcon } from "../icons";

const BackBtn = () => {
  return (
    <Link
      href="/"
      className="sticky z-20 top-24 left-0 flex w-max items-center rounded-xl bg-white gap-2 text-base font-semibold text-blueDark-200 py-2 px-3  hover:bg-blueLight/20 transition-all duration-200 ease-in-out hover:scale-105"
    >
      <BackIcon className="w-5 h-5" />
      Back
    </Link>
  );
};

export default BackBtn;
