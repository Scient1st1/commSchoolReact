import Input from "../form/Input";
import { AiOutlineSearch } from "react-icons/ai";

const Searchinput = () => {
  return (
    <div className="relative">
      <div>
        <AiOutlineSearch
          size={24}
          color="#FFFFFF"
          className="absolute top-1/2 left-6 -translate-y-1/2"
        />
      </div>
      <Input
        placeholder="Type here to search"
        className="border-none rounded-[40px] bg-[#20232778] focus:outline-none py-5 px-[35px] pl-[60px] w-[358px]  text-white text-[20px]"
        type="text"
      />
    </div>
  );
};

export default Searchinput;
