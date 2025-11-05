import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { useOutletContext } from "react-router-dom";

const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";

const LoadingSkeleton = () => (
  <div className="text-white p-5">
    <div className="flex flex-col md:flex-row gap-8 animate-pulse">
      <div className="md:w-1/3 bg-gray-800 h-96 rounded-lg"></div>
      <div className="md:w-2/3">
        <div className="h-10 bg-gray-800 rounded w-3/4 mb-4"></div>
        <div className="h-6 bg-gray-800 rounded mb-4"></div>
        <div className="h-6 bg-gray-800 rounded w-5/6 mb-4"></div>
        <div className="h-6 bg-gray-800 rounded w-1/2 mb-4"></div>
        <div className="h-6 bg-gray-800 rounded w-2/3"></div>
      </div>
    </div>
  </div>
);

const Singlemovie = () => {
  const { id } = useParams();
  const { addFavourites } = useOutletContext();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSingleMovie = async () => {
      try {
        const response = await fetch(
          `${API_URL}movie/${id}?api_key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSingleMovie();
  }, [id]);

  if (loading) {
    return <LoadingSkeleton />;
  }
  if (error) {
    return <div className="p-5 text-white">Error: {error.message}</div>;
  }
  console.log(movie);

  return (
    <div className="text-white p-5">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3 relative">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg"
          />
          <span className="favourite absolute top-5 right-5 z-50 cursor-pointer">
            <AiOutlineHeart
              onClick={(e) => {
                e.preventDefault();
                addFavourites(movie);
              }}
              size={24}
              color="#ffffff"
            />
          </span>
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-lg mb-4">{movie.overview}</p>
          <div className="flex items-center mb-4">
            <span className="text-yellow-400 mr-2">
              Rating: {movie.vote_average}
            </span>
            <span>({movie.vote_count} votes)</span>
          </div>
          <div className="mb-4">
            <span className="font-bold">Release Date:</span>{" "}
            {movie.release_date}
          </div>
          <div>
            <span className="font-bold">Genres:</span>{" "}
            <span>{movie.genres.map((genre) => genre.name).join(", ")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singlemovie;
