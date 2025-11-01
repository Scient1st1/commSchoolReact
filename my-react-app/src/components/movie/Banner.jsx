import { FaPlay } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

/**
 * HeroMovieBanner
 * ------------------------------------------------------------------
 * A responsive hero/banner component inspired by the provided design.
 * Tech: React + TailwindCSS + react-icons
 *
 * Props:
 *  - title: string
 *  - description: string
 *  - tags: string[] (e.g., ["Animation", "Adventure", "Comedy"])
 *  - bgImage: string (URL)
 *  - recommendedText: string (e.g., "Recommended for you!")
 *
 * Usage example:
 * <div className="p-4 bg-neutral-900 min-h-screen">
 *   <HeroMovieBanner
 *     title="Ralph Breaks the Internet"
 *     description="Taking place six years after saving the arcade from Turbo's vengeance, the Sugar Rush arcade cabinet has broken, forcing Ralph and Vanellope to travel to the Internet via the newly-installed Wi‑Fi router in Litwak's Arcade to retrieve the piece capable of saving the game."
 *     tags={["Animation", "Adventure", "Comedy"]}
 *     bgImage="https://image.tmdb.org/t/p/original/qEnH5meR381iMpmCumAIMswcQw2.jpg"
 *     recommendedText="🔥 Recommended for you!"
 *   />
 * </div>
 */
export default function HeroMovieBanner({
  title = "Ralph Breaks the Internet",
  description = "Taking place six years after saving the arcade from Turbo's vengeance, the Sugar Rush arcade cabinet has broken, forcing Ralph and Vanellope to travel to the Internet via the newly-installed Wi‑Fi router in Litwak's Arcade to retrieve the piece capable of saving the game.",
  tags = ["Animation", "Adventure", "Comedy"],
  bgImage = "https://image.tmdb.org/t/p/original/qEnH5meR381iMpmCumAIMswcQw2.jpg",
  recommendedText = "🔥 Recommended for you!",
}) {
  return (
    <section
      className="relative w-full rounded-3xl overflow-hidden shadow-xl mt-[32px]"
      style={{
        // Keep a cinematic 21:9 feel on large screens while staying responsive
        aspectRatio: "16 / 6",
      }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* Vignette + gradient overlay for legibility */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/70 via-black/30 to-transparent" />
      <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_-80px_120px_-40px_rgba(0,0,0,0.55)]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-6 md:p-10">
        {/* Header: Recommended */}
        <div>
          <div className="inline-flex items-center gap-2 text-white/90 drop-shadow-md">
            <span className="text-lg sm:text-xl md:text-2xl font-semibold">
              {recommendedText}
            </span>
          </div>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full bg-white/12 text-white/90 text-xs sm:text-sm backdrop-blur-[9.3px] border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Title + Description */}
        <div className="max-w-3xl">
          <h1 className="text-white text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)]">
            {title}
          </h1>
          <p className="mt-3 md:mt-4 text-white/80 text-sm sm:text-base md:text-lg leading-relaxed line-clamp-4 md:line-clamp-none">
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            className="inline-flex items-center gap-3 text-neutral-900 bg-white hover:bg-white/90 active:bg-white/80 transition-colors font-semibold rounded-2xl px-5 sm:px-6 py-3 sm:py-3.5 shadow-lg"
            aria-label="Play"
          >
            <FaPlay className="text-xl" />
            <span className="text-base sm:text-lg">Play</span>
          </button>

          <button
            className="inline-flex items-center gap-3 text-white bg-white/20 hover:bg-white/25 active:bg-white/30 transition-colors font-semibold rounded-2xl px-5 sm:px-6 py-3 sm:py-3.5 backdrop-blur-[9.3px] border border-white/25 shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
            aria-label="Watch Later"
          >
            <MdOutlineWatchLater className="text-2xl" />
            <span className="text-base sm:text-lg">Watch Later</span>
          </button>

          <button
            className="inline-flex items-center justify-center text-white bg-white/15 hover:bg-white/20 active:bg-white/25 transition-colors rounded-2xl p-3 sm:p-3.5 backdrop-blur-[9.3px] border border-white/20"
            aria-label="More"
          >
            <HiOutlineDotsHorizontal className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
