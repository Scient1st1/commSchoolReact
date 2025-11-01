import { useState, useEffect } from "react";
import Mostwatched from "../movie/Mostwatched";
import ContinueWatching from "../movie/ContinueWatching";

const Sidebar = ({ movies, addFavourites }) => {
  const [mostWatched, setMostWatched] = useState([]);
  const [continueWatching, setContinueWatching] = useState([]);

  useEffect(() => {
    getMostWatchedMovies();
  }, [movies]);

  function getMostWatchedMovies() {
    const mostWatchedMovies = movies.sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setMostWatched(mostWatchedMovies.slice(0, 4));
  }

  useEffect(() => {
    getContinueWatchingMovies();
  }, [movies]);

  function getContinueWatchingMovies() {
    const random = [...movies].sort(() => 0.5 - Math.random());
    const continueWatchingMovies = random.slice(0, 6);
    setContinueWatching(continueWatchingMovies);
  }



  return (
    <div className="flex flex-col">
      <div className="px-6 py-6  pb-0 mt-8 bg-white/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm max-w-[350px] min-w-[350px]">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] text-white font-medium">
            🔥 Most Watching
          </h3>
          <h3 className="text-[16px] text-white font-medium">
            <span className="text-[#6F6F6F]"> Sort by:</span> Today
          </h3>
        </div>
        <div className="h-[512px] overflow-y-auto overflow-x-hidden hide-scrollbar">
          {mostWatched.map((movie) => (
            <Mostwatched
              key={movie.id}
              title={movie.title}
              image={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
              onAddFavourites={addFavourites}
              id={movie.id}
            />
          ))}
        </div>
      </div>
      <div className="p-6 mt-8 bg-white/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm max-w-[350px] min-w-[350px]">
        <div className="flex items-center justify-between">
          <h3 className="text-[16px] text-white font-medium">
            Continue Playing
          </h3>
        </div>
        <div className="h-[512px] overflow-y-auto overflow-x-hidden hide-scrollbar">
          {continueWatching.map((movie) => (
            <ContinueWatching
              key={movie.id}
              title={movie.title}
              image={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
