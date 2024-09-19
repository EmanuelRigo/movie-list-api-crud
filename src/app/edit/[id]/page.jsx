"use client";
import Form from "@/components/Form";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const uri = "http://localhost:3000/api/movie";

const getDataById = async (id) => {
  try {
    const response = await fetch(`${uri}/${id}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Failed to update.");
    }
    return response.json();
  } catch (error) {
    console.log("Error : ", error);
  }
};

const Edit = async ({ params }) => {
  const router = useRouter();
  const [movieToAdd, setMovieToAdd] = useState(null);
  const id = params.id;
  const { data } = await getDataById(id);
  //console.log("documento completo :"+JSON.stringify(data)); //recibo el documento
  //const {name, age} = data

  const onSubmitEdit = async (formData) => {
    console.log("formData:", formData);
    const { name, age } = formData;
    try {
      const response = await fetch(`${uri}/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ name: name, age: age }),
      });

      if (!response.ok) {
        throw new Error("Failed to update.");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const checkFormats = async () => {
    if (movieToAdd) {
      const { vhs, dvd, bluray } = movieToAdd.formats;
      if (vhs || dvd || bluray) {
        try {
          const response = await fetch(uri, {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(movieToAdd),
          });
          if (response.ok) {
            router.refresh(); // Refresca la página actual
            router.push("/"); // Navega a la página principal
          } else {
            throw new Error("Failed to create");
          }
        } catch (error) {
          console.log(error);
        }

        alert(
          "¡Atención! Alguno de los formatos (VHS, DVD o Blu-ray) está disponible."
        );
      } else {
        alert("todo bien");
      }
    }
  };

  const handleFormatChange = (format) => {
    setMovieToAdd((prev) => {
      const newValue = !prev.formats[format];
      return {
        ...prev,
        formats: {
          ...prev.formats,
          [format]: newValue,
        },
      };
    });
  };

  const myLoader = ({ src, width, quality }) => {
    return `https://image.tmdb.org/t/p/w500${src}?w=${width}&q=${
      quality || 75
    }`;
  };

  if (!data) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="h-screen w-screen flex items-center">
      <div className="container rounded-lg  bg-gray-900 mx-auto flex w-full h-full lg:h-5/6 overflow-auto">
        <div className="rounded-lg aspect-4/6  relative m-4  outline outline-offset-3 outline-orange-500">
          <Image
            loader={myLoader}
            src={data.poster_path ? data.poster_path : "/images/poster.jpg"}
            alt={data.title}
            width={500}
            height={750}
            className="object-cover rounded-lg "
          />
        </div>
        <div className="text-white p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl">{data.title}</h1>
              <Link
                href="/add-movie"
                className="p-4 bg-orange-500 rounded-lg text-black"
              >
                Volver
              </Link>
            </div>
            <p className="mb-4">{data.release_date}</p>
            {data.genres &&
              data.genres.map((genre) => <p key={genre.id}>{genre.name}</p>)}
            <p>{data.overview}</p>
          </div>
          <div>
            <div className="flex justify-start mb-4">
              <button
                onClick={() => handleFormatChange("vhs")}
                className={`${
                  movieToAdd?.formats.vhs ? "bg-orange-500" : "bg-gray-800"
                } p-4 me-4 w-28  rounded-lg  outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer`}
              >
                VHS
              </button>
              <button
                onClick={() => handleFormatChange("dvd")}
                className={`${
                  movieToAdd?.formats.dvd ? "bg-orange-500" : "bg-gray-800"
                } p-4 me-4 w-28  rounded-lg  outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer`}
              >
                DVD
              </button>
              <button
                onClick={() => handleFormatChange("bluray")}
                className={`${
                  movieToAdd?.formats.bluray ? "bg-orange-500" : "bg-gray-800"
                } p-4 w-28  rounded-lg  outline outline-none hover:outline-offset-3 hover:outline-orange-500 hover:cursor-pointer`}
              >
                BLU-RAY
              </button>
            </div>
            <button
              onClick={checkFormats}
              className="p-5 bg-orange-500 rounded-lg w-full text-black"
            >
              Terminar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
