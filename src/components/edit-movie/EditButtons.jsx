import { useRouter } from "next/navigation";

const uri = "http://localhost:3000/api/movie";

const EditButtons = ({ id, movie }) => {
  const router = useRouter();
  console.log("+++++++++++", movie);

  const checkFormats = async () => {
    if (movie) {
      const { vhs, dvd, bluray } = movie.formats;
      if (vhs || dvd || bluray) {
        alert(
          "¡Atención! Alguno de los formatos (VHS, DVD o Blu-ray) está disponible."
        );
        onSubmitEdit(movie);
      } else {
        alert("todo bien");
      }
    }
  };

  const onSubmitEdit = async (movie) => {
    const { formats } = movie;
    try {
      console.log("++++++", id);
      const responose = await fetch(`${uri}/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ formats }),
      });
      if (!responose.ok) {
        throw new Error("Failed to update.");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error, "hola error");
    }
  };

  return (
    <button
      onClick={checkFormats}
      className="p-5 bg-orange-500 rounded-lg w-full text-black"
    >
      Terminar
    </button>
  );
};

export default EditButtons;
