import Link from "next/link";
import { CardRow } from "./CardRow";

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
    <div className="p-3 flex flex-col h-screen lg:h-full">
      <p className="text-2xl p-1 text-white">MovieList</p>
      <div className="relative my-4 rounded-lg flex-grow scrollbar-hidden overflow-auto">
        <div className="w-full absolute p-1">
          {data.map((element, index) => (
            <CardRow movie={element} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
