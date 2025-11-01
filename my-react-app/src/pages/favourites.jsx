import HeaderNav from "../components/layout/HeaderNav";
import Sidebar from "../components/layout/Sidebar";
import { useState, useEffect } from "react";
import Favouriteslist from "../components/movie/Favouriteslist";

const Favourites = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Fetch movies from an API or other source
    const fetchMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1"
      );
      const data = await response.json();
      setMovies(data.results);
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const favs = getFavourites();
    setFavourites(favs);
    console.log(favs);
  }, []);

  function getFavourites() {
    const favs = JSON.parse(localStorage.getItem("favourites")) || [];
    return favs;
  }

  return (
    <div className="p-10  ">
      <HeaderNav />
      <div className="flex">
        <Sidebar movies={movies} />
        <Favouriteslist favourites={favourites} />
      </div>
    </div>
  );
};

export default Favourites;
