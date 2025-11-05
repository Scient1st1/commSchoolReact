import { useState, useEffect } from "react";
import Favouriteslist from "../components/movie/Favouriteslist";

const Favourites = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    return setFavourites(favs);
  }, []);

  return (
    <div className="p-10">
      <Favouriteslist favourites={favourites} />
    </div>
  );
};

export default Favourites;
