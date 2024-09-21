import Link from "next/link";
import { CardRow } from "./CardRow";
import MovieListClient from "./MovieListClient";

const getData = async () => {
  try {
    const responose = await fetch(process.env.URI, { cache: "no-store" });
    return responose.json();
  } catch (error) {
    console.log("error:", error);
  }
};

export const MovieList = async () => {
  const { data } = await getData();

  return (
    <div className=" flex flex-col h-screen lg:h-full ">
      <div className="relative my-4 rounded-lg flex-grow scrollbar-hidden overflow-auto">
        <MovieListClient list={data}></MovieListClient>
      </div>
    </div>
  );
};
