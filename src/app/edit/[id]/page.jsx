import EditMovie from "@/components/add-movie/EditMovie";

// URL base de la API
const uri = "http://localhost:3000/api/movie";
let data = null;

// Función para obtener datos del servidor
const getDataById = async (id) => {
  try {
    console.log("/////////////", "pageEdit", "/////////////");
    const response = await fetch(`${uri}/${id}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }
    data = await response.json();
    return data;
  } catch (error) {
    console.error("Error: ", error);
    return null;
  }
};

// Componente de servidor
const Edit = async ({ params }) => {
  const { id } = params;
  const data = await getDataById(id); // Se obtienen los datos aquí
  console.log("hola data///////////");
  console.log("////////", data.title);

  // Si no hay datos disponibles, renderiza un mensaje
  if (!data) {
    console.log("No data available:", data); // Solo se llama cuando `data` es null
    return <div>No data available</div>;
  }
  console.log(data.data.title);
  return <EditMovie movie={data.data} />;
};

export default Edit;
