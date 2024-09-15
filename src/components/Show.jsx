import React from "react";

const getData = async () => {
  try {
    const responose = await fetch(process.env.URI, { cache: "no-store" });
    return responose.json();
  } catch (error) {
    console.log("error:", error);
  }
};

const Show = () => {
  return <div>Show</div>;
};

export default Show;
