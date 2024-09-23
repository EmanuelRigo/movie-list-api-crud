"use client";
import { useContext, useEffect, useRef } from "react";
import { movieContext } from "@/context/MovieContext";
import { CardRow } from "./CardRow";
import OrderListButtons from "../menu/OrderListButtons";

const MovieListClient = ({ list }) => {
  const { movieList, setMovieList, movie } = useContext(movieContext);

  // Referencia para almacenar los elementos de cada fila de película
  const movieRows = useRef([]);

  useEffect(() => {
    setMovieList(list);
  }, []);

  useEffect(() => {
    // Encuentra el primer elemento con la clase 'outline-offset-0' y realiza el scroll
    const elementToScroll = movieRows.current.find((row) =>
      row?.classList.contains("outline-offset-0")
    );

    // Si se encuentra el elemento, desplaza el scroll hasta allí
    if (elementToScroll) {
      elementToScroll.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [movie]); // Este efecto se ejecuta cada vez que cambia la película seleccionada (movie)

  return (
    <>
      <OrderListButtons />
      <div className="relative rounded-lg flex-grow scrollbar-hidden overflow-auto scroll-smooth scoll-duration-600 py-4">
        <div className="w-full absolute p-1">
          {movieList.map((element, index) => (
            <div
              key={element._id}
              ref={(el) => (movieRows.current[index] = el)} // Guardamos la referencia a cada fila
              className={
                movie?._id === element._id
                  ? "outline-offset-0 outline-orange-500 rounded-lg"
                  : ""
              }
            >
              <CardRow movie={element} isFocused={movie?._id === element._id} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieListClient;
