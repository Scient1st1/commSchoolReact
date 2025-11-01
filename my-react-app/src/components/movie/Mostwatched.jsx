import { AiOutlineHeart } from "react-icons/ai";

const Mostwatched = ({ title, image, id, onAddFavourites }) => {
  return (
    <div className="w-[308px] h-44  rounded-3xl overflow-hidden relative cursor-pointer mt-[13px]">
      {/* Background Image Container */}
      <div className="w-full h-full relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover absolute top-0 left-0"
        />

        <span className="favourite absolute top-5 right-5">
          <AiOutlineHeart
            onClick={() => {
              onAddFavourites(id);
            }}
            size={24}
            color="#ffffff"
          />
        </span>

        {/* Content Container */}
        <div className="absolute bottom-0 p-4 md:p-6 flex justify-between items-center z-10 w-full bg-white/50 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[9.3px]">
          {/* Progress Dots */}
          {/* Movie Title */}
          <div className="">
            <h2 className="text-white text-[16px] font-semibold">{title}</h2>
          </div>

          {/* Play Button */}
          <div className="">
            <button className="w-[30px] h-[30px] rounded-full bg-[#202327]/50 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5 text-white m-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347c-.75.412-1.667-.13-1.667-.986V5.653z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mostwatched;
