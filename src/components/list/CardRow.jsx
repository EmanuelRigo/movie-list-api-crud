"use client";
import Link from "next/link";
import { useMovieContext } from "@/context/MovieContext";
import { useContext } from "react";
import { movieContext } from "@/context/MovieContext";

export const CardRow = ({ movie }) => {
  // console.log(useMovieContext);
  // const { updateCardMovie } = useMovieContext();

  const { updateCardMovie } = useContext(movieContext);

  const handleClick = () => {
    updateCardMovie(movie);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-gray-700 mb-3 p-4 rounded-lg outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer flex justify-between w-full"
    >
      <p>{movie.title}</p>
      <Link
        className="text-orange-500 hover:text-orange-700"
        href={`/edit/${movie._id}`}
      >
        edit
      </Link>
    </button>
  );
};
