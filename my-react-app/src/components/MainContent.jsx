import React from "react";
import Banner from "./movie/Banner";
import Trending from "./movie/Trending";

const MainContent = ({ movies, addFavourites }) => {
  return (
    <div className="ml-10 flex flex-col w-full">
      <Banner />
      <div className="mt-8">
        <Trending movies={movies} onAddFavourites={addFavourites} />
      </div>
    </div>
  );
};

export default MainContent;
