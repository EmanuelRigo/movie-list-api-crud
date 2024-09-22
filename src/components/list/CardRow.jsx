"use client";
import Link from "next/link";
import { useMovieContext } from "@/context/MovieContext";
import { useContext, useEffect, useRef } from "react";
import { movieContext } from "@/context/MovieContext";

export const CardRow = ({ movie, isFocused }) => {
  // console.log(useMovieContext);
  // const { updateCardMovie } = useMovieContext();
  const buttonRef = useRef(null);

  const { updateCardMovie } = useContext(movieContext);

  const handleClick = () => {
    updateCardMovie(movie);
  };

  useEffect(() => {
    if (isFocused && buttonRef.current) {
      buttonRef.current.focus(); // Hacer foco en el botón si es necesario
      console.log(movie);
    }
  }, [isFocused]);

  return (
    <button
      ref={buttonRef}
      id={movie._id}
      onClick={handleClick}
      className="bg-gray-700 mb-3 p-4 rounded-lg outline outline-none hover:outline-offset-3 focus:outline-offset-0 focus:outline-orange-500 hover:outline-orange-500 hover:cursor-pointer flex justify-between w-full "
    >
      <p>{movie.title}</p>
      <Link
        className="text-orange-500 hover:text-orange-700 "
        href={`/edit/${movie._id}`}
      >
        edit
      </Link>
    </button>
  );
};
