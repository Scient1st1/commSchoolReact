import { Link } from "react-router-dom";

const Favouriteslist = ({ favourites }) => {
  return favourites.length > 0 ? (
    <div className=" flex flex-col w-full">
      <h2 className="text-white text-2xl sm:text-3xl font-bold">Favourites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {favourites.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <div
              key={movie.id}
              className="bg-white/10 rounded-lg overflow-hidden"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-auto object-cover"
              />
              <div className="p-4">
                <h3 className="text-white text-lg font-semibold">
                  {movie.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <div className="ml-10 w-full pt-10 text-white text-xl">
      No favourites added yet.
    </div>
  );
};

export default Favouriteslist;
