import EditMovie from "@/components/add-movie/EditMovie";

const uri = "http://localhost:3000/api/movie";

// Function to fetch data on the server
const getDataById = async (id) => {
  try {
    const response = await fetch(`${uri}/${id}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error: ", error);
    return null;
  }
};

// Server component
const Edit = async ({ params }) => {
  const { id } = params;
  const data = await getDataById(id); // Data is fetched here

  const onSubmitEdit = async (formData) => {
    const { name, age } = formData;
    try {
      const response = await fetch(`${uri}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name, age: age }),
      });

      if (!response.ok) {
        throw new Error("Failed to update.");
      }
      // Handle redirection after successful update
      return new Response(null, { status: 302, headers: { Location: "/" } });
    } catch (error) {
      console.error(error);
    }
  };

  // Handling the case when data is not available
  if (!data) {
    return (
      <div>
        {console.log(data)}
        <div>No data available</div>
        {/* Rendering the EditMovie component and passing the data */}
      </div>
    );
  }

  // Rendering the EditMovie component when data is available
  return <EditMovie movie={data} />;
};

export default Edit;
