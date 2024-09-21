import React, { useContext } from "react";
import { movieContext } from "@/context/MovieContext";

const OrderListButtons = () => {
  const { setMovieList, movieList } = useContext(movieContext);

  function ordenarPorTitulo() {
    const sortedList = [...movieList].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setMovieList(sortedList);
    console.log(movieList);
  }

  function ordenarPorFecha() {
    const sortedList = [...movieList].sort(
      (a, b) => new Date(a.release_date) - new Date(b.release_date)
    );
    setMovieList(sortedList);
    console.log(movieList);
  }

  return (
    <div className="flex justify-between mb-4">
      <button
        className="bg-blue-700 hover:bg-blue-900 text-white p-2 rounded"
        onClick={ordenarPorFecha}
      >
        Ordenar por fecha
      </button>
      <button
        className="bg-blue-700 hover:bg-blue-900 text-white p-2 rounded"
        onClick={ordenarPorTitulo}
      >
        Ordenar por título
      </button>
    </div>
  );
};

export default OrderListButtons;
