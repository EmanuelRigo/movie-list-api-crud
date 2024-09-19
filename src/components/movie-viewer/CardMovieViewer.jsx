"use client";
import Image from "next/image";
import React from "react";
import { useContext } from "react";
import { movieContext } from "@/context/MovieContext";

const CardMovieViewer = () => {
  const { movie } = useContext(movieContext);

  const myLoader = ({ src, width, quality }) => {
    return `https://image.tmdb.org/t/p/w500${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  if (!movie) {
    return <h1>Elija una película</h1>;
  }

  return (
    <div className="px-1 h-full">
      <div className="flex flex-col p-4 h-full bg-gray-800 rounded-lg">
        <div className="relative h-[500px] bg-black rounded-lg bg-opacity-50">
          {/* Ajusta la altura aquí */}
          <Image
            loader={myLoader}
            src={movie.poster_path}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Ajusta los tamaños según tu diseño
            style={{ objectFit: "cover" }}
            alt={movie.title || "Movie Poster"}
            className="rounded-lg"
          />
        </div>
        <div className="">
          <h3 className="text-white pt-4 pb-2 font-bold">{movie.title}</h3>
          <p className="text-white pb-2">
            {movie.release_date && movie.release_date.split("T")[0]}
          </p>
          <div className="overflow-auto max-h-[87px] scrollbar-hidden">
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
