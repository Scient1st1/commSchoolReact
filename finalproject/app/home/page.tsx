"use client";
import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { useRef } from "react";

type movieType = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};

const Page = () => {
  const [movies, setMovies] = useState<movieType[]>([]);
  const [allMovies, setAllMovies] = useState<movieType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const [page, setPage] = useState(1);

  const API = `${process.env.NEXT_PUBLIC_API}`;

  async function fetchMovies(page: number) {
    try {
      const response = await fetch(
        `${API}&page=${page}&sort_by=popularity.desc`
      );
      const data = await response.json();
      setAllMovies((prevAllMovies) => {
        const newMovies = data.results.filter(
          (newMovie: movieType) =>
            !prevAllMovies.some(
              (existingMovie) => existingMovie.id === newMovie.id
            )
        );
        setMovies((prevMovies) => [...prevMovies, ...newMovies]);
        return [...prevAllMovies, ...newMovies];
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchMovies(1);
  }, []);

  const baseClases =
    "bg-gray-400  absolute bottom-1.5 text-white hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded text-xs px-3 py-1.5 focus:outline-none";
  const bgClass = !searchTerm ? "bg-gray-400" : "bg-indigo-600";

  function loadMore() {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchMovies(nextPage);
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
  }

  function handleSearch() {
    const filteredMovies = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setMovies(filteredMovies);
  }

  function handleSearchClear() {
    setSearchTerm("");
    setMovies(allMovies);
    if (inputRef.current) inputRef.current.value = "";
  }

  return (
    <>
      <div className="filters container flex items-center justify-end p-4 mx-auto">
        <form className="w-[500px]">
          <label
            htmlFor="search"
            className="block mb-2.5 text-sm font-medium text-heading sr-only "
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-body"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-3 ps-9 bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body"
              placeholder="Search"
              ref={inputRef}
              value={searchTerm}
              onChange={handleInputChange}
              required
            />
            <button
              type="button"
              disabled={!searchTerm}
              className={`${baseClases} end-16.5 ${bgClass}`}
              onClick={handleSearch}
            >
              Search
            </button>
            <button
              type="button"
              disabled={!searchTerm}
              className={`${baseClases} end-1.5 ${bgClass}`}
              onClick={handleSearchClear}
            >
              Clear
            </button>
          </div>
        </form>
      </div>
      <div className="movies container flex flex-wrap justify-center gap-6 p-4 mx-auto">
        {movies.map((movie: movieType) => (
          <div
            key={movie.id}
            className="movie w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <div className="movie-card relative">
              <Heart
                width={30}
                height={30}
                className="absolute top-2 right-2 text-red-600 z-10 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                }}
              />
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto rounded-md mb-4"
              />
              <h2 className="text-xl font-bold text-white mb-2">
                {movie.title}
              </h2>
              <p className="text-gray-300 text-sm mb-2">
                {movie.overview.substring(0, 100) + "..."}
              </p>
              <p className="text-gray-400 text-xs">
                Release Date: {movie.release_date}
              </p>
              <p className="text-gray-400 text-xs">
                Rating: {movie.vote_average}
              </p>
            </div>
          </div>
        ))}
        <div className="load-more text-center w-full my-8">
          {movies.length > 0 && (
            <button
              type="button"
              className="text-white bg-indigo-600 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 cursor-pointer"
              onClick={loadMore}
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
