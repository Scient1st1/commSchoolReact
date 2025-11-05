import { useOutletContext } from "react-router-dom";
import Banner from "../components/movie/Banner";
import Trending from "../components/movie/Trending";

function Home() {
  const { movies, addFavourites } = useOutletContext();

  return (
    <div className=" flex flex-col w-full p-5">
      <Banner />
      <div className="mt-8">
        <Trending movies={movies} onAddFavourites={addFavourites} />
      </div>
    </div>
  );
}

export default Home;
