import { FaPlay } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

/**
 * NowTrendingSection
 * ------------------------------------------------------------------
 * A horizontally scrollable list of movie cards with glass chips,
 * gradient overlays, and a floating Play button—matching the provided design.
 */
export default function NowTrendingSection({
  title = "🔥 Now Trending",
  seeAllText = "See all",
  movies = [],
  onAddFavourites,
}) {
  return (
    <section className="w-full ">
      {/* Header */}
      <div className="flex items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-white text-2xl sm:text-3xl font-bold">{title}</h2>
        <Link to={`/alltrending`}>
          <button className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/20 hover:bg-white/25 text-white/90 backdrop-blur border border-white/20">
            <span className="text-sm font-medium">{seeAllText}</span>
            <FiChevronRight className="text-lg" />
          </button>
        </Link>
      </div>

      {/* Cards Row */}
      <div className="relative -mx-2 sm:mx-0 overflow-x-scroll ">
        <div className="flex gap-5 pb-4 ">
          {movies.map((m) => (
            <TrendingCard
              onAddFavourites={onAddFavourites}
              key={m.id}
              movie={m}
              id={m.id}
            />
          ))}
        </div>

        {/* Mobile See all button */}
        <div className="sm:hidden mt-2 flex justify-end pr-2">
          <Link to={`/alltrending`}>
            <button className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 hover:bg-white/25 text-white/90 backdrop-blur border border-white/20">
              <span className="text-sm font-medium">{seeAllText}</span>

              <FiChevronRight className="text-base" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrendingCard({ movie, onAddFavourites, id }) {
  return (
    <>
      <article className="relative snap-start shrink-0 w-[25%]  aspect-[3/4] rounded-[28px] overflow-hidden shadow-2xl">
        <Link to={`/movie/${id}`}>
          {/* Poster */}
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{
              backgroundImage: `url(${
                "https://image.tmdb.org/t/p/w1280" + movie.backdrop_path
              })`,
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-end gap-3">
            <div className="flex justify-between">
              <span className="self-start px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs sm:text-sm backdrop-blur-[9.3px] border border-white/20">
                {movie.original_language}
              </span>
              <span className="favourite z-50 cursor-pointer self-end px-3 py-1 rounded-full bg-white/15 text-white/90 text-xs sm:text-sm backdrop-blur-[9.3px] border border-white/20">
                <AiOutlineHeart
                  onClick={(e) => {
                    e.preventDefault();
                    onAddFavourites(movie);
                  }}
                  size={16}
                  color="#ffffff"
                />
              </span>
            </div>
            <h3 className="text-white text-xl sm:text-2xl font-semibold leading-tight line-clamp-2">
              {movie.title}
            </h3>
            <p className="text-white/80 text-sm leading-relaxed line-clamp-2 sm:line-clamp-3">
              {movie.overview}
            </p>

            {/* Play Button */}
            <button
              aria-label={`Play ${movie.name}`}
              className="absolute right-4 bottom-4 h-14 w-14 rounded-full flex items-center justify-center bg-white text-neutral-900 hover:bg-white/90 active:bg-white/80 shadow-xl"
            >
              <FaPlay className="text-2xl translate-x-[1px]" />
            </button>
          </div>
        </Link>
      </article>
    </>
  );
}
