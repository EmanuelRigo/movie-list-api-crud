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

function ordenarPorTitulo(arr) {
  return arr.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });
}

export const MovieList = async () => {
  const { data } = await getData();

  return (
    <div className=" flex flex-col h-screen lg:h-full ">
      <div className="relative my-4 rounded-lg flex-grow scrollbar-hidden overflow-auto">
        <div className="w-full absolute p-2">
          {ordenarPorTitulo(data).map((element) => (
            <CardRow movie={element} key={element._id} />
          ))}
        </div>
      </div>
    </div>
  );
};
