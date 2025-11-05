import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { useOutletContext } from "react-router-dom";
import { Link } from "react-router-dom";

const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
const API_BASE_URL = "https://api.themoviedb.org/3";

// ("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_runtime.gte=100");

const apiParams = {
  page: 2,
  adult: false,
  video: false,
  language: "en-US",
  sort_by: "popularity.desc",
  with_runtime: 100,
};

const Alltrendingmovies = () => {
  const { page, adult, video, language, sort_by, with_runtime } = apiParams;

  const [trendingmovies, setTrendingMovies] = useState([]);
  const { addFavourites } = useOutletContext();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/discover/movie?api_key=${API_KEY}&include_adult=${adult}&include_video=${video}&language=${language}&page=${page}&sort_by=${sort_by}&with_runtime.gte=${with_runtime}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setTrendingMovies(data.results);
      } catch (error) {
        console.error("Error fetching trending movies:", error);
      }
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className="flex flex-wrap gap-5 pt-5 ">
      {trendingmovies.map((movie) => (
        <Moviecard
          key={movie.id}
          movie={movie}
          onAddFavourites={addFavourites}
          id={movie.id}
        />
      ))}
    </div>
  );
};

function Moviecard({ movie, onAddFavourites }) {
  return (
    <div className="w-[30%] h-44  rounded-3xl overflow-hidden relative cursor-pointer mt-[13px]">
      <Link to={`/movie/${movie.id}`}>
        {/* Background Image Container */}
        <div className="w-full h-full relative overflow-hidden">
          <img
            src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
            alt={movie.title}
            className="w-full h-full object-cover absolute top-0 left-0"
          />

          <span className="favourite absolute top-5 right-5 z-50">
            <AiOutlineHeart
              onClick={(e) => {
                e.preventDefault();
                onAddFavourites(movie);
              }}
              size={24}
              color="#ffffff"
            />
          </span>

          {/* Content Container */}
          <div className="absolute bottom-0 p-4 md:p-6 flex justify-between items-center z-10 w-full bg-white/50 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[9.3px]">
            {/* Movie Title */}
            <div className="">
              <h2 className="text-white text-[16px] font-semibold">
                {movie.title}
              </h2>
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
      </Link>
    </div>
  );
}

export default Alltrendingmovies;
