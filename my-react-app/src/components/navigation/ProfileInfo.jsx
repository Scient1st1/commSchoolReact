import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";

const ProfileInfo = () => {
  return (
    <div className="flex gap-4 items-center ">
      <AiOutlineBell size={32} />
      <AiOutlineSetting size={32} />
      <div className="w-[65px] h-[65px] rounded-full bg-[#464545] flex justify-center items-center text-white">
        <h2>G</h2>
      </div>
    </div>
  );
};

export default ProfileInfo;
