import React from "react";

const ContinueWatching = ({ title, image }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4 my-4">
        <img
          src={image}
          alt={title}
          className="w-[60px] h-[60px] object-cover rounded-lg"
        />
        <h4 className="text-white text-[14px] font-medium">{title}</h4>
      </div>
      <button className="bg-white/30 hover:bg-white/50 transition-colors duration-300 text-white rounded-full w-8 h-8 flex items-center justify-center">
        ▶
      </button>
    </div>
  );
};

export default ContinueWatching;
