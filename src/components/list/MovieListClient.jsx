"use client";
import { useContext, useEffect } from "react";
import { movieContext } from "@/context/MovieContext";
import { CardRow } from "./CardRow";
import OrderListButtons from "../menu/OrderListButtons";

const MovieListClient = ({ list }) => {
  const { movieList, setMovieList } = useContext(movieContext);

  useEffect(() => {
    setMovieList(list);
  }, []);

  return (
    <div className="w-full absolute p-2">
      <OrderListButtons></OrderListButtons>
      {movieList.map((element) => (
        <CardRow movie={element} key={element._id} />
      ))}
    </div>
  );
};

export default MovieListClient;
