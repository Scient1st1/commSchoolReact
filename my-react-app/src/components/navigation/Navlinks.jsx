import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineHistory } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";
const Navlinks = () => {
  const [favouritesCount, setFavouritesCount] = useState(0);

  useEffect(() => {
    const updateCount = () => {
      const favs = JSON.parse(localStorage.getItem("favourites")) || [];
      setFavouritesCount(favs.length);
    };
    updateCount();

    window.addEventListener("favourites-updated", updateCount);

    return () => {
      window.removeEventListener("favourites-updated", updateCount);
    };
  }, []);

  return (
    <div className="flex gap-[75px] items-center ">
      <Link to="/">
        <AiOutlineHome size={32} color="#ffffff" />
      </Link>
      <Link to="/favourites">
        <span className="relative">
          <AiOutlineHeart size={32} color="#ffffff" />
          {favouritesCount > 0 && (
            <span className="absolute top-[-5px] right-[-10px] bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
              {favouritesCount}
            </span>
          )}
        </span>
      </Link>
      <AiOutlineHistory size={32} color="#ffffff" />
      <AiOutlineVideoCamera size={32} color="#ffffff" />
    </div>
  );
};

export default Navlinks;
