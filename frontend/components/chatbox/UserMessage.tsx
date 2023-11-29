import { cx } from "@/utils";
import Image from "next/image";
import profileImg from "@/public/images/profile.png";

interface UserMessageProps {
  content: string;
  speed?: number;
  user_name: string;
}

const UserMessage: React.FC<UserMessageProps> = ({ content, user_name }) => {
  return (
    <div className={cx("flex items-center w-full py-2")}>
      <div className="h-12 basis-12">
        <Image
          src={profileImg}
          priority
          alt={user_name}
          width={48}
          height={48}
          className={cx(
            "object-cover mr-2 rounded-full border border-blueDark-200"
          )}
        />
      </div>
      <div className="flex flex-col p-3 text-black rounded-lg">
        <span className="text-base font-semibold text-blueLight">
          {user_name}
        </span>
        <span className="text-base font-medium leading-tight text-black">
          {content}
        </span>
      </div>
    </div>
  );
};

export default UserMessage;
