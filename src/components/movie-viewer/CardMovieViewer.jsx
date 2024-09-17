"use client";
import Image from "next/image";
import React from "react";

import { useContext } from "react";
import { movieContext } from "@/context/MovieContext";

const CardMovieViewer = () => {
  const { movie } = useContext(movieContext);
  console.log(movie, "cardmovie");

  const myLoader = ({ src, width, quality }) => {
    return `https://image.tmdb.org/t/p/w500${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  return (
    <div className="p-4 h-full ">
      <div className="flex flex-col p-4 h-full bg-gray-800 rounded-lg">
        <div className=" h-full bg-black rounded-lg bg-opacity-50">
          <div className="h-4/6 relative">
            <Image
              loader={myLoader}
              src={movie.poster_path ? movie.poster_path : "/images/poster.jpg"}
              layout="fill"
              objectFit="cover"
              alt="Picture of the author"
              className="object-cover rounded-lg "
            />
          </div>
          <div className="px-3">
            <h3 className="text-white pt-4 pb-2">{movie.title}</h3>
            <p className="text-white pb-2">
              {movie.release_date && movie.release_date.split("T")[0]}
            </p>
            <p className="text-xs text-white">{movie.overview}</p>
          </div>
        </div>

        <div className="flex justify-evenly">
          <div
            className={movie.formats?.vhs ? "text-green-500" : "text-red-500"}
          >
            VHS
          </div>
          <div
            className={movie.formats?.dvd ? "text-green-500" : "text-red-500"}
          >
            DVD
          </div>
          <div
            className={
              movie.formats?.bluray ? "text-green-500" : "text-red-500"
            }
          >
            BLU RAY
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardMovieViewer;
