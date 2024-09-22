"use client";
import { useContext, useEffect } from "react";
import { movieContext } from "@/context/MovieContext";
import { CardRow } from "./CardRow";
import OrderListButtons from "../menu/OrderListButtons";

const MovieListClient = ({ list }) => {
  const { movieList, setMovieList, movie } = useContext(movieContext);

  useEffect(() => {
    setMovieList(list);
  }, []);

  return (
    <>
      <OrderListButtons></OrderListButtons>
      <div className="relative rounded-lg flex-grow scrollbar-hidden overflow-auto scroll-smooth scoll-duration-600 py-4">
        <div className="w-full absolute p-1">
          {movieList.map((element) => (
            <CardRow
              movie={element}
              key={element._id}
              isFocused={movie?._id === element._id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MovieListClient;
