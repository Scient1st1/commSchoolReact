"use client";
import React from "react";
import { useParams } from "next/navigation";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

type MovieDetailsType = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  release_date: string;
  vote_average: number;
  runtime: number;
  genres: { id: number; name: string }[];
  status: string;
};

const Page = () => {
  const params = useParams();
  const id = params.id || "";
  const key = `${process.env.NEXT_PUBLIC_TMDB_KEY}`;
  const [movieDetails, setMovieDetails] = useState<MovieDetailsType | null>(
    null
  );
  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
        );
        const data = await response.json();
        setMovieDetails(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>
      <p>Release Date: {movieDetails.release_date}</p>
    </div>
  );
};

export default Page;
