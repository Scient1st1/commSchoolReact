import HeaderNav from "../components/layout/HeaderNav";
import Sidebar from "../components/layout/Sidebar";
import MainContent from "../components/MainContent";
import { useState, useEffect } from "react";
function Home() {
  function addFavourites(id) {
    const movieToAdd = movies.find((movie) => movie.id === id);
    if (movieToAdd) {
      const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
      if (!favourites.find((item) => item.id === id)) {
        const updatedFavourites = [...favourites, movieToAdd];
        localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
        window.dispatchEvent(new Event("favourites-updated"));
      }
    }
  }

  const [movies, setMovies] = useState([]);
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

  return (
    <div className="p-10  ">
      <HeaderNav />
      <div className="flex">
        <Sidebar movies={movies} addFavourites={addFavourites} />
        <MainContent movies={movies} addFavourites={addFavourites} />
      </div>
    </div>
  );
}

export default Home;
