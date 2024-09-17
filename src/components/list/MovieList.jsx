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

const { data } = await getData();
console.log(data);

export const MovieList = async () => {
  const { data } = await getData();
  console.log(data);

  return (
    <div className="p-3 flex flex-col">
      <p className="text-2xl p-1 text-white">MovieList</p>
      <div className="relative my-4 rounded-lg flex-grow  scrollbar-hidden overflow-auto">
        <div className="w-full p-1">
          {data.map((element) => (
            <div className="bg-gray-700 mb-3 p-4 rounded-lg outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer flex items-center">
              <p className="text-white-500">{element.title}</p>
              <Link
                className="bg-orange-500 p-3 rounded-lg hover:bg-orange-700"
                href={`/edit/${element._id}`}
              >
                edit
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
