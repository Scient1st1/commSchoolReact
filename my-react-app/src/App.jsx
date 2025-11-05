import { Outlet } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import HeaderNav from "./components/layout/HeaderNav";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  function addFavourites(movie) {
    if (movie) {
      const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
      if (!favourites.find((item) => item.id === movie.id)) {
        const updatedFavourites = [...favourites, movie];
        localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
        window.dispatchEvent(new Event("favourites-updated"));
      }
    }
  }

  useEffect(() => {
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
    <div className="flex">
      <Sidebar movies={movies} addFavourites={addFavourites} />
      <main className="flex-1 p-5">
        <HeaderNav />
        <Outlet context={{ movies, addFavourites }} />
      </main>
    </div>
  );
}

export default App;
